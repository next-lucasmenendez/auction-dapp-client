import Web3 from 'web3';
import IPFS from 'ipfs';

import uint8arrays from '@/utils/uint8arrays';

export default class AuctionContractAPI {
    /**
     * Assign the contract address on ethereum and the CID of the contract ABI 
     * on IPFS.
     * @param {string} CID - Contract ABI definition address on IPFS.
     * @param {string} address - Ethereum deployed contract address.
     */
    constructor(CID, address) {
        this.CID = CID;
        this.address = address;
    }

    /**
     * Init methods starts asyncronously requesting the MetaMask account info,
     * starting the ABI definition download and loading the contract with Web3.
     */
    async init() {
        await this.requestMetaMaskAccount();
        await this.downloadABI();
        await this.loadContract();
    }

    /**
     * requestMetaMaskAccount uses the browser API to request information about
     * user Ethereum account associated to the current session. First, checks 
     * the support of this feature into the browser and request an action to get
     * the info. When the account information is available, initializes Web3 
     * client.
     */
    async requestMetaMaskAccount() {
        if (!window.ethereum) throw new Error("Not supported.");

        try {
            let method = 'eth_requestAccounts';
            this.accounts = await window.ethereum.request({ method });
            this.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        } catch (error) {
            console.error(error);
            throw new Error('Error getting account info');
        }
    }

    /**
     * downloadABI connects with IPFS to download the ABI definition based on 
     * the CID provided when AuctionContractAPI is created. After that, the 
     * method parses the ABI data downloaded.
     */
    async downloadABI() {
        let node, stream;
        try {
            node = await IPFS.create();
            stream = node.cat(this.CID);
        } catch (error) {
            await node.stop();
            console.error(error);
            throw new Error('Error getting ABI stream from IPFS.');
        }
        
        const chunks = [];
        for await (const chunk of stream) chunks.push(chunk);
        const data = uint8arrays.toString(uint8arrays.concat(chunks));
        
        try {
            let parsed = JSON.parse(data);
            this.ABI = parsed.output.abi;
            await node.stop();
        } catch (error) {
            await node.stop();
            console.error(error);
            throw new Error('Error parsing ABI content.');
        }
    }

    /**
     * loadContract method uses the Web3 SDK to get the contract based on the
     * contract address provided and the ABI definition downloaded from IPFS.
     */
    loadContract() {
        try {
            this.contract = new this.web3.eth.Contract(this.ABI, this.address);
        } catch (error) {
            console.error(error);
            throw new Error('Error loading contract.');
        }
    }

    /**
     * listenEvent allow to start to listen a the contract event.
     */
    listenEvent(event, origin = true) {
        return new Promise((resolve, reject) => {
            if (typeof this.contract.events[event] !== 'function') {
                reject(new Error('The contract has not the requested event.'));
            } 

            const options = origin ? { fromBlock: 0 } : {};
            this.contract.events[event](options, (error, event) => {
                if (error) {
                    console.error(error);
                    reject(new Error('Error listening "HighestBidIncreased" event.'));
                } else resolve(event);
            });
        });
    }

    /**
     * onBidIncreased starts to listen the contract event "HighestBidIncreased".
     */
    onBidIncreased() {
        return new Promise((resolve, reject) => {
            this.listenEvent('HighestBidIncreased', false)
                .catch(reject)
                .then(event => {
                    const { amount, bidder } = event.returnValues;
                    resolve({ amount, bidder });
                })
        });
    }

    getBidHistory() {
        return new Promise((resolve, reject) => {
            this.listenEvent('HighestBidIncreased')
                .catch(reject)
                .then(event => {
                    const { amount, bidder } = event.returnValues;
                    resolve({ amount, bidder });
                });
        });
    }
}
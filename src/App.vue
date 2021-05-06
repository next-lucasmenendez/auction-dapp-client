<template>
    <v-app>
        <h1>Check the console</h1>
    </v-app>
</template>

<script>
import Web3 from 'web3';
import IPFS from 'ipfs';


export default {
    name: 'App',
    async mounted() {
        const CID = 'QmWRLigQabGZUvtfxm4nPe23R9R5PRr8t7eR6nLK8xLi73';

        console.log('Connected to Metamask:' + await this.checkMetamask());
        console.log('Contract content:', await this.getContract(CID));
    },
    methods: {
        async getContract(CID) {
            const node = await IPFS.create();
            const stream = node.cat(CID);

            let data = ''
            for await (const chunk of stream) {
                data += chunk.toString();
            }

            return data;
        },
        async checkMetamask() {
            if (window.ethereum) {
                await window.ethereum.send('eth_requestAccounts');
                window.web3 = new Web3(window.ethereum);
                return true;
            }

            return false;
        }
    }
};
</script>
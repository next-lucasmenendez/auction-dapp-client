<template>
    <h1>Hello world</h1>
</template>

<script>
import AuctionContractAPI from '@/utils/AuctionContractAPI';

export default {
    name: 'Auction',
    props: {
        CID: String,
        address: String
    },
    async mounted() {
        const contract = new AuctionContractAPI(this.CID, this.address);
        await contract.init();

        console.log(contract);

        contract.onBidIncreased()
            .then(event => console.log(event))
            .catch(error => console.error(error));

        contract.getBidHistory()
            .then(event => console.log(event))
            .catch(error => console.error(error));
    }
}
</script>
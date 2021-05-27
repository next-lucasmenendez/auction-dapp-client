<template>
    <v-app>
        <h1>Check the console</h1>
    </v-app>
</template>

<script>
import AuctionContractAPI from '@/utils/AuctionContractAPI';

export default {
    name: 'App',
    async mounted() {
        const CID = 'QmemSozc3T6qq8Cg6pqNp1hJnXELs2EvLD3bJ7BCUCoHrQ';
        const address = '0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95';

        const contract = new AuctionContractAPI(CID, address);
        await contract.init();
        console.log('Contract:', contract);

        console.log('Listen for "HighestBidIncreased" event...');
        contract.onBidIncreased()
            .then(event => console.log(event))
            .catch(error => console.error(error));
    }
};
</script>
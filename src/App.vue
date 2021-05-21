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
        const CID = 'Qmd6GeLzSotJoFthdoc4ffRhJAM59xPp4dvJGb58PaZZto';
        const address = '0xd9145CCE52D386f254917e481eB44e9943F39138';

        const contract = new AuctionContractAPI(CID, address);
        await contract.init();
        console.log(contract);
    }
};
</script>
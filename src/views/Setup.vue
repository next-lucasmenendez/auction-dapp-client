<template>
    <div class="setup-section">
        <Title type="h2">Auction DApp Client</Title>
        <p>Enter the auction contract metadata:</p>

        <Input 
            type="text" 
            placeholder="IPFS CID of the auction contract" 
            v-model="contract.CID" />

        <Input 
            type="text" 
            placeholder="Ethereum address of the auction contract" 
            v-model="contract.address" />

        <Button @click="loadContract" class="load-btn">Connect to the auction</Button>
    </div>
</template>

<script>
import Title from '../elements/Title';
import Input from '@/elements/Input';
import Button from '@/elements/Button';

export default {
    name: 'Setup',
    data: () => ({
        contract: {
            CID: null,
            address: null
        }
    }),
    methods: {
        loadContract() {
            this.$router.push({ name: 'auction', params: this.contract });
        }
    },
    components: { Title, Input, Button }
}
</script>

<style scoped>
.setup-section {
    margin: 0 auto;
    text-align: center;
    max-width: 500px;
}

.load-btn {
    display: block;
    margin: 20px auto;
}
</style>
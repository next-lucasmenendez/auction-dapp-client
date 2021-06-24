<template>
    <input 
        :value="value" 
        @input="handleInput($event.target.value)" 
        v-bind="$attrs" />
</template>

<script>
export default {
    name: 'Input',
    props: {
        value: String
    },
    methods: {
        handleInput(value) {
            this.$emit('input', value);
        }
    }
}
</script>

<style>
input {
    display: inline-block;
    vertical-align: top;
    padding: 8px 16px;
    min-width: 250px;
    background: #f3f3f3;
    outline: none;
    border: none;
    border-bottom: 3px solid #bbb;
    margin: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
}
</style>
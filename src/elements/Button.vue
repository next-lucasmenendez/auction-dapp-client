<template>
    <button v-bind="$attrs" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style>
button {
    display: inline-block;
    vertical-align: top;
    background: var(--core-blue);
    padding: 12px 32px;
    color: white;
    border: 0;
    outline: 0;
    margin: 8px;
    font-family: 'BentonSansBBVA';
    font-weight: 300;
}
</style>
<template>
    <div :class="`title title-${this.type}`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        type: String,
        default: 'h1'
    }
}
</script>

<style>
.title {
    display: block;
    color: var(--core-blue);
    font-weight: bolder;
    padding: 3vh 0 2vh 0;
}

.title-h1 { font-size: 2em; }
.title-h2 { font-size: 1.7em; }
.title-h3 { font-size: 1.5em; }
.title-h4 { font-size: 1.3em; }
.title-h5 { font-size: 1.1em; }
</style>
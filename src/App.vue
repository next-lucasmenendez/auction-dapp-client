<template>
    <div>
        <AppBar/>

        <router-view/>
    </div>
</template>

<script>
import AppBar from '@/components/AppBar';

export default {
    name: 'App',
    components: { AppBar }
}
</script>

<style>
    html > * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --core-blue: #004481;
        --core-light-blue: #1464a5;
        --aqua: #2dcccd;
        --navy: #072146;
        --purple: #8f7ae5;
        --pink: #f78be8;
    }
</style>
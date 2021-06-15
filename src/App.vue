<template>
    <div>
        <AppBar/>

        <main>
            <router-view/>
        </main>
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
    @import '@/../public/assets/fonts/benton/BentonSansBBVA.css';

    html > * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'BentonSansBBVA';
    }

    :root {
        --core-blue: #004481;
        --core-light-blue: #1464a5;
        --aqua: #2dcccd;
        --navy: #072146;
        --purple: #8f7ae5;
        --pink: #f78be8;
    }

    main {
        display: block;
        margin: 80px auto;
        width: 90%;
        max-width: 1200px;
    }
</style>
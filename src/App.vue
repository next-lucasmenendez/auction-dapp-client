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
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap');

    html > * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;;
        font-weight: 300;
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
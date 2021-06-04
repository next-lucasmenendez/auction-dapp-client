<template>
    <div class="navbar">
        <img class="logo" src="/logo.png" />
    </div>
</template>

<style>
    .navbar {
        display: inline-block;
        vertical-align: top;
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 64px;
        background: var(--core-blue);
        padding: 12px 5%;
        box-sizing: border-box;
    }

    .navbar .logo {
        display: inline-block;
        vertical-align: top;
        width: auto;
        height: 100%;
    }
</style>
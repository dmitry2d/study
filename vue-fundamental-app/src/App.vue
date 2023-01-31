<template>
    <div class="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    export default {
        components: {
            NavBar
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
    html {
        font: 15px/1.3em 'Source Code Pro', monospace;
    }
    body {
        margin: 0 20vw 5rem;
        padding: 0 3rem;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1 {
        margin: 2rem 0;
    }
</style>
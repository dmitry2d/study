<template>
    <div>
        <h1>Welcome</h1>
        <br>
        <div class="links">
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/posts" class="link">Posts</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .links {
        margin: 1rem -0.5rem;
    }
    .link {
        padding: 0.5rem 1rem;
        background-color: rgba(0,0,0,0.05);
        margin: 0.5rem;
        border-radius: 0.5rem;
    }
</style>
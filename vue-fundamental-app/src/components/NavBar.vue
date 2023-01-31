<template>
    <div class="navbar">
        <div class="navbar__title">Vue 3 App</div>
        <div class="navbar__buttons">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0,0,0,0.05);
        padding: 0 0.5rem;
    }
</style>


<template>
    <div>Likes: {{ likes }}</div>
    <div>Dislikes: {{ dislikes }}</div>
    <button @click="addLike">Like</button>
    <button @click="addDislike">Dislike</button>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0
        }
    },
    methods: {
        addLike() {
            this.likes ++;
        },
        addDislike() {
            this.dislikes ++;
        }
    }
}
</script>

<style>

html {
    font-size: 16;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
}

</style>
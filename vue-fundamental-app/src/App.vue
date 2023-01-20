

<template>
    <div>Likes: {{ likes }}</div>
    <div>Dislikes: {{ dislikes }}</div>
    <button v-on:click="addLike">Like</button>
    <button v-on:click="addDislike">Dislike</button>
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

</style>
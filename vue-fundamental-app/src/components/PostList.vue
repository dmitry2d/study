<template>
    <div class="postlist">
        <post-item v-for="post in posts" :post="post" :key="post"/>
    </div>
</template>

<script>
    import PostItem from './PostItem.vue';
    export default {
        components: {PostItem},
        data() {},
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .postlist {
        margin-top: 1.5rem;
    }

</style>
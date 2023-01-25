<template>
    <div class="postlist">
        <h4 v-if="posts.length == 0">No Posts</h4>
        <h4 v-else>Post List</h4>
        <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @click="$emit('remove', post)"
        />
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
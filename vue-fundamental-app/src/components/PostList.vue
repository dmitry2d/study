<template>
    <div class="postlist">
        <h4 v-if="posts.length == 0">No Posts</h4>
        <h4 v-else>Post List</h4>
        <transition-group name="post-list__transitions">
            <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
            />
        </transition-group>
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

    .post-list__transitions-move,
    .post-list__transitions-enter-active,
    .post-list__transitions-leave-active {
        transition: all 0.3s ease;
    }
    .post-list__transitions-enter-from,
    .post-list__transitions-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .post-list__transitions-leave-active {
        position: absolute;
    }
    

</style>
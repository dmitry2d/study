
<template>
    <div class="post">
        <div>
            <div><strong>Title:</strong> {{post.title}}</div>
            <div><strong>Description:</strong> {{post.body}}</div>
        </div>
        <div class="post__buttons">
            <my-button
                @click="$emit('remove', post)"
            >
            Delete</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {},
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post {
        padding: 1.5rem;
        border: 2px solid #3ba776;
        border-radius: 1rem;
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background: white;
    }
</style>
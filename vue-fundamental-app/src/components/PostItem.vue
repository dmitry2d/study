
<template>
    <div>
        <div class="post">
            <div><strong>Title:</strong> {{post.title}}</div>
            <div><strong>Description:</strong> {{post.body}}</div>
        </div>
        <div class="post__buttons">
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
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
        align-items: center;
    }
</style>
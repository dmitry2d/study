
<template>
    <div class="post">
        <div>
            <div class="post__id">{{ post.id }}</div>
            <div
                class="post__title"
                @click="$router.push(`/posts/${post.id}`)"
            ><strong>Title:</strong> {{post.title}}</div>
            <div class="post__description"><strong>Description:</strong> {{post.body}}</div>
        </div>
        <div class="post__buttons">
            <my-button
                @click.stop="$emit('remove', post)"
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
        padding: 2rem;
        border: 2px solid #3ba776;
        border-radius: 1rem;
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background: white;
    }
    .post__id {
        font-size: 0.5rem;
        color: rgba(0,0,0,0.5);
    }
    .post__title {
        font-size: 1.3rem;
        margin: 0 0 1rem 0;
        cursor: pointer;
        text-decoration: underline;
    }
    .post__description {
        font-size: 0.8rem;
    }
</style>
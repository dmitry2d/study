<template>
    <form class="form" @submit.prevent>
        <h4>New Post</h4>
        <my-input 
            v-model="post.title"
            placeholder="Title"
            />
        <my-input
            v-model="post.body"
            placeholder="Description"
        />
        <my-button
            @click="createPost"
            style="align-self: flex-end"
        >Create</my-button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    title:'',
                    body:''
                }
            }
        }
    }
</script>

<style scoped>
    .form {
        padding: 1.5rem;
        background-color: #f8f8f8;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
    }
</style>
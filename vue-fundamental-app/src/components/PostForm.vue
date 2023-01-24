<template>
    <form class="form" @submit.prevent>
        <h4>New Post</h4>
        <input 
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Title"
            >
            <input
            v-model="post.body"
            class="input"
            type="text"
            placeholder="Description"
        >
        <my-button
            @click="createPost"
            style="align-self: flex-end;"
        >Create</my-button>
    </form>
</template>

<script>
    import MyButton from './UI/MyButton.vue'
    export default {
        components: {
            MyButton
        },
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
    .input {
        padding: .5rem 1em;
        margin-top: .5rem;
        border: 1px solid #ddd;
        border-radius: 1rem;
        font: 1em/1.3em 'Source Code Pro', monospace;
        outline: none;
    }
    .input:focus {
        border: 1px solid #3ba776;
    }

</style>
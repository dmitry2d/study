
<template>
    <div>
        <h4>New Post</h4>
        <form class="form" @submit.prevent>
            <input 
                @input="title=$event.target.value"
                v-bind:value="title"
                class="input"
                type="text"
                placeholder="Title"
                >
                <input
                @input="body=$event.target.value"
                v-bind:value="body"
                class="input"
                type="text"
                placeholder="Description"
            >
            <button class="button"
                @click="createPost"
            >Create</button>
        </form>
        <h4>Posts</h4>
        <div class="post" v-for="post in posts" :key="post.id">
            <div><strong>Title:</strong> {{post.title}}</div>
            <div><strong>Description:</strong> {{post.body}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            body: '',
            posts: [
                {
                    id: 1,
                    title: 'Post about JavaScript',
                    body: 'JavaScript is a multipurpose programming language'
                },
                {
                    id: 2,
                    title: 'Post about PHP',
                    body: 'PHP is an old but famous programming language'
                },
                {
                    id: 3,
                    title: 'Post about NodeJS',
                    body: 'NodeJS is a fast and powerful JavaScript Framework'
                }
            ]
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost);
            this.title=''
            this.body=''
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
html {
    font: 15px/1.3em 'Source Code Pro', monospace;
}
body {
    margin: 50px 20vw;
    padding: 50px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.post {
    padding: 1.5rem;
    border: 2px solid #3ba776;
    border-radius: 1rem;
    margin-top: 1.5rem;
}
.form {
    padding: 1.5rem;
    background-color: #f8f8f8;
    border-radius: 1rem;
    margin-top: 1.5rem;
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
.button {
    padding: .5rem 1em;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-top: .5rem;
    font: 1em/1.3em 'Source Code Pro', monospace;
}

</style>
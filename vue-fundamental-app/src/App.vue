
<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';
export default {
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
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
        createPost(post) {
            this.posts.push (post)
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
</style>

<template>
    <div class="app">
        <h4>Posts</h4>
        <div class="app__buttons">
            <my-button @click="showDialog">Add Post</my-button>
            <my-select
                v-model="selectedSort"
                :options="selectedSortOptions"
            ></my-select>
        </div>
        <my-dialog v-model:display="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="sortedPosts"
            @remove="removePost"
            v-if="!postsLoading"
        />
        <div v-else style="padding-top: 1.5rem">Loading posts...</div>
    </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
import axios from 'axios'
export default {
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            postsLoading: false,
            selectedSort: '',
            selectedSortOptions: [
                {value: 'title', title: 'By Title'},
                {value: 'body', title: 'By Content'}
            ]
        }
    },
    methods: {
        createPost(post) {
            this.posts.push (post)
        },
        removePost(post) {
            this.posts = this.posts.filter (p=> p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            try {
                this.postsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
                this.posts = response.data
            } catch (error) {
                alert ('fetch error, see console')
                console.log (error)
            } finally {
                this.postsLoading = false
            }
        }
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
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
    .app__buttons {
        display: flex;
        justify-content: space-between;
    }
</style>
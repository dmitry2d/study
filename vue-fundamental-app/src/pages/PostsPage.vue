
<template>
    <div>
        <h1>Posts</h1>
        <div class="app__buttons">
            <my-button @click="showDialog">Add Post</my-button>
            <my-input
                v-model="searchQuery"
                placeholder="Search..."
            ></my-input>
            <my-select
                v-model="selectedSort"
                :options="selectedSortOptions"
            ></my-select>
        </div>
        <my-dialog v-model:display="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!postsLoading"
        />
        <div v-else style="padding-top: 1.5rem">Loading posts...</div>
        <div v-intersection="{watchDelay: 2000, callback: loadMorePosts}" class="observer"></div>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
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
            ],
            searchQuery: '',
            paginationOptions: {
                _page: 1,
                _limit: 3
            },
            totalPages: 0,
            postsAreLoading: false
        }
    },
    methods: {
        createPost(post) {
            this.posts.push (post)
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter (p=> p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async loadMorePosts() {
            if (this.postsAreLoading) {
                return
            }
            if (this.totalPages > 0 && this.paginationOptions._page >= this.totalPages) {
                return
            }
            try {
                this.postsAreLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        ...this.paginationOptions
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.paginationOptions._limit)
                this.posts = [...this.posts, ...response.data]
                this.paginationOptions._page ++
            } catch (error) {
                alert ('fetch error, see console')
                console.log (error)
            } finally {
                this.postsAreLoading = false;
            }
        }

    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        }
    }
}
</script>

<style>
    .app__buttons {
        display: flex;
        justify-content: space-between;
    }
    .observer {
        height: 2rem;
        background-color: rgba(0,0,0,0.02);
    }
</style>
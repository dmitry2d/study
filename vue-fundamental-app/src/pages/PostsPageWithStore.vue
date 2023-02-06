
<template>
    <div>
        <h1>Posts</h1>
        <div class="app__buttons">
            <my-button @click="showDialog">Add Post</my-button>
            <my-input
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
                placeholder="Search..."
            ></my-input>
            <my-select
                :model-value="selectedSort"
                :options="selectedSortOptions"
                @update:model-value="setSelectedSort"
            ></my-select>
        </div>
        <my-dialog v-model:display="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        />
        <div v-intersection="{watchDelay: 1000, callback: loadMorePosts}" class="observer"></div>
    </div>
</template>

<script>
    import PostList from '@/components/PostList.vue'
    import PostForm from '@/components/PostForm.vue'
    import {mapState, mapActions, mapGetters, mapMutations} from 'vuex' 
    export default {
        components: {
            PostList,
            PostForm
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
        methods: {
            ...mapMutations({
                setSearchQuery: 'post/setSearchQuery',
                setSelectedSort: 'post/setSelectedSort'
            }),
            ...mapActions({
                loadMorePosts: 'post/loadMorePosts'
            }),
            createPost(post) {
                this.posts.push (post)
                this.dialogVisible = false;
            },
            removePost(post) {
                this.posts = this.posts.filter (p=> p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true
            }

        },
        computed: {
            ...mapState({
                postsLoading: state => state.post.postsLoading,
                selectedSort: state => state.post.selectedSort,
                selectedSortOptions: state => state.post.selectedSortOptions,
                searchQuery: state => state.post.searchQuery
            }),
            ...mapGetters({
                sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
            })
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
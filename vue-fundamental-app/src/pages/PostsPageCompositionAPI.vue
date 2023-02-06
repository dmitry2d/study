
<template>
    <div>
        <h1>Posts</h1>
        <div class="app__buttons">
            <!-- <my-button @click="showDialog">Add Post</my-button> -->
            <my-input
                v-model="searchQuery"
                placeholder="Search..."
            ></my-input>
            <my-select
                v-model="selectedSort"
                :options="selectedSortOptions"
            ></my-select>
        </div>
        <!-- <my-dialog v-model:display="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog> -->
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        />
        <div v-intersection="{watchDelay: 2000, callback: loadMorePosts}" class="observer"></div>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostList from '@/components/PostList.vue'
    import PostForm from '@/components/PostForm.vue'
    import usePosts from '@/hooks/usePosts'
    import useSortedPosts from '@/hooks/useSortedPosts'
    import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
    export default {
        components: {
            PostList,
            PostForm
        },
        data() {
            return {
                dialogVisible: false,
                selectedSortOptions: [
                    {value: 'title', title: 'By Title'},
                    {value: 'body', title: 'By Content'}
                ],
            }
        },
        setup(props) {
            const {posts, loadMorePosts, postsLoading, totalPages} = usePosts (10)
            const {selectedSort, sortedPosts} = useSortedPosts (posts)
            const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts (sortedPosts)
            return {
                posts,
                loadMorePosts,
                postsLoading,
                totalPages,
                sortedPosts,
                selectedSort,
                sortedAndSearchedPosts,
                searchQuery
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
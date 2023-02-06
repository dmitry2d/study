
import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
        postsLoading: false,
        selectedSort: '',
        selectedSortOptions: [
            {value: 'title', title: 'By Title'},
            {value: 'body', title: 'By Content'}
        ],
        searchQuery: '',
        page: 1,
        limit: 3,
        totalPages: 0
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) =>  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.includes(state.searchQuery))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setPostsLoading(state, bool) {
            state.postsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },

    },
    actions: {
        async loadMorePosts({state, commit}) {
            if (state.postsLoading) {
                return
            }
            if (state.totalPages > 0 && state.page >= state.totalPages) {
                return
            }
            try {
                commit('setPostsLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
                commit('setPage', state.page + 1)
            } catch (error) {
                alert('fetch error, see console')
                console.log (error)
            } finally {
                commit('setPostsLoading', false);
            }
        }
    },
    namespaced: true
}
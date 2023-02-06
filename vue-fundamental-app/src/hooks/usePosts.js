import axios from "axios";
import { ref } from 'vue';

export default function usePosts(limit) {

    const posts = ref([])
    const totalPages = ref(0)
    const postsLoading = ref(false)
    const page = ref(1)
    const loadMorePosts = async () => {
        if (postsLoading.value) {
            return
        }
        if (totalPages.value > 0 && page.value >= totalPages.value) {
            return
        }
        try {
            postsLoading.value = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page.value,
                    _limit: limit
                }
            })
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = [...posts.value, ...response.data]
            page.value ++
        } catch (error) {
            alert ('fetch error, see console')
            console.log (error)
        } finally {
            postsLoading.value = false;
        }
    }

    return {
        posts, loadMorePosts, postsLoading, totalPages
    }

   
}
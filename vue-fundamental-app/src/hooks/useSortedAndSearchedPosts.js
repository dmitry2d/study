import { ref, computed } from 'vue';

export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('')
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.includes(searchQuery.value))
    })
    return {
        searchQuery, sortedAndSearchedPosts
    }
   
}
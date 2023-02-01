/*
    VIntersection Vue 3 Directive Code File
    
    Fires <Callback> if DOM Node is visible (periodically) or intersects window (immediately)
    Use:
    <div
        v-intersection="{watchDelay: <milliseconds>, callback: <function>}"
    ></div>

*/

export default {
    name: 'intersection',
    mounted(element, binding) {

        const watchDefaultDelay = 2000 //ms

        // Using IntersectionObserver API to detect intersections
        const options = {
            rootMargin: '0px',
            threshold: 1
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                binding.value?.callback()
            }
        }, options);

        // Periodically reset IntersectionObserver to detect visibility
        const watcher = () => {
            try {
                observer.unobserve(element)
                observer.observe(element)
            } catch (error) {
                console.log ()
            } finally {
                setTimeout(() => {
                    watcher()
                }, binding.value?.watchDelay || watchDefaultDelay)
            }
        }
        watcher()
    }
}
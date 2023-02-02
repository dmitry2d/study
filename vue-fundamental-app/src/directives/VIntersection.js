
/*
    VIntersection.js
    Vue Custom Directive

    Fires a Callback function when:
        - Node intersects window (immediately)
        - Node is visible (ones per <watchDelay>)

    Using:
    <div
        v-intersection="{watchDelay: Milliseconds, callback: Function}"
    ></div>

*/

/*
    Defaults
*/
const watchDefaultDelay = 2000

export default {
    name: 'intersection',
    mounted(element, binding) {


        // Using Native IntersectionObserver API to detect intersections
        const options = {
            rootMargin: '0px',
            threshold: 1
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                binding.value?.callback()
            }
        }, options);

        // Periodically reset IntersectionObserver Object to detect visibility
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
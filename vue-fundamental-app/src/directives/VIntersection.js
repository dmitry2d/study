export default {
    name: 'intersection',
    mounted(element, binding) {
        const options = {
            rootMargin: '0px',
            threshold: 1
        }
        binding.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                binding.value()
            }
        }, options);
        binding.watcher = () => {
            try {
                binding.observer.unobserve(element)
                binding.observer.observe(element)
            } catch (error) {
                console.log ()
            } finally {
                setTimeout(() => {
                    binding.watcher()
                }, 1000)
            }
        }
        binding.watcher()
    }
}
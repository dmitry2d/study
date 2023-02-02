export default {

    props: {
        spyName: {
            type: String,
            default: ''
        },
        spyEvents: {
            type: Array,
            default: []
        }
    },
    computed: {
        eventList () {
            const result = ['mouseover', ...this.$props.spyEvents]
            const filtered = result.filter((el,i) => result.indexOf(el) === i) 
            return filtered
        }
    },
    mounted () {
        const listener = () => {
            if (this.$props.spyName) {
                console.log (`Master is watching You, ${this.$props.spyName}`)
            }
        }
        this.eventList.forEach(eventName => this.$el.addEventListener(eventName, listener, false))
    } 

}
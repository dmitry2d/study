<template>
    <select v-model="localModelValue">
        <option disabled>Select</option>
        <option 
            v-for="option in options"
            :value="option.value"
            :key="option.value"
        >
            {{ option.title }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            localModelValue: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        padding: .5rem 1em;
        margin-top: .5rem;
        border: 1px solid #ddd;
        border-radius: 1rem;
        font: 1em/1.3em 'Source Code Pro', monospace;
        outline: none;
    }
    .input:focus {
        border: 1px solid #3ba776;
    }
</style>
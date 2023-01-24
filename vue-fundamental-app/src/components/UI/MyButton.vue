<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
    .button {
        padding: .5rem 1em;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 1rem;
        margin-top: .5rem;
        font: 1em/1.3em 'Source Code Pro', monospace;
    }
</style>
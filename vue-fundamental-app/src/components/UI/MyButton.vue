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
        padding: 0.5rem 1em;
        background-color: #00000020;
        border: none;
        border-radius: 1rem;
        margin-top: 0.5rem;
        font: 0.9rem/1.3em 'Source Code Pro', monospace;
        cursor: pointer;
        transition: 0.1s;
    }
    .button:hover {
        
    }
</style>
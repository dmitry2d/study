<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
import spyMixin from '@/mixins/spyMixin';

    export default {
        name: 'my-button',
        mixins: [spyMixin]
    }
</script>

<style scoped>
    .button {
        position: relative;
        padding: 0.5rem 1em;
        background-color: #00000020;
        border: none;
        border-radius: 1rem;
        margin: 0.5rem 0.1rem;
        font: 0.9rem/1.3em 'Source Code Pro', monospace;
        cursor: pointer;
        top: 0;
        transition: 0.1s ease-in-out;
    }
    .button:hover {
        top: 0.2rem;
    }
</style>
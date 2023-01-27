<template>
    <div class="dialog" v-if="display" @click="hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
        props: {
            display: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:display', false);
            }
        }
    }
</script>

<style scoped>
    .dialog {
        position: fixed;
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.4);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .dialog__content {
        background: rgba(250,250,250,1);
        border-radius: 1rem;
        padding: 2rem;
        min-height: 5rem;
        min-width: 20rem;

    }
</style>
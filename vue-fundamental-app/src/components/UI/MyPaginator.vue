<template>
    <div class="paginator">
        <div
        class="page__container"
            v-for="page in totalPages"
            :key="page"
        >
            <div class="dots"
                :class="{
                    'visible': false
                }"
            >...</div>
            <div class="page"
                @click="changePage(page)"
                :class="{
                    'selected': page === this.currentPage,
                    'visible': (                    
                        page == 1 ||
                        page == this.totalPages ||
                        page == this.currentPage ||
                        (page < 5 && this.currentPage < 4) ||
                        (page > this.totalPages - 4 && this.currentPage > this.totalPages - 3) ||
                        page == this.currentPage + 1 ||
                        page == this.currentPage - 1
                    )
                }"
            >
                {{ page }}
            </div>
        </div>
</div>
</template>

<script>
    export default {
        name: 'my-paginator',
        props: {
            totalPages: {
                type: Number,
                default: 1
            },
            currentPage: {
                type: Number,
                default: 1
            }
        },
        data() {},
        methods: {
            changePage(page) {
                console.log (page)
                this.$emit('update:currentPage', page)
            }
        }
    }
</script>

<style scoped>
    .paginator {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2rem 0;
    }
    .page__container {
        display: flex;
    }
    .page {
        --bg: #f0f0f0;
        padding: 0.5rem 1rem;
        margin: 0.1rem;
        background: var(--bg);
        border-radius: 1rem;
        border: 2px solid  var(--bg);
        color: #aaa;
        cursor: pointer;
        display: none;
    }
    .page.selected {
        background: white;
        border: 2px solid  #3ba776;
        color: inherit;
        cursor: auto;
        pointer-events: none;
    }
    .page.visible {
        display: block;
    }
    .dots {
        padding: 0.5rem 1rem;
        margin: 0.1rem;
        color: #aaa;
        display: none;
    }
    .dots.visible {
        display: block;
    }

</style>
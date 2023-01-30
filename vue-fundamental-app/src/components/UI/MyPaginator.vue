<!--
    Paginator component
    V1.0, with no Settings
    TODO: Settings
-->

<template>
    <div class="paginator">

        <!-- Previous Page -->
        <div
            class="page"
            :class="{
                'inactive': this.currentPage === 1
            }"
            @click="navigateTo(currentPage - 1)"

        >&lt;</div>
        
        <!-- First Page -->
        <div
            class="page"
            v-if="currentPage !== 1"
            @click="navigateTo(1)"
        
        >1</div>

        <!-- Dots Before-->
        <div
            class="page inactive"
            v-if="this.currentPage == this.totalPages"
        >
            ...
        </div>
        
        <!-- Current Page -->
        <div
            class="page current"
        >
            {{ this.currentPage }}
        </div>

        <!-- Dots After-->
        <div
            class="page inactive"
            v-if="this.currentPage == 1"
        >
            ...
        </div>
        
        <!-- Last Page -->
        <div class="page"
            v-if="currentPage !== totalPages"
            @click="navigateTo(totalPages)"
        >
            {{ this.totalPages }}
        </div>
        
        <!-- Next Page -->
        <div
            class="page"
            :class="{
                'inactive': this.currentPage === this.totalPages
            }"
            @click="navigateTo(currentPage + 1)"
        >&gt;</div>

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
            navigateTo(pageNumber) {
                this.$emit('update:currentPage', pageNumber)
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
    .page {
        cursor: pointer;
        width: 3em;
        display: flex;
        justify-content: center;
        padding: 0.5rem 1rem;
    }
    .inactive {
        pointer-events: none;
        cursor: initial;
        opacity: 0.5;
    }
    .current {
        pointer-events: none;
        cursor: initial;
        background-color: rgba(0,0,0,0.2);
        border-radius: 2rem;
    }


</style>
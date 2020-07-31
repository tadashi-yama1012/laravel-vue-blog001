<template>
    <div class="container">
        <div class="left">
            <h1>blog</h1>
            <navi/>
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 220px 1fr;
}
</style>

<script>
import navi from './navi.vue';
export default {
    components: {
        navi
    }
}
</script>
<template>
    <div class="container">
        <div class="left">
            <h1>blog</h1>
            <h3>navi</h3>
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
<template>
    <div>
        <h1>index</h1>
        <ul class="entries">
            <li v-for="(entry, index) in entriesRecent" :key="index">
                <h3>{{entry.title}}</h3>
                <div>{{entry.body}}</div>
                <br/>
                <div><small>author:{{entry.user.name}} date:{{entry.date}}</small></div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul.entries {
    list-style-type: none;
    padding: 0;
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
    layout: 'blog',
    head() {
        return {
            title: 'index - blog'
        };
    },
    computed: {
        ...mapGetters({
            entriesRecent: 'entriesRecent'
        })
    },
}
</script>
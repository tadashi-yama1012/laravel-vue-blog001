<template>
    <div>
        <h1>entry</h1>
        <h3>{{entry.title}}</h3>
        <div>{{entry.body}}</div>
        <br/>
        <div><small>author:{{entry.user.name}} date:{{entry.date}}</small></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    layout: 'blog',
    head() {
        const title = this.entry.title !== undefined ? this.entry.title : 'empty';
        return {
            title: title + ' - blog'
        };
    },
    computed: {
        ...mapGetters({
            entry: 'entry'
        })
    },
    mounted: function() {
        this.$store.dispatch('fetchEntry', this.$route.params.id);
    }
}
</script>
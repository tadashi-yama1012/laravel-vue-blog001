<template>
    <div class="container">
        <div class="left">
            <h1>blog</h1>
            <h2>navi</h2>
            <ul>
                <li><nuxt-link to="/">index</nuxt-link></li>
                <li><nuxt-link to="/login">login</nuxt-link></li>
                <template v-if="user !== null">
                    <li><nuxt-link to="/write">write</nuxt-link></li>
                </template>
            </ul>
            <h2>recent</h2>
            <ul>
                <li v-for="(entry, index) in entriesRecent" :key="index">
                    <nuxt-link :to="{name:'entries-id', params:{id:entry.id}}">
                        {{entry.title}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <nuxt/>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 1024px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 280px 1fr;
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            user: 'user',
            entriesRecent: 'entriesRecent'
        })
    },
    mounted: function() {
        this.$store.dispatch('fetchToken');
        this.$store.dispatch('fetchEntries');
    }
}
</script>
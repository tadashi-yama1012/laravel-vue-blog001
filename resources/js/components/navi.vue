<template>
    <div>
        <h3>navigation</h3>
        <ul>
            <li><router-link to="/">top</router-link></li>
            <li><router-link to="/login">login/logout</router-link></li>
            <template v-if="logged">
                <li><router-link to="/write">write</router-link></li>
            </template>
        </ul>
        <h3>recent entries</h3>
        <ul>
            <li v-for="(entry, idx) in recent" :key="idx">
                <router-link :to="{name: 'entry', params: {id: entry.id}}">{{entry.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        logged: function() {
            return this.$store.getters.logged;
        },
        recent: function() {
            return this.$store.getters.recentEntries;
        }
    }
}
</script>
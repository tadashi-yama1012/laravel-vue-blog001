<template>
    <layout>
        <h2>top</h2>
        <ul>
            <li v-for="(entry, idx) in entries" :key="idx">
                <h3><router-link :to="{name: 'entry', params: {id: entry.id}}">{{entry.title}}</router-link></h3>
                <div>
                    <p>{{entry.body}}</p>
                </div>
                <div>
                    <small>
                        author:{{entry.user.name}} date:{{entry.date}}
                    </small>
                </div>
            </li>
        </ul>
    </layout>
</template>

<script>
import layout from './_layout.vue';
export default {
    components: {
        layout
    },
    computed: {
        entries: function() {
            return this.$store.getters.entries;
        }
    }
}
</script>
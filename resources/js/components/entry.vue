<template>
    <layout>
        <h2>entry</h2>
        <template v-if="entry">
            <h3>{{entry.title}}</h3>
            <div>
                <p>{{entry.body}}</p>
            </div>
            <div>
                <small>
                    author:
                    <template v-if="entry.user">{{entry.user.name}}</template>
                    <template v-else>empty</template>
                     date:{{entry.date}}
                </small>
            </div>
            <template v-if="entry.user && entry.user.id === userId">
                <div>
                    <button @click="handleEdit">edit entry</button>
                    <button @click="handleDelete">delete entry</button>
                </div>
            </template>
        </template>
    </layout>
</template>

<script>
import layout from './_layout.vue';
export default {
    components: {
        layout
    },
    data: function() {
        return {
            entryId: this.$route.params.id || -1
        };
    },
    computed: {
        userId: function() {
            return this.$store.getters.userId;
        },
        entry: function() {
            return this.$store.getters.entry;
        }
    },
    methods: {
        fetchEntry: function() {
            this.$store.dispatch('fetchEntry', this.$route.params.id);
        },
        handleDelete: async function() {
            await this.$store.dispatch('deleteEntry', this.entryId);
            this.$router.push('/');
        },
        handleEdit: function() {
            this.$router.push('/edit/' + this.entryId);
        }
    },
    created: function() {
        this.fetchEntry();
    },
    watch: {
        '$route': 'fetchEntry'
    }
}
</script>
<template>
    <layout>
        <h2>edit</h2>
        <template v-if="entry">
            <div>title<input type="text" v-model="title"></div>
            <div>body<textarea cols="30" rows="10" v-model="body"></textarea></div>
            <div><button @click="handleUpdate">update</button></div>
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
            entryId: this.$route.params.id || -1,
            title: this.$store.getters.entry.title,
            body: this.$store.getters.entry.body
        };
    },
    computed: {
        logged: function() {
            return this.$store.getters.logged;
        },
        userId: function() {
            return this.$store.getters.userId;
        },
        entry: function() {
            return this.$store.getters.entry;
        }
    },
    methods: {
        fetchEntry: async function() {
            await this.$store.dispatch('fetchEntry', this.$route.params.id);
        },
        handleUpdate: async function() {
            const dt = new Date();
            const date = `${dt.getFullYear()}-${(dt.getMonth() + 1)}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
            await this.$store.dispatch('updateEntry', {
                id: this.entry.id,
                title: this.title,
                body: this.body,
                date: date
            });
        }
    },
    created: function() {
        if (!this.logged) {
            this.$router.push('/login');
        } else {
            (async() => {
                await this.fetchEntry();
                if (this.entry.user && this.entry.user.id !== this.userId) {
                    this.$router.push('/');
                }
            })();
        }
    },
    watch: {
        '$route': 'fetchEntry'
    }
}
</script>
<template>
    <layout>
        <h2>write</h2>
        <div>title<input type="text" v-model="title"></div>
        <div>body<textarea cols="30" rows="10" v-model="body"></textarea></div>
        <div><button @click="handlePost">post</button></div>
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
            title: '',
            body: ''
        }
    },
    computed: {
        logged: function() {
            return this.$store.getters.logged;
        },
        userId: function() {
            return this.$store.getters.userId;
        }
    },
    methods: {
        handlePost: function(ev) {
            ev.preventDefault();
            if (!this.logged) return;
            const dt = new Date();
            const date = `${dt.getFullYear()}-${(dt.getMonth() + 1)}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
            const payload = {
                'user_id': this.userId,
                title: this.title,
                body: this.body,
                date: date
            };
            console.log(payload);
            this.$store.dispatch('postEntry', payload);
        }
    },
    created: function() {
        if (!this.logged) {
            this.$router.push('/login');
        }
    }
}
</script>
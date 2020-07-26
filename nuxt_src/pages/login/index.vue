<template>
    <div>
        <h1>login</h1>
        <template v-if="user === null">
            <div>
                name:<input type="text" v-model="inName" /><br/>
                password:<input type="password" v-model="inPass"><br/>
                <button v-on:click="handleLogin">login</button>
            </div>
        </template>
        <template v-else>
            <div>
                <button v-on:click="handleLogout">logout</button>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    layout: 'blog',
    head() {
        return {
            title: 'login - blog'
        };
    },
    data: function() {
        return {
            inName: '',
            inPass: ''
        };
    },
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    methods: {
        handleLogin: async function(ev) {
            ev.preventDefault();
            try {
                const payload = {
                    name: this.inName,
                    password: this.inPass
                };
                await this.$store.dispatch('login', payload);
            } catch (error) {
                console.error(error)
            }
        },
        handleLogout: async function(ev) {
            ev.preventDefault();
            try {
                await this.$store.dispatch('logout');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
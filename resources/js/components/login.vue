<template>
    <layout>
        <h2>login/logout</h2>
        <template v-if="logged">
            <div><button @click="handleLogout">logout</button></div>
        </template>
        <template v-else>
            <div>mail<input type="text" v-model="mail"></div>
            <div>password<input type="password" v-model="password"></div>
            <div><button @click="handleLogin">login</button></div>
        </template>
        <h3>registration</h3>
        <div>name<input type="text" v-model="inName"></div>
        <div>mail<input type="text" v-model="inMail"></div>
        <div>password<input type="password" v-model="inPassword"></div>
        <div><button @click="handleRegistration">send</button></div>
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
            mail: '',
            password: '',
            inName: '',
            inMail: '',
            inPassword: ''
        }
    },
    computed:  {
        logged: function() {
            return this.$store.getters.logged;
        }
    },
    methods: {
        handleLogin: function(ev) {
            ev.preventDefault();
            this.$store.dispatch('login', {
                email: this.mail,
                password: this.password
            });
        },
        handleLogout: function(ev) {
            ev.preventDefault();
            this.$store.dispatch('logout');
        },
        handleRegistration: function(ev) {
            ev.preventDefault();
            this.$store.dispatch('registration', {
                name: this.inName,
                email: this.inMail,
                password: this.inPassword
            });
        }
    }
}
</script>
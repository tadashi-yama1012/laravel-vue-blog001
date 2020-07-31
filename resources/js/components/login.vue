<template>
    <layout>
        <h2>login</h2>
        <div>mail<input type="text" v-model="mail"></div>
        <div>password<input type="password" v-model="password"></div>
        <div><button @click="handleLogin">login</button></div>
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
    data: function() {
        return {
            mail: '',
            password: '',
            inName: '',
            inMail: '',
            inPassword: ''
        }
    },
    components: {
        layout
    },
    methods: {
        handleLogin: function(ev) {
            ev.preventDefault();
            this.$store.dispatch('login', {
                email: this.mail,
                password: this.password
            });
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
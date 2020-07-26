<template>
    <div>
        <h1>login</h1>
        <div>
            name:<input type="text" v-model="inName" /><br/>
            password:<input type="password" v-model="inPass"><br/>
            <button v-on:click="handleLogin">login</button>
        </div>
    </div>
</template>

<script>
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
    methods: {
        handleLogin: async function(ev) {
            ev.preventDefault();
            try {
                const { data } = await axios.post('http://localhost:8000/login', {
                    name: this.inName,
                    password: this.inPass
                });
                console.log(data);    
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
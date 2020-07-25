<template>
    <div>
        <h1>write</h1>
        <form>
            title:<input type="text" v-model="inTitle" /><br/>
            body:<textarea v-model="inBody"></textarea><br/>
            <button v-on:click="handleSend">send</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    layout: 'blog',
    head() {
        return {
            title: 'write - blog'
        };
    },
    data: function() {
        return {
            inTitle: '',
            inBody: '',
        };
    },
    methods: {
        handleSend: async function(ev) {
            ev.preventDefault();
            try {
                const dt = new Date();
                const date = `${dt.getFullYear()}/${(dt.getMonth() + 1)}/${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
                const { data } = await axios.post('http://localhost:8000/api/blog', {
                    title: this.inTitle,
                    body: this.inBody,
                    date,
                    'user_id': 1
                });
                console.log(data);  
                this.$store.dispatch('fetchEntries'); 
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
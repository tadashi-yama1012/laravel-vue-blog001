import './bootstrap';
import {store} from './store';
import {router} from './router';

const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    store: store,
    router: router
});

app.$store.dispatch('fetchEntries');
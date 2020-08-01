import VueRouter from 'vue-router';
import top from './components/top.vue';
import login from './components/login.vue';
import write from './components/write.vue';
import entry from './components/entry.vue';

const routes = [
    {path: '/', component: top},
    {path: '/login', component: login},
    {path: '/write', component: write},
    {path: '/entry/:id', name: 'entry', component: entry}
];

const router = new VueRouter({
    routes: routes
});

export {
    router
};
import Vue from 'vue';
import top from './components/top.vue';

Vue.component('top', top);

new Vue({
    el: '#app',
    template: '<top />'
});

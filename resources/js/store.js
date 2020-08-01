import Vuex from 'vuex';
import axios from 'axios';

const store = new Vuex.Store({
    state: {
        user: null,
        entries: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        unsetUser(state) {
            state.user = null;
        },
        setEntries(state, entries) {
            state.entries = entries;
        }
    },
    actions: {
        async registration({}, payload) {
            const {data} = await axios.post('/api/registration', payload);
            console.log(data);
        },
        async login({commit}, payload) {
            const {data} = await axios.post('/api/login', payload);
            const token = data.access_token;
            if (token) {
                const {data} = await axios.get('/api/me?token=' + token);
                commit('setUser', {token, user: data});
                console.log(token, data);
            }
        },
        async logout({commit, state}) {
            await axios.post('/api/logout?token=' + state.user.token);
            commit('unsetUser');
        },
        async fetchEntries({commit}) {
            const {data} = await axios.get('/api/blog');
            commit('setEntries', data);
        }
    },
    getters: {
        logged: (state) => {
            return state.user !== null;
        },
        entries: (state) => {
            return state.entries.reverse();
        }
    }
});

export {
    store
};
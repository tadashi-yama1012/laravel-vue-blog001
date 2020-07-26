import axios from 'axios';

export const state = () => ({
    user: null,
    entriesAll: [],
    entry: null
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    unsetUser(state) {
        state.user = null;
    },
    setEntries(state, all) {
        state.entriesAll = all;
    },
    setEntry(state, entry) {
        state.entry = entry;
    }
};

export const actions = {
    fetchToken: async () => {
        try {
            axios.defaults.withCredentials = true;
            await axios.get('http://localhost:8000/token');
        } catch (error) {
            console.error(error);
        }
    },
    login: async ({commit}, payload) => {
        try {
            axios.defaults.withCredentials = true;
            const {data} = await axios.post('http://localhost:8000/login', {
                name: payload.name,
                password: payload.password
            });
            if (data.result === 'ok') {
                commit('setUser', payload.name);
            }
        } catch (error) {
            console.error(error);
        }
    },
    logout: async ({commit}) => {
        try {
            axios.defaults.withCredentials = true;
            await axios.post('http://localhost:8000/logout');
            commit('unsetUser');
        } catch (error) {
            console.error(error);
        }
    },
    fetchEntries: async ({commit}) => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/blog');
            commit('setEntries', data);
        } catch (error) {
            console.error(error);
        }
    },
    fetchEntry: async ({commit}, payload) => {
        try {
            const {data} = await axios.get('http://localhost:8000/api/blog/' + payload);
            commit('setEntry', data);
        } catch (error) {
            console.error(error);
        }
    }
};

export const getters = {
    user: (state) => {
        const {user} = state;
        return user;
    },
    entriesAll: (state) => {
        const {entriesAll} = state;
        return entriesAll.concat().reverse();
    },
    entriesRecent: (state) => {
        const {entriesAll} = state;
        return entriesAll.concat().reverse().filter((_, idx) => idx < 5);
    },
    entry: (state) => {
        const {entry} = state;
        return Object.assign({}, entry);
    }
};
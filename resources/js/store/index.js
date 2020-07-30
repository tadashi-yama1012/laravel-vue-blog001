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
    registration: async ({}, payload) => {
        try {
            const {data} = await axios.post('/api/registration', {
                name: payload.name,
                email: payload.email,
                password: payload.password
            });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    },
    login: async ({commit}, payload) => {
        try {
            const {data} = await axios.post('/api/login', {
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
            await axios.post('/api/logout');
            commit('unsetUser');
        } catch (error) {
            console.error(error);
        }
    },
    fetchEntries: async ({commit}) => {
        try {
            const { data } = await axios.get('/api/blog');
            commit('setEntries', data);
        } catch (error) {
            console.error(error);
        }
    },
    fetchEntry: async ({commit}, payload) => {
        try {
            const {data} = await axios.get('/api/blog/' + payload);
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
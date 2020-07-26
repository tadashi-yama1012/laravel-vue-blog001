import axios from 'axios';

export const state = () => ({
    entriesAll: [],
    entry: null
});

export const mutations = {
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
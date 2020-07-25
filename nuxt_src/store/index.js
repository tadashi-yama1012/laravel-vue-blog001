import axios from 'axios';

export const state = () => ({
    entriesAll: []
});

export const mutations = {
    setEntries(state, all) {
        state.entriesAll = all;
    }
};

export const actions = {
    fetchEntries: async ({commit}) => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/blog');
            commit('setEntries', data);
        } catch (error) {
            console.error(error);
        }
    }
};

export const getters = {
    entriesAll: (state) => {
        const {entriesAll} = state;
        return entriesAll;
    }
};
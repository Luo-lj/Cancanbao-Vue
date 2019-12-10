import { TYPES } from '../mutation-types';

const state = {
    listData:[],
};

const getters = {};

const actions = {
    saveData({commit}, data){
        commit(TYPES.LIST_DATA, data)
    }
};

const mutations = {
    [TYPES.LIST_DATA](state, data){
        state.listData = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


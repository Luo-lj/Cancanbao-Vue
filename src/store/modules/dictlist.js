import { TYPES } from '../mutation-types';

const state = {
    listData: [],
    isShow: '1',
    num: '2'
};

const getters = {};

const mutations = {
    [TYPES.LIST_DATA](state, data) {
        state.listData = data;
    }
};

const actions = {
    saveData({ commit }, data) {
        commit(TYPES.LIST_DATA, data)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


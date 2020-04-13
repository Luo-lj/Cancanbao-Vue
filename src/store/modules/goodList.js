import { TYPES } from '../mutation-types';

const state = {
    allProduct: [], // 全部商品列表
}

const getters = {
    // 推荐商品列表
    recommendProduct: state => {
        return state.allProduct.filter(item => item.recommendStatus === 1)
    }
};

const mutations = {
    [TYPES.GOOD_LIST] (state, data){
        state.allProduct = data;
    }
};

const actions = {
    commitAllProduct({ commit }, data) {
        commit(TYPES.GOOD_LIST, data)
    }
};

export default {
    namespaced: true, 
    state,
    getters,
    mutations,
    actions,
}
/**
 * 登录的用户信息
 */

import { TYPES } from '../mutation-types';

const state = {
    inputValue: '',
}

const getters = {
    //获取到用户状态,//实时监听state值的变化(最新状态)
    inputValue: state => '999999999999',
    user: state => state.user,
    targetUser: state => state.targetUser
}

const mutations = {
    [TYPES.USERINFO](state, user) {
        state.inputValue = user;
    }
}

const actions = {
    setUserInfo({ commit }, user) {
        commit(TYPES.USERINFO, user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
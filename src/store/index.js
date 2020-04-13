import Vuex from 'vuex';

import goodList from './modules/goodList';
import dictlist from './modules/dictlist';
import userInfo from './modules/userInfo';

function init(Vue){
    Vue.use(Vuex);
    return new Vuex.Store({
        modules: {
            goodList,
            dictlist,
            userInfo
        }
    })
}
export default init;
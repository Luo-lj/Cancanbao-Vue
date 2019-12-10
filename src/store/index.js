import Vuex from 'vuex';

import dictlist from './modules/dictlist';

function init(Vue){
    Vue.use(Vuex);
    return new Vuex.Store({
        modules: {
            dictlist
        }
    })
}
export default init;
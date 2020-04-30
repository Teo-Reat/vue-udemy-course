import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
// import value from './modules/value'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        // value
    },
    state: {
        value: 0
    },
    actions,
    mutations,
    getters
})

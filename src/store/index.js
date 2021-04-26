import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import entities from './modules/entities'
import datapoints from './modules/datapoints'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        entities,
        datapoints
    },
    plugins: [Vuex.createLogger()]
})

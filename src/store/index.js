import Vue from 'vue'
import Vuex from 'vuex'
import datapoints from './modules/datapoints'
import entities from './modules/entities'
import user from './modules/user'
import quaver from './modules/quaver'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        entities,
        datapoints,
        quaver
    },
    plugins: [Vuex.createLogger()]
})

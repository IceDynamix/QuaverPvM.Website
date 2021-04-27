import Vue from 'vue'
import Vuex from 'vuex'
import datapoints from './modules/datapoints'
import entities from './modules/entities'
import user from './modules/user'
import quaver from './modules/quaver'
import match from './modules/match'
import results from './modules/results'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        entities,
        datapoints,
        quaver,
        match,
        results
    },
    plugins: [Vuex.createLogger()]
})

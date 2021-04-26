import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import entities from './entities'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        entities,
    }
})

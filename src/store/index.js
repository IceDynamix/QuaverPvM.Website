import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: { user: null },
    actions: {
        async login({ commit }) {
            try {
                const { data: user } = await axios.get("me");
                if (!user) return; // Not logged in

                commit("setUser", { user });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    plugins: [Vuex.createLogger()]
})

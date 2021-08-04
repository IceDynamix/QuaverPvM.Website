import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        match: null,
        matchLoading: false
    },
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
        async fetchOngoingMatch({ commit }) {
            commit("setMatchLoading", true);
            try {
                const { data: match } = await axios.get("match/ongoing");
                commit("setMatch", match);
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            } finally {
                commit("setMatchLoading", false);
            }
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
        setMatch(state, match) {
            state.match = match;
        },
        setMatchLoading(state, loading) {
            state.loading = loading;
        },
    },
    plugins: [Vuex.createLogger()]
})

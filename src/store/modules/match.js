import axios from "axios";
import Vue from "vue";


const matchStore = {
    state: {
        match: null,
        loading: true,
    },
    actions: {
        async fetchMatch({ commit, state }) {
            if (state.match != null) return;
            commit("setMatchLoading", true);
            try {
                const { data: match } = await axios.get("match");
                if (!match) return;
                commit("setMatch", match);
                commit("setEntities", { entities: [match.user, match.map] });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            } finally {
                commit("setMatchLoading", false);
            }
        },
        async requestMatch({ commit, state }) {
            if (state.match != null) return;
            commit("setMatchLoading", true);
            try {
                const { data: match } = await axios.post("match");
                commit("setMatch", match);
                commit("setEntities", { entities: [match.user, match.map] });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            } finally {
                commit("setMatchLoading", false);
            }
        },
    },
    mutations: {
        setMatch(state, match) {
            state.match = match;
        },
        setMatchLoading(state, loading) {
            state.loading = loading;
        },
    },
};

export default matchStore;

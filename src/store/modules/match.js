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
                const { data } = await axios.get("match");
                const { match, entities } = data;
                if (!match) return;
                commit("setMatch", match);
                commit("setEntities", { entities });
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
                const { data } = await axios.post("match");
                const { match, entities } = data;
                commit("setMatch", match);
                commit("setEntities", { entities });
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

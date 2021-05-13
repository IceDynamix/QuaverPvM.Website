import axios from "axios";
import Vue from "vue";


const resultsStore = {
    state: {
        results: {}
    },
    actions: {
        async fetchEntityResults({ commit }, entity) {
            try {
                const { data: results } = await axios.get("results", { entity });
                commit("setResults", { results });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        }
    },
    mutations: {
        setResults(state, { results }) {
            for (const result in results) state.results[result._id] = result;
            state.results = { ...state.results };
        },
    },
};

export default resultsStore;

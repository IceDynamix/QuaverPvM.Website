import axios from "axios";

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
                console.error(err);
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

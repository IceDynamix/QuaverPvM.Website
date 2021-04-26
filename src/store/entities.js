import axios from "axios";

const entitiesStore = {
    namespaced: true,
    debug: true,
    state: {
        entities: {},
    },
    actions: {
        async fetch({ commit }, params) {
            try {
                const response = await axios.get("entities", { params });
                const entities = response.data.results;
                commit("setEntities", { entities });
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        setEntities(state, { entities }) {
            for (const entity of entities)
                state.entities[entity._id] = entity;
        },
    },
};

export default entitiesStore;

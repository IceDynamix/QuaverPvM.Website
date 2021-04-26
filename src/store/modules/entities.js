import axios from "axios";

const entitiesStore = {
    namespaced: true,
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
            let newEntities = {};
            for (const entity of entities) newEntities[entity.id] = entity;
            state.entities = { ...state.entities, ...newEntities };
        },
    },
};

export default entitiesStore;

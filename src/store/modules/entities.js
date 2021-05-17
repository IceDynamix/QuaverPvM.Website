import axios from "axios";
import Vue from "vue";


const entitiesStore = {
    state: {
        entities: {},
    },
    actions: {
        async fetchEntities({ commit }, params) {
            try {
                const { data: entities } = await axios.get("entities", { params });
                commit("setEntities", { entities });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
    },
    mutations: {
        setEntities(state, { entities }) {
            if (!entities) return;
            for (const entity of entities) state.entities[entity.id] = entity;
            state.entities = { ...state.entities }; // Assignment required to reload components
        },
    },
};

export default entitiesStore;

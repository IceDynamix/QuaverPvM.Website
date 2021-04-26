import axios from "axios";

const userStore = {
    namespaced: true,
    state: {
        entityId: null,
    },
    actions: {
        async login({ commit }) {
            try {
                const { data: entity } = await axios.get("me");
                if (!entity) return; // Not logged in

                const id = entity._id;
                commit("setLogin", { id });
                commit("entities/setEntities", { entities: [entity] }, { root: true })
            } catch (err) {
                console.error(err);
            }
        },
        // Used for debugging
        simulateLogin({ commit, dispatch }, id) {
            commit("setLogin", { id });
            dispatch("entities/fetch", { id }, { root: true });
        },
    },
    mutations: {
        setLogin(state, { id }) {
            state.entityId = id;
        },
    },
};

export default userStore;

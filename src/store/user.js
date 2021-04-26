import axios from "axios";

const userStore = {
    namespaced: true,
    debug: true,
    state: {
        entityId: null,
    },
    actions: {
        async login({ commit }) {
            try {
                const { data: entity } = await axios.get("me");
                commit("setLogin", { entityId: entity._id });
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        setLogin(state, payload) {
            state.entityId = payload.entityId;
        },
    },
};

export default userStore;

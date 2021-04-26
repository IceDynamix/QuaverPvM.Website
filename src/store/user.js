import axios from "axios";

const userStore = {
    namespaced: true,
    debug: true,
    state: {
        entityId: null,
    },
    actions: {
        async login({ dispatch, commit }) {
            try {
                const { data: entity } = await axios.get("me");
                const id = entity._id;
                commit("setLogin", { id });
                dispatch("entities/fetch", { id }, { root: true });
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        setLogin(state, { id }) {
            state.entityId = id;
        },
    },
};

export default userStore;

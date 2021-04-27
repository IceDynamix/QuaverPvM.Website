import axios from "axios";

const userStore = {
    state: {
        loggedInUser: null,
    },
    actions: {
        async login({ commit }) {
            try {
                const { data: entity } = await axios.get("me");
                if (!entity) return; // Not logged in

                const id = entity._id;
                commit("setLoggedInUser", { id });
                commit("setEntities", { entities: [entity] })
            } catch (err) {
                console.error(err);
            }
        },
        // Used for debugging
        simulateLogin({ commit, dispatch }, id) {
            commit("setLoggedInUser", { id });
            dispatch("setEntities", { id });
        },
    },
    mutations: {
        setLoggedInUser(state, { id }) {
            state.loggedInUser = id;
        },
    },
};

export default userStore;

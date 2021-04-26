import axios from "axios";

const quaverFetchOptions = {
    withCredentials: false,
};

const entitiesStore = {
    namespaced: true,
    state: {
        maps: {},
        users: {},
    },
    actions: {
        async fetchUser({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/users/full/" + quaverId, quaverFetchOptions);
                const { user } = response.data;
                commit("setUser", { user });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchMap({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/maps/" + quaverId, quaverFetchOptions);
                const { map } = response.data;
                commit("setMap", { map });
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.users[user.info.id] = user;
            state.users = { ...state.users };
        },
        setMap(state, { map }) {
            state.maps[map.id] = map;
            state.maps = { ...state.maps };
        },
    },
};

export default entitiesStore;

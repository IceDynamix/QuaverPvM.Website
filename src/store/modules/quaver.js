import axios from "axios";

const quaverFetchOptions = {
    withCredentials: false,
};

const quaverStore = {
    state: {
        maps: {},
        users: {},
    },
    actions: {
        async fetchQuaverUser({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/users/full/" + quaverId, quaverFetchOptions);
                const { user } = response.data;
                commit("setQuaverUser", { user });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchQuaverMap({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/maps/" + quaverId, quaverFetchOptions);
                const { map } = response.data;
                commit("setQuaverMap", { map });
            } catch (err) {
                console.error(err);
            }
        },
    },
    mutations: {
        setQuaverUser(state, { user }) {
            state.users[user.info.id] = user;
            state.users = { ...state.users };
        },
        setQuaverMap(state, { map }) {
            state.maps[map.id] = map;
            state.maps = { ...state.maps };
        },
    },
};

export default quaverStore;

import axios from "axios";
import Vue from "vue";
import _ from "lodash";


const quaverFetchOptions = {
    withCredentials: false,
};

const quaverStore = {
    state: {
        maps: {},
        users: {},
    },
    actions: {
        async fetchQuaverUsers({ commit }, quaverIds) {
            try {
                for (const ids of _.chunk(quaverIds, 20)) {
                    const url = "https://api.quavergame.com/v1/users?" + ids.map(id => `id=${ id }`).join("&");
                    const response = await axios.get(url, quaverFetchOptions);
                    const { users } = response.data;
                    commit("setQuaverUsers", { users });
                }
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
        async fetchQuaverUser({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/users/full/" + quaverId, quaverFetchOptions);
                const { user } = response.data;
                commit("setQuaverUsers", { users: [user] });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
        async fetchQuaverMap({ commit }, quaverId) {
            try {
                const response = await axios.get("https://api.quavergame.com/v1/maps/" + quaverId, quaverFetchOptions);
                const { map } = response.data;
                commit("setQuaverMap", { map });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
    },
    mutations: {
        setQuaverUsers(state, { users }) {
            for (const user of users) state.users[user.id] = user;
            state.users = { ...state.users };
        },
        setQuaverMap(state, { map }) {
            state.maps[map.id] = map;
            state.maps = { ...state.maps };
        },
    },
};

export default quaverStore;

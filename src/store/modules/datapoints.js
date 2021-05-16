import axios from "axios";
import _ from "lodash";
import Vue from "vue";


const datapointsStore = {
    state: {
        entityDatapoints: [],
        generalDatapoints: [],
    },
    getters: {
        currentEntityDatapoints: state => {
            const sortedByTime = Object.values(state.entityDatapoints).sort((a, b) => a.timestamp - b.timestamp);
            const newest = _.sortedUniqBy(sortedByTime, dp => dp.entity);
            return newest;
        },
        currentGeneralDatapoint: state => {
            if (state.generalDatapoints.length == 0) return null
            return Object.values(state.generalDatapoints).sort((a, b) => a.timestamp - b.timestamp)[0];
        }
    },
    actions: {
        async fetchEntityDatapointsCurrent({ commit }, id) {
            try {
                const { data: datapoint } = await axios.get("entity/stats/" + id);
                commit("addEntityDatapoints", { datapoints: [datapoint] });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
        async fetchEntityDatapointsFull({ commit }, id) {
            try {
                const { data: datapoints } = await axios.get("entity/history/" + id);
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
        async fetchLeaderboard({ commit }) {
            try {
                const { data: datapoints } = await axios.get("leaderboard");
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
        async fetchGeneralDatapoints({ commit }) {
            try {
                const { data: datapoints } = await axios.get("history");
                commit("addGeneralDatapoints", { datapoints });
            } catch (err) {
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err, { type: "error" });
            }
        },
    },
    mutations: {
        addEntityDatapoints(state, { datapoints }) {
            for (const dp of datapoints) state.entityDatapoints[dp._id] = dp;
            state.entityDatapoints = { ...state.entityDatapoints }
        },
        addGeneralDatapoints(state, { datapoints }) {
            for (const dp of datapoints) state.generalDatapoints[dp._id] = dp;
            state.generalDatapoints = { ...state.generalDatapoints }
        },
    },
};

export default datapointsStore;

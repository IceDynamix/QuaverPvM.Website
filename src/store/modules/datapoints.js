import axios from "axios";
import _ from "lodash";

const datapointsStore = {
    state: {
        entityDatapoints: [],
        generalDatapoints: [],
    },
    getters: {
        currentDatapoints: state => {
            const sortedByTime = Object.values(state.entityDatapoints).sort((a, b) => a.timestamp - b.timestamp);
            const newest = _.sortedUniqBy(sortedByTime, dp => dp.entity);
            return newest;
        }
    },
    actions: {
        async fetchEntityDatapointsCurrent({ commit }, id) {
            try {
                const { data: datapoint } = await axios.get("entity/stats/" + id);
                commit("addEntityDatapoints", { datapoints: [datapoint] });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchEntityDatapointsFull({ commit }, id) {
            try {
                const { data: datapoints } = await axios.get("entity/history/" + id);
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchLeaderboard({ commit }) {
            try {
                const { data: datapoints } = await axios.get("leaderboard");
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchGeneralDatapoints({ commit }) {
            try {
                const { data: datapoints } = await axios.get("history");
                commit("addGeneralDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
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

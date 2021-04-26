import axios from "axios";
import _ from "lodash";

const datapointsStore = {
    namespaced: true,
    state: {
        entity: [],
        general: [],
    },
    getters: {
        leaderboard: state => {
            const sortedByTime = Object.values(state.entity).sort((a, b) => a.timestamp - b.timestamp);
            const newest = _.sortedUniqBy(sortedByTime, dp => dp.entity);
            return newest.filter(dp => dp.rd <= 100)
        }
    },
    actions: {
        async fetchEntityCurrent({ commit }, id) {
            try {
                const { data: datapoint } = await axios.get("entity/stats/" + id);
                commit("addEntityDatapoints", { datapoints: [datapoint] });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchEntityFull({ commit }, id) {
            try {
                const { data: datapoints } = await axios.get("entity/history/" + id);
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchLeaderboard({ commit }, { params }) {
            try {
                const { data: datapoints } = await axios.get("leaderboard", { params });
                commit("addEntityDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
            }
        },
        async fetchGeneralStats({ commit }) {
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
            let newEntity = {};
            for (const dp of datapoints) newEntity[dp._id] = dp;
            state.entity = { ...state.entity, ...newEntity }
        },
        addGeneralDatapoints(state, { datapoints }) {
            let newGeneral = {};
            for (const dp of datapoints) newGeneral[dp._id] = dp;
            state.general = { ...state.general, ...newGeneral }
        },
    },
};

export default datapointsStore;

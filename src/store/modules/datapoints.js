import axios from "axios";
import _ from "lodash";
import Vue from "vue";


const datapointsStore = {
    state: {
        entityDatapoints: [],
        generalDatapoints: [],
        leaderboardLoading: true,
        randomLoading: false,
        selectedRandom: null,
    },
    getters: {
        currentEntityDatapoints: state => {
            const sortedByTime = Object.values(state.entityDatapoints).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return _.sortedUniqBy(sortedByTime, dp => dp.entity);
        },
        currentGeneralDatapoint: state => {
            if (state.generalDatapoints.length === 0) return null
            return Object.values(state.generalDatapoints).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
        }
    },
    actions: {
        async fetchEntityDatapointsCurrent({ commit }, id) {
            try {
                const { data } = await axios.get("entity/stats/" + id);
                const { datapoint, entity } = data;
                commit("addEntityDatapoints", { datapoints: [datapoint] });
                commit("setEntities", { entities: [entity] });
            } catch (err) {
                console.error(err);
                Vue.toasted.show(JSON.stringify(err), { type: "error" });
            }
        },
        async fetchEntityDatapointsFull({ commit }, id) {
            try {
                const { data } = await axios.get("entity/history/" + id);
                const { datapoints, entities } = data;
                commit("addEntityDatapoints", { datapoints: datapoints });
                commit("setEntities", { entities });
            } catch (err) {
                console.error(err);
                Vue.toasted.show(JSON.stringify(err), { type: "error" });
            }
        },
        async fetchLeaderboard({ commit }, params) {
            commit("setLeaderboardLoading", true)
            try {
                const { data } = await axios.get("leaderboard", { params });
                const { datapoints, entities } = data;
                commit("addEntityDatapoints", { datapoints });
                commit("setEntities", { entities });
            } catch (err) {
                console.error(err);
                Vue.toasted.show(JSON.stringify(err), { type: "error" });
            } finally {
                commit("setLeaderboardLoading", false)
            }
        },
        async fetchGeneralDatapoints({ commit }) {
            try {
                const { data: datapoints } = await axios.get("history");
                commit("addGeneralDatapoints", { datapoints });
            } catch (err) {
                console.error(err);
                Vue.toasted.show(JSON.stringify(err), { type: "error" });
            }
        },
        async fetchRandom({ commit }, params) {
            commit("setRandomLoading", true)
            try {
                const { data } = await axios.get("random", { params });
                const { datapoint, entity } = data;
                commit("addEntityDatapoints", { datapoints: [datapoint] });
                commit("setEntities", { entities: [entity] });
                commit("setSelectedRandom", entity._id);
            } catch (err) {
                console.error(err);
                console.error(err.response.data.err);
                Vue.toasted.show(err.response.data.err ?? err, { type: "error" });
            } finally {
                commit("setRandomLoading", false)
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
        setLeaderboardLoading(state, bool) {
            state.leaderboardLoading = bool
        },
        setRandomLoading(state, bool) {
            state.randomLoading = bool
        },
        setSelectedRandom(state, id) {
            state.selectedRandom = id;
        },
    },
};

export default datapointsStore;

<template>
    <div class="leaderboard">
        <div class="list">
            <div class="leaderboard-nav">
                <div>
                    <router-link
                        :to="{ query: { ...this.$route.query, full: true } }"
                        v-if="this.full == false"
                    >
                        Ranked
                    </router-link>
                    <router-link
                        :to="{ query: { ...this.$route.query, full: false } }"
                        v-else
                    >
                        Unranked
                    </router-link>
                </div>
                <div>
                    <router-link
                        :to="{
                            query: { ...this.$route.query, allRates: true },
                        }"
                        v-if="this.allRates == false"
                    >
                        No-rate
                    </router-link>
                    <router-link
                        :to="{
                            query: { ...this.$route.query, allRates: false },
                        }"
                        v-else
                    >
                        All-rate
                    </router-link>
                </div>
            </div>
            <div v-if="loading">
                <Spinner />
            </div>
            <div v-else-if="!loading && maps.length === 0">No maps...</div>
            <div v-else>
                <div
                    class="map-container"
                    v-for="(map, index) in maps"
                    :key="`${map.mapId}|${map.mapRate}`"
                >
                    <div class="rank light-font">
                        #{{ index + 1 + page * 50 }}
                    </div>
                    <Map :map="map" class="map" />
                </div>
                <PageSwitcher :page="page" :forwards="maps.length == 50" />
            </div>
        </div>
    </div>
</template>

<script>
import Map from "@/components/Entity/Map.vue";
import PageSwitcher from "@/components/Elements/PageSwitcher.vue";
import axios from "axios";
import Spinner from "@/components/Elements/Spinner.vue";

export default {
    components: { Map, Spinner, PageSwitcher },
    data() {
        return {
            maps: [],
            loading: false,
            page: 0,
            full: false,
            allRates: false,
        };
    },
    async created() {
        this.loading = true;

        if (this.$route.query.page)
            this.page = parseInt(this.$route.query.page);

        if (this.$route.query.full == "true") this.full = true;
        if (this.$route.query.allRates == "true") this.allRates = true;

        const { data } = await axios.get("leaderboard/map", {
            params: {
                page: this.page,
                full: this.full,
                allrates: this.allRates,
            },
        });

        this.maps = data;
        this.loading = false;
    },
};
</script>

<style>
.map-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.list {
    margin: 25px;
}
.rank {
    margin: 5px;
}
.map {
    flex: auto;
}
.leaderboard-nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 25px;
}
</style>

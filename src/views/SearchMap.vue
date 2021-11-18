<template>
    <div class="search">
        <input v-model="search" placeholder="Map Search Term" id="search" />
        <div v-if="loading === true" key="loading">
            <Spinner />
        </div>
        <div v-else-if="maps.length === 0" key="content" class="map">
            <div v-if="search !== ''">No maps found</div>
        </div>
        <div v-else key="content" class="map">
            <Map v-for="map in maps" :key="map.mapId" :map="map" />
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import Map from "@/components/Entity/Map.vue";
import Spinner from "@/components/Elements/Spinner.vue";

export default {
    components: { Map, Spinner },
    data() {
        return {
            search: "",
            maps: [],
            loading: false,
        };
    },
    watch: {
        search: function (newSearch) {
            this.loading = true;
            this.debouncedSearch(newSearch);
        },
    },
    created() {
        this.debouncedSearch = _.debounce(this.searchMaps, 500);
    },
    methods: {
        async searchMaps(search) {
            const params = { search };
            const mapResponse = await axios.get("map/search", { params });
            this.maps = mapResponse.data;
            this.loading = false;
        },
    },
};
</script>

<style>
#search {
    width: 100%;
    margin: 10px 0;
}
</style>

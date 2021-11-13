<template>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else-if="maps.length === 0">Map not found</div>
    <div v-else>
        <div class="content">
            <Map
                v-for="map in maps"
                :key="`${map.mapId}x${map.mapRate}`"
                :map="map"
                class="map"
            />
        </div>
    </div>
</template>

<script>
import Map from "@/components/Entity/Map.vue";
import Spinner from "@/components/Elements/Spinner.vue";
import axios from "axios";

export default {
    components: { Map, Spinner },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
            maps: [],
        };
    },
    async created() {
        const params = { id: this.id, all: true };
        const mapResponse = await axios.get("map", { params });
        this.maps = mapResponse.data;
        this.loading = false;
    },
};
</script>

<style>
</style>

<template>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else-if="!map">Map not found</div>
    <div v-else>
        <div class="content">
            <div class="map">
                <Map :map="map" />
            </div>
            <hr />
            <div class="qlink">
                <router-link :to="`/map/${map.mapId}`">
                    All map rates
                </router-link>
            </div>
            <hr />
            <div class="qlink">
                <a
                    :href="`https://quavergame.com/mapset/map/${map.mapId}`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Map on quavergame.com
                </a>
            </div>
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
            rate: this.$route.params.rate,
            loading: true,
            map: null,
        };
    },
    async created() {
        const params = { id: this.id, rate: this.rate };
        const mapResponse = await axios.get("map", { params });
        this.map = mapResponse.data;
        this.loading = false;
    },
};
</script>

<style>
.qlink {
    text-align: center;
}
</style>

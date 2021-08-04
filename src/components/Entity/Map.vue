<template>
    <Entity
        :img="`${config.quaverCdnUrl}/mapsets/${map.mapsetId}.jpg`"
        :url="`quaver://map/${map.mapId}`"
        :title="`${map.artist} - ${map.title}`"
        :subtitle="`${map.difficultyName} ${map.mapRate.toFixed(1)}x`"
        :rating="map.rating"
        :rd="map.rd"
        :wins="map.wins"
        :matchesPlayed="map.matchesPlayed"
        :letterRank="map.letterRank"
    />
</template>

<script>
import config from "@/config/config.js";
import Entity from "@/components/Entity/Entity.vue";

export default {
    components: { Entity },
    props: { map: Object },
    computed: {
        config() {
            return config;
        },
    },
};
</script>

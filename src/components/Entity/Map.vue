<template>
    <Entity
        :img="`${config.quaverCdnUrl}/mapsets/${map.mapsetId}.jpg`"
        :url="`/map/${map.mapId}`"
        :imgUrl="`quaver://map/${map.mapId}`"
        :imgTooltip="`Click to open in-game!`"
        :title="`${map.artist} - ${map.title}`"
        :subtitle="`${map.difficultyName} ${map.mapRate.toFixed(1)}x`"
        :rating="map.rating"
        :rd="map.rd"
        :wins="map.wins"
        :matchesPlayed="map.matchesPlayed"
        :percentile="map.percentile"
        :rank="map.rank"
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

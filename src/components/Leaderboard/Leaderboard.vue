<template>
    <div class="leaderboard">
        <div class="leaderboard-row" v-for="(entity, index) in entities" :key="entity._id">
            <p class="rank">#{{ index + 1 }}</p>
            <Entity class="col" :entityId="entity._id"/>
        </div>
    </div>
</template>

<script>
import Entity from "../Entity/Entity";

export default {
    name: "Leaderboard",
    components: { Entity },
    props: {
        type: String,
        page: Number,
    },
    created() {
        this.$store.dispatch("fetchLeaderboard", { entityType: this.type })
    },
    computed: {
        leaderboard() {
            return this.$store.getters.currentEntityDatapoints
                .filter(dp => dp.rd < 100)
                .sort((a, b) => b.rating - a.rating);
        },
        entities() {
            return this.leaderboard.map(dp => dp.entity);
        },
    },
}
</script>

<style scoped>
.leaderboard-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.col {
    flex: 1;
}
.rank {
    text-align: right;
    flex-basis: 35px;
}
</style>
<template>
    <div class="leaderboard">
        <transition name="transition" mode="out-in">
            <div v-if="loading === true" key="loading">
                <LoadingSpinner></LoadingSpinner>
            </div>
            <div v-else key="lb">
                <div class="leaderboard-row" v-for="(entity, index) in entities" :key="entity._id">
                    <p class="rank">#{{ index + 1 }}</p>
                    <Entity class="col" :entityId="entity._id"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Entity from "../Entity/Entity";
import LoadingSpinner from "../Elements/ElementLoadingSpinner";

export default {
    name: "Leaderboard",
    components: { Entity, LoadingSpinner },
    props: {
        type: String,
        page: Number,
    },
    async created() {
        await this.$store.dispatch("fetchLeaderboard", { entityType: this.type });
    },
    computed: {
        loading() {
            return this.$store.state.datapoints.leaderboardLoading
        },
        leaderboard() {
            return this.$store.getters.currentEntityDatapoints
                .filter(dp => dp.rd < 100 && dp.entity.entityType === this.type)
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
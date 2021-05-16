<template>
    <div class="stats" v-if="entityStats != null">
        <div class="numbers">
            <div v-if="entityStats.matches >= 10" class="number-row">
                <div
                    class="number left-number"
                    v-tooltip.left="'Glicko Rating'"
                >
                    <Number :value="entityStats.rating" />
                </div>
                <div class="middle-char">±</div>
                <div
                    class="number right-number"
                    v-tooltip.left="'Rating Deviation (RD)'"
                >
                    <Number :value="entityStats.rd" />
                </div>
            </div>
            <div class="wl number-row" v-tooltip.left="wlTooltip">
                <div class="number left-number">
                    <Number :value="entityStats.wins" />W
                </div>
                <div class="middle-char">/</div>
                <div class="number right-number">
                    <Number :value="entityStats.matches - entityStats.wins" />L
                </div>
            </div>
        </div>
        <div class="letter-rank" v-tooltip.right="letterRankTooltip">
            {{ letterRank }}
        </div>
    </div>
</template>

<script>
import Number from "./Number.vue";

export default {
    props: {
        entityId: String,
    },
    components: {
        Number,
    },
    async created() {
        this.$store.dispatch("fetchEntityDatapointsCurrent", this.entityId);
    },
    methods: {
        trim: function (n) {
            return n.toFixed(0);
        },
    },
    computed: {
        entityStats() {
            return this.$store.getters["currentDatapoints"].find(
                (dp) => dp.entity._id == this.entityId
            );
        },
        letterRank() {
            const lRank = this.entityStats.letterRank;
            if (lRank == "z") return "?";
            return lRank.toUpperCase();
        },
        letterRankTooltip() {
            if (this.entityStats.rd > 100) return "Unranked";
            let percentile = (100 * this.entityStats.userPercentile).toFixed(1);
            return `Top ${percentile}%`;
        },
        wlTooltip() {
            if (this.entityStats.matches < 10)
                return "Play 10 matches to view the Glicko rating";

            const winPercentage =
                this.entityStats.wins > 0
                    ? (100 * this.entityStats.wins) / this.entityStats.matches
                    : 0;

            return `${winPercentage.toFixed(2)}%`;
        },
    },
};
</script>

<style scoped>
.stats {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
    width: 120px;
}
.numbers {
    flex-direction: column;
    flex: 1;
}
.number-row {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.number {
    flex: 4;
}
.qxe {
    text-align: right;
}
.middle-char {
    flex: 1;
    margin: 0 2px;
}
.left-number {
    text-align: right;
}
.right-number {
    text-align: left;
}
.letter-rank {
    top: 50%;
    font-size: 30px;
    line-height: 100%;
    flex-basis: 30px;
}
</style>

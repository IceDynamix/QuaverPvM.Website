<template>
    <div class="stats" v-if="entityStats != null">
        <div class="numbers">
            <div
                v-if="entityStats.matches >= 10"
                class="qxe number-row"
                v-tooltip.left="glixareTooltip"
            >
                <div class="number">
                    <animated-number
                        :value="entityStats.glixare"
                        :duration="2000"
                        :formatValue="trim"
                        :delay="100"
                        easing="easeInOutQuint"
                    />
                    QXE
                </div>
            </div>
            <div class="wl number-row" v-tooltip.left="wlTooltip" v-else>
                <div class="number left-number">
                    <animated-number
                        :value="entityStats.wins"
                        :duration="2000"
                        :formatValue="trim"
                        :delay="100"
                        easing="easeInOutQuint"
                    />W
                </div>
                <div class="middle-char">/</div>
                <div class="number right-number">
                    <animated-number
                        :value="entityStats.matches - entityStats.wins"
                        :duration="2000"
                        :formatValue="trim"
                        :delay="100"
                        easing="easeInOutQuint"
                    />L
                </div>
            </div>
        </div>
        <div class="letter-rank" v-tooltip.right="letterRankTooltip">
            {{ letterRank }}
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
    props: {
        entityId: String,
    },
    components: {
        AnimatedNumber,
    },
    async created() {
        this.$store.dispatch("datapoints/fetchEntityCurrent", this.entityId);
    },
    methods: {
        trim: function (n) {
            return n.toFixed(0);
        },
    },
    computed: {
        entityStats() {
            return this.$store.getters["datapoints/current"].find(
                (dp) => dp.entity._id == this.entityId
            );
        },
        letterRank() {
            const lRank = this.entityStats.letterRank;
            if (lRank == "z") return "?";
            return lRank.toUpperCase();
        },
        glixareTooltip() {
            return `Glicko: ${this.trim(this.entityStats.rating)} ± ${this.trim(
                this.entityStats.rd
            )}`;
        },
        letterRankTooltip() {
            if (this.entityStats.rd > 100)
                return `Unranked, RD must be less than 100 (currently ${this.trim(
                    this.entityStats.rd
                )})`;
            let overallPercentile = (
                100 * this.entityStats.overallPercentile
            ).toFixed(1);
            let typePercentile = (
                100 * this.entityStats.typePercentile
            ).toFixed(1);
            let type = this.entity.entityType;
            return `Top ${overallPercentile}% overall | ${typePercentile}% ${type}s`;
        },
        wlTooltip() {
            if (this.entityStats.matches < 10)
                return "Play 10 matches to view the GLIXARE rating";

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
    flex: auto;
}
.qxe {
    text-align: right;
}
.middle-char {
    flex: 1;
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

<template>
    <div class="entity">
        <div class="info-container">
            <div class="info img" v-tooltip.right="imgTooltip">
                <a :href="imgUrl">
                    <img :src="img" />
                </a>
            </div>
            <div class="info title">
                <div class="main-title">
                    <a :href="url" target="_blank" rel="noopener noreferrer">
                        {{ title }}
                    </a>
                </div>
                <div class="sub-title light-font" v-if="subtitle">
                    {{ subtitle }}
                </div>
            </div>
        </div>
        <div>
            <div class="info stats">
                <div
                    class="stats-row"
                    v-tooltip.left="glickoTooltip"
                >
                    <span class="left-col">
                        <Number :value="rating" />
                    </span>
                    <span class="mid-col"> ± </span>
                    <span class="right-col">
                        <Number :value="rd" />
                    </span>
                </div>
                <div class="stats-row" v-tooltip.left="wlTooltip">
                    <span class="left-col"> <Number :value="wins" />W </span>
                    <span class="mid-col">/</span>
                    <span class="right-col">
                        <Number :value="matchesPlayed - wins" />L
                    </span>
                </div>
            </div>
            <div class="info letterRank">
                <LetterRank
                    :letterRank="letterRank"
                    v-tooltip.left="letterRankTooltip"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Number from "@/components/Elements/Number.vue";
import LetterRank from "@/components/Entity/LetterRank.vue";

export default {
    components: {
        Number,
        LetterRank,
    },
    props: {
        img: String,
        imgUrl: String,
        imgTooltip: String,
        url: String,
        title: String,
        subtitle: String,
        rating: Number,
        rd: Number,
        wins: Number,
        matchesPlayed: Number,
        percentile: Number,
        rank: Number,
        letterRank: String,
    },
    computed: {
        glickoTooltip() {
            const qr = Math.sqrt(Math.max(0, this.rating - 500) / 1.28);
            return `Glicko rating, cv. ${qr.toFixed(2)}QR`;
        },
        wlTooltip() {
            let winPercentage = 0;
            if (this.wins > 0) winPercentage = this.wins / this.matchesPlayed;
            return `${100 * winPercentage.toFixed(2)}%`;
        },
        letterRankTooltip() {
            if (this.rd > 100 || !percentile) return "Unranked";
            const percentile = 100 * this.percentile.toFixed(1);
            return `#${this.rank}, Top ${percentile}%`;
        },
        ranked() {
            return this.rd <= 100;
        },
    },
};
</script>

<style>
.entity {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}

.entity > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.info-container {
    max-width: 460px;
}

.img {
    flex: content;
}
img {
    height: 50px;
    width: 50px;
    vertical-align: middle;
    background-size: cover;
    object-fit: cover;
    object-position: center;
}
.info {
    margin: 10px;
}
.stats {
    display: grid;
    flex: content;
    width: 100px;
}
.stats-row {
    display: grid;
    grid-template-columns: 1fr 15px 1fr;
    flex: content;
    width: 100px;
}
.left-col {
    text-align: right;
}
.mid-col {
    text-align: center;
}
.right-col {
    text-align: left;
}
.letterRank {
    flex: content;
}
.info.title {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}
.main-title > a {
    font-family: Lexend Deca;
    font-size: 18px;
}
.sub-title {
    font-size: 14px;
}
</style>

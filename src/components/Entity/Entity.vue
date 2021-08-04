<template>
    <div class="entity">
        <div>
            <div class="info img">
                <img :src="img" />
            </div>
            <div class="info title">
                <div class="main-title">
                    <a :href="url" target="_blank" rel="noopener noreferrer">
                        {{ title }}
                    </a>
                </div>
                <div class="sub-title" v-if="subtitle">
                    {{ subtitle }}
                </div>
            </div>
        </div>
        <div>
            <div class="info stats">
                <span class="left-col"><Number :value="rating" /> </span>
                <span class="mid-col">±</span>
                <span class="right-col"><Number :value="rd" /></span>
                <span class="left-col"><Number :value="wins" />W</span>
                <span class="mid-col">/</span>
                <span class="right-col">
                    <Number :value="matchesPlayed - wins" />L
                </span>
            </div>
            <div class="info letterRank">
                <LetterRank :letterRank="letterRank" />
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
        url: String,
        title: String,
        subtitle: String,
        rating: Number,
        rd: Number,
        wins: Number,
        matchesPlayed: Number,
        letterRank: String,
    },
};
</script>

<style>
.entity {
    margin: 25px;
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
    color: var(--foreground-sub-color);
}
</style>

<template>
    <div class="letter-rank" :style="`background-color: ${color}`">
        <div class="letter" :style="`background-color: ${color}`">
            {{ rank }}
        </div>
        <div
            v-if="modifier != null"
            class="modifier"
            :style="`background-color: ${color}`"
        >
            {{ modifier }}
        </div>
    </div>
</template>

<script>
import { rankToColor } from "@/ranks.js";

export default {
    name: "LetterRank",
    props: {
        letterRank: String,
    },
    computed: {
        rank() {
            let letter = this.letterRank.replace(this.modifier ?? "", "");
            if (letter === "z") return "?";
            return letter.toUpperCase();
        },
        modifier() {
            let last = this.letterRank.slice(-1);
            if (last === "+" || last === "-") return last;
            return null;
        },
        color() {
            return rankToColor(this.letterRank);
        },
    },
};
</script>
<style scoped>
.letter-rank {
    width: 50px;
    height: 40px;
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.letter {
    font-family: Lexend Deca;
    font-size: 25px;
    color: var(--background-color);
}
.modifier {
    font-size: 20px;
    color: var(--background-color);
}
</style>

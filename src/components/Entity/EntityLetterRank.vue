<template>
    <div class="letter-rank" :style="`background-color: ${color}`">
        <div class="letter" :style="`background-color: ${color}`">{{ rank }}</div>
        <div v-if="modifier != null" class="modifier" :style="`background-color: ${color}`">{{ modifier }}</div>
    </div>
</template>

<script>

export default {
    name: "EntityLetterRank",
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
            switch (this.letterRank) {
                case "x":
                    return "#F38BC6";
                case "u":
                    return "#FFA8A8";
                case "ss":
                    return "#FFC8A8";
                case "s+":
                    return "#FFE093";
                case "s":
                    return "#FFE6A8";
                case "s-":
                    return "#FFECBC";
                case "a+":
                    return "#B8FE68";
                case "a":
                    return "#C8F98F";
                case "a-":
                    return "#D3F8A9";
                case "b+":
                    return "#8AC9E8";
                case "b":
                    return "#9ACCE4";
                case "b-":
                    return "#ABD1E4";
                case "c+":
                    return "#D2AEE7";
                case "c":
                    return "#CA9CE6";
                case "c-":
                    return "#C78CEA";
                case "d+":
                    return "#BD8EEB";
                case "d":
                    return "#9C5BDA";
                default:
                    return "#888888";
            }
        },
    },
}
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
    font-size: 25px;
    color: #434343;
}
.modifier {
    font-size: 20px;
    color: #434343;
}
</style>
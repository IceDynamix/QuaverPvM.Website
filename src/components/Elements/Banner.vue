
<template>
    <div class="banner" :style="style">
        <div class="excl-point">
            <span class="material-icons">{{ icon }}</span>
        </div>
        <div class="banner-content">
            <p>
                {{ content }}
            </p>
        </div>
        <div class="excl-point">
            <span class="material-icons">{{ icon }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        color: String,
        content: String,
    },
    computed: {
        style() {
            let colors = {
                red: "salmon",
                yellow: "khaki",
                blue: "skyblue",
                green: "palegreen",
            };
            let col = this.color in colors ? colors[this.color] : this.color;
            return `background-color: ${col}`;
        },
    },
};
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}
.banner > div {
    background-color: inherit;
}
.banner-content > p {
    background-color: inherit;
    text-align: center;
    color: var(--background-color);
    font-family: Lexend Deca, sans-serif;
}
.excl-point > span {
    background-color: inherit;
    color: var(--background-color);
    font-size: 30px;
    padding: 10px;
}
</style>

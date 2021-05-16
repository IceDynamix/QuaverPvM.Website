<template>
    <div class="banner" :class="color">
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
};
</script>

<style scoped>
.red {
    background-color: salmon;
}
.yellow {
    background-color: khaki;
}
.blue {
    background-color: skyblue;
}
.green {
    background-color: palegreen;
}
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
    color: #434343;
    font-family: "Lexend Deca";
}
.excl-point > span {
    background-color: inherit;
    color: #434343;
    font-size: 30px;
    padding: 10px;
}
</style>

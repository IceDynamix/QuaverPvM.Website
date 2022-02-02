<template>
    <button @click="click">
        <div class="button">
            <span class="material-icons button-icon" v-if="icon">
                {{ icon }}
            </span>
            <span class="button-text bold" v-if="buttonText">
                {{ buttonText }}
            </span>
        </div>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        buttonText: String,
        icon: String,
        click: Function,
    },
};
</script>

<style scoped>
button {
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 18px;
    height: 25px;
    margin: 5px;
}
.button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.button-icon {
    font-size: 18px;
    margin: 0 5px;
    flex: auto;
}
.button-text {
    flex: auto;
    text-decoration: underline;
}
</style>

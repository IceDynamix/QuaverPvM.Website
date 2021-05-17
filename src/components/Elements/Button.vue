<template>
    <button @click="click">
        <span class="button-text">{{ buttonText }}</span>
        <span class="material-icons button-icon" v-if="icon">{{ icon }}</span>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        buttonText: String,
        icon: String,
        click: Function
    },
}
</script>

<style scoped>
button {
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 18px;
}

.button-icon {
    font-size: 16px;
    margin-left: 5px;
}

.button-text {
    text-decoration: underline;
}
</style>
<template>
    <div id="app">
        <div class="container">Hello world!</div>
    </div>
</template>

<script>
export default {
    components: {},
    created() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");

:root {
    --background-color: #232323;
    --foreground-color: white;
    --main-font: Lexend Deca, sans-serif;
}

* {
    font-family: var(--main-font);
    background-color: var(--background-color);
    color: var(--foreground-color);
    hyphens: auto;
}

.container {
    margin: 0 auto;
}
</style>

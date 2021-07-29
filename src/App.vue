<template>
    <div id="app">
        <div class="container">
            <ElementHeader></ElementHeader>
            Hello world!
        </div>
    </div>
</template>

<script>
import ElementHeader from "@/components/Elements/ElementHeader.vue";

export default {
    components: { ElementHeader },
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
    width: 700px;
    padding: 10px;
}

@media only screen and (max-width: 700px) {
    .container {
        margin: 0 auto;
        width: 90%;
    }
}
</style>

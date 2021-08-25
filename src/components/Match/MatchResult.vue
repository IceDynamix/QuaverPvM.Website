<template>
    <div class="match-result">
        <div class="icon-flex">
            <span
                :style="`background-color: ${color}`"
                class="material-icons result-icon"
            >
                {{ icon }}
            </span>
        </div>
        <div class="opponent-flex">
            <div v-if="!flipSide">
                <Map :map="match.map" />
            </div>
            <div v-else>
                <User :user="match.user" />
            </div>
        </div>
    </div>
</template>

<script>
import Map from "@/components/Entity/Map.vue";
import User from "@/components/Entity/User.vue";

export default {
    components: { Map, User },
    props: {
        match: Object,
        flipSide: Boolean,
    },
    computed: {
        icon() {
            switch (this.match.result) {
                case "TIMEOUT":
                    return "hourglass_disabled";
                case "WIN":
                    return "check";
                case "RESIGN":
                    return "close";
                default:
                    return "play_arrow";
            }
        },
        color() {
            const winColor = "orange";
            const loseColor = "slateblue";
            switch (this.match.result) {
                case "TIMEOUT":
                    return "#888888";
                case "WIN":
                    return this.flipSide ? loseColor : winColor;
                case "RESIGN":
                    return this.flipSide ? winColor : loseColor;
                default:
                    return "green";
            }
        },
    },
};
</script>

<style>
.match-result {
    display: flex;
    align-items: center;
    height: 84px;
}
.result-icon {
    color: var(--background-color);
    width: 30px;
    height: 65px;
    line-height: 65px;
    text-align: center;
}
.icon-flex {
    flex-basis: auto;
}
.opponent-flex {
    flex: auto;
}
</style>

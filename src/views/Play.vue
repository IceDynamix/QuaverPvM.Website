<template>
    <div class="play">
        <div v-if="userId != null">
            <div class="flavor tutorial" v-if="matches === 0">
                Welcome to QuaverPvM! This is your first time playing, so here's
                what you need to know to get going. The instructions will
                disappear after a match, but will be available in the FAQ at any
                time.
                <ol>
                    <li>
                        Once you click on MATCH, you will be matched against a
                        map.
                    </li>
                    <li>
                        After getting matched, you have 10 minutes to submit an
                        S rank play on the map. Mirror and higher rates are
                        allowed.
                    </li>
                    <li>
                        When your score is submitted to Quaver, you need to
                        click the SUBMIT button. Your recent plays will be
                        scanned for a valid play. If you're unable to submit an
                        S rank play, then you're free to resign with the RESIGN
                        button.
                    </li>
                    <li>
                        Your rating is going to be hidden until you've finished
                        your 10 placement matches.
                    </li>
                    <li>
                        If you have any more questions then check out the FAQ or
                        ask questions in the Discord.
                    </li>
                </ol>
            </div>
            <div class="flavor helper" v-if="rd > 100 && matches > 0">
                Your Rating Deviation (RD) is above 100 (currently
                {{ rd.toFixed(0) }}), which means you're <b>unranked</b>. Once
                your RD is below 100, you will receive a letter rank and appear
                on the leaderboards (coming soon!).
            </div>
            <Entity :entityId="userId" />
            <Match />
        </div>
        <div v-else class="login">Please log in with Quaver! (top right)</div>
    </div>
</template>

<script>
import Entity from "../components/Entity/Entity.vue";
import Match from "../components/Match/Match.vue";

export default {
    components: {
        Entity,
        Match,
    },
    computed: {
        userId() {
            return this.$store.state.user.loggedInUser;
        },
        userStats() {
            return this.$store.getters["currentEntityDatapoints"].find(
                (dp) => dp.entity._id === this.userId
            );
        },
        rd() {
            if (this.userStats) return this.userStats.rd;
            return 300;
        },
        matches() {
            if (this.userStats) return this.userStats.matches;
            return 0;
        },
    },
};
</script>

<style scoped>
.tutorial > ol {
    margin: 25px 50px;
}
.tutorial > ol > li {
    margin: 10px 0;
    font-family: Lexend, sans-serif;
}
.flavor {
    margin: 25px 0;
    text-align: justify;
}
.login {
    text-align: center;
}
</style>

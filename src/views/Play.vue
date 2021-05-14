<template>
    <div class="play">
        <div v-if="userId != null">
            <div class="flavor tutorial" v-if="rd > 300">
                Welcome to QuaverPvM! This is your first time playing, so here's
                what you need to know to get going. The instructions will
                disappear after a few matches, but will be available in the FAQ.
                <ol>
                    <li>
                        Once you click on MATCH, you will be matched against a
                        map. You have an initial rating of 1500, so the map
                        you're matched against will be around that rating as
                        well. Your rating is going to be hidden until you've
                        finished your 10 placement matches.
                    </li>
                    <li>
                        After getting matched, you have 10 minutes to submit an
                        S rank play on the map. Make sure you're online and
                        don't use any unranked mods. Don't worry about
                        accidentally leaving the page, your match is saved
                        across browsers.
                    </li>
                    <li>
                        When your score is submitted to Quaver, you need to
                        click the SUBMIT button. Your recent plays will be
                        scanned for a valid play and it will tell you in case
                        there's something wrong. If you're unable to submit an S
                        rank play, then you're free to resign with the RESIGN
                        button.
                    </li>
                    <li>
                        If you have any more questions then feel free to check
                        out the FAQ or ask questions in the Discord (refer to
                        page footer).
                    </li>
                </ol>
            </div>
            <div class="flavor helper" v-if="rd > 100">
                Your Rating Deviation (RD) is above 100, which means you're
                <b>unranked</b> (currently {{ rd.toFixed(0) }}). Once your RD is
                below 100, you will receive a letter rank and appear on the
                leaderboards (coming soon!).
            </div>
            <Entity :entityId="userId" />
            <Match />
        </div>
        <div v-else class="login">Please log in with Quaver! (top right)</div>
    </div>
</template>

<script>
import Entity from "@/components/Entity/Entity.vue";
import Match from "@/components/Match/Match.vue";

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
            return this.$store.getters["currentDatapoints"].find(
                (dp) => dp.entity._id == this.userId
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
    font-family: "Lexend";
}
.flavor {
    margin: 25px 0;
    text-align: justify;
}
.login {
    text-align: center;
}
</style>

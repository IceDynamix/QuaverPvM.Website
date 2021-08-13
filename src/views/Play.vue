<template>
    <div class="play">
        <div v-if="user">
            <div class="flavor" v-if="showTutorial">
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
                        Feel free to check out the FAQ or ask questions in the
                        Discord.
                    </li>
                </ol>
            </div>
            <div class="flavor" v-if="showUnranked">
                Your Rating Deviation (currently {{ user.rd.toFixed(0) }} RD) is
                above 100, which means you're <b>unranked</b>. Once your RD is
                below 100, you will receive a letter rank and appear on the
                leaderboards (coming soon!).
                <!-- TODO Edit when leaderboards are out -->
            </div>
            <hr v-if="showTutorial || showUnranked" />
            <Match />
        </div>
        <div v-else>Please login to play!</div>
    </div>
</template>

<script>
import Match from "@/components/Match/Match.vue";

export default {
    components: {
        Match,
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        showTutorial() {
            return this.user && this.user.matchesPlayed === 0;
        },
        showUnranked() {
            return (
                this.user && this.user.rd > 100 && this.user.matchesPlayed > 0
            );
        },
    },
};
</script>

<style scoped>
.flavor {
    margin: 25px;
}
</style>

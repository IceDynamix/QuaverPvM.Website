<template>
    <div class="play">
        <div v-if="user">
            <div v-if="showTutorial">
                <div class="flavor tutorial">
                    <h2>Tutorial</h2>
                    Welcome to QuaverPvM! This is your first time playing, so
                    here's what you need to know to get going. The instructions
                    will disappear after a match, but will be available in the
                    FAQ at any time.
                    <ol>
                        <li>
                            Once you click on MATCH, you will be matched against
                            a map.
                        </li>
                        <li>
                            After getting matched, you have 10 minutes to submit
                            an S rank play on the map. Make sure you're playing
                            the correct rate, shown next to the difficulty name!
                            <b>Mirror, NSV, and higher rates are allowed</b>,
                            anything else (including pausing) is not.
                        </li>
                        <li>
                            Once your score is submitted to Quaver, you need to
                            click the SUBMIT button. Your recent plays will be
                            scanned for a valid play. If you're unable to submit
                            an S rank play, then you're free to resign with the
                            RESIGN button.
                        </li>
                        <li>
                            Feel free to check out the FAQ or ask questions in
                            the Discord.
                        </li>
                    </ol>
                </div>
                <div class="confirm-button">
                    <IconButton
                        icon="done"
                        button-text="CONFIRM"
                        :click="
                            () => {
                                this.readTutorial = true;
                            }
                        "
                    />
                </div>
            </div>
            <hr v-if="showTutorial && showUnranked" />
            <div class="flavor" v-if="showUnranked">
                Once you have played 10 matches, you will be considered ranked,
                receive a letter rank and appear on the leaderboards.
            </div>
            <hr v-if="showUnranked && !showTutorial" />
            <Match v-if="!showTutorial" />
        </div>
        <div v-else>Please login to play!</div>
    </div>
</template>

<script>
import Match from "@/components/Match/Match.vue";
import IconButton from "@/components/Elements/IconButton.vue";

export default {
    components: {
        Match,
        IconButton,
    },
    data() {
        return { readTutorial: false };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        showTutorial() {
            return (
                this.user &&
                this.user.matchesPlayed === 0 &&
                this.readTutorial === false
            );
        },
        showUnranked() {
            return (
                this.user &&
                this.user.matchesPlayed > 0 &&
                this.user.matchesPlayed < 10
            );
        },
    },
};
</script>

<style scoped>
.flavor {
    margin: 25px;
}
li {
    margin: 10px;
}
.tutorial {
    margin: 25px;
    padding: 10px;
}
.confirm-button {
    text-align: center;
}
</style>

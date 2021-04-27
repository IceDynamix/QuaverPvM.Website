<template>
    <div>
        <transition name="transition" mode="out-in">
            <transition name="transition" mode="out-in">
                <div class="submission" v-if="matchLoading == false">
                    <transition name="transition" mode="out-in">
                        <div v-if="match" key="playing">
                            <div class="vs">VS</div>
                            <Entity :entityId="match.map._id" />
                            <transition name="transition" mode="out-in">
                                <div
                                    class="submission-container"
                                    v-if="secondsLeft != null"
                                >
                                    <div class="left-side side">
                                        <div>
                                            <p class="timer-label">
                                                Time left to play
                                            </p>
                                            <p class="timer-content">
                                                {{ timer }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="right-side side">
                                        <div class="submission-buttons">
                                            <div class="submission-selection">
                                                <button
                                                    @click="onYesButton"
                                                    v-tooltip.right="
                                                        submitYesTooltip
                                                    "
                                                >
                                                    <span
                                                        class="submission-button-text"
                                                        >SUBMIT</span
                                                    >
                                                    <span class="material-icons"
                                                        >send</span
                                                    >
                                                </button>
                                            </div>
                                            <div class="submission-selection">
                                                <button
                                                    @click="onNoButton"
                                                    v-tooltip.right="
                                                        submitNoTooltip
                                                    "
                                                >
                                                    <span
                                                        class="submission-button-text"
                                                        >RESIGN</span
                                                    >
                                                    <span class="material-icons"
                                                        >flag</span
                                                    >
                                                </button>
                                            </div>
                                        </div>
                                        <transition name="fade" mode="in-out">
                                            <div
                                                class="submission-scan-loading"
                                                v-if="scanLoading == true"
                                            >
                                                <LoadingSpinner />
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div v-else key="idling">
                            <button @click="onMatchButton">
                                MATCH<span class="material-icons">search</span>
                            </button>
                        </div>
                    </transition>
                </div>
            </transition>
        </transition>
    </div>
</template>

<script>
// import axios from "axios";
import Entity from "../Entity/Entity.vue";
import LoadingSpinner from "../LoadingSpinner.vue";
import axios from "axios";

export default {
    components: {
        Entity,
        LoadingSpinner,
    },
    data: function () {
        return { secondsLeft: null, scanLoading: false };
    },
    created() {
        this.$store.dispatch("fetchMatch");
        setTimeout(this.countdown, 1000);
    },
    methods: {
        onMatchButton: function () {
            this.$store.dispatch("requestMatch");
        },
        onYesButton: async function () {
            try {
                this.scanLoading = true;
                let response = await axios.post("results");
                let { success, message, plays } = response.data;
                if (success) {
                    this.$toasted.show(
                        `Submitted a win successfully (${plays[0].accuracy.toFixed(
                            2
                        )}%)`
                    );
                    this.secondsLeft = null;
                    this.$store.commit("setMatch", null);
                    this.$store.dispatch(
                        "fetchEntityDatapointsCurrent",
                        this.$store.state.user.loggedInUser
                    );
                } else {
                    this.$toasted.show(message, {
                        type: "info",
                        action: {
                            text: "Resign",
                            onClick: () => this.onNoButton(),
                        },
                    });
                }
            } catch (e) {
                this.$toasted.show(e, { type: "error" });
            }
            this.scanLoading = false;
        },
        onNoButton: async function () {
            let confirmation = confirm("Are you sure you want to resign?");
            if (!confirmation) return;
            try {
                this.scanLoading = true;
                let response = await axios.post("results", { giveUp: true });
                let { success, message } = response.data;
                if (success) {
                    this.$toasted.show("Resigned successfully");
                    this.secondsLeft = null;
                    this.$store.commit("setMatch", null);
                    this.$store.dispatch(
                        "fetchEntityDatapointsCurrent",
                        this.$store.state.user.loggedInUser
                    );
                } else {
                    this.$toasted.show(message, { type: "info" });
                }
            } catch (e) {
                this.$toasted.show(e, { type: "error" });
            }
            this.scanLoading = false;
        },
        countdown: function () {
            if (!this.match) {
                // Match not ongoing
                setTimeout(this.countdown, 1000);
            } else if (this.secondsLeft != null && this.secondsLeft <= 0) {
                // User timed out
                this.$toasted.show("Timed out, match is considered lost");
                this.$store.commit("setMatch", null);
                this.$store.dispatch(
                    "fetchEntityDatapointsCurrent",
                    this.$store.state.user.loggedInUser
                );
            } else if (this.match && this.secondsLeft == null) {
                // New match and timer doesn't exist yet
                const currentTime = new Date();
                this.secondsLeft =
                    (new Date(this.match.endsAt).getTime() -
                        currentTime.getTime()) /
                    1000;
                setTimeout(this.countdown, 1000);
            } else if (
                // Timer
                this.match &&
                this.secondsLeft != null &&
                this.secondsLeft > 0
            ) {
                this.secondsLeft--;
                setTimeout(this.countdown, 1000);
            }
        },
    },
    computed: {
        match() {
            return this.$store.state.match.match;
        },
        matchLoading() {
            return this.$store.state.match.loading;
        },
        submitYesTooltip() {
            return "Scan for recent plays";
        },
        submitNoTooltip() {
            return "Give up on this one";
        },
        timer() {
            if (this.secondsLeft)
                return `${Math.floor(this.secondsLeft / 60)}:${(
                    this.secondsLeft % 60
                )
                    .toFixed(0)
                    .padStart(2, "0")}`;
            else return "";
        },
    },
};
</script>

<style scoped>
.submission {
    text-align: center;
}

.submission-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    margin-top: 30px;
}

.side {
    margin: 10px;
    height: inherit;
}

.left-side {
    flex: 1;
    text-align: right;
}

.right-side {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.timer-content {
    font-size: 30px;
}

.submission-selection {
    flex: 1;
}

.submission-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: inherit;
}

.submission-scan-loading {
    margin: 10px;
}

button {
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 18px;
}

.material-icons {
    font-size: 16px;
    margin-left: 5px;
}

.submission-button-text {
    text-decoration: underline;
}
</style>

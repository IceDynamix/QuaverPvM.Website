<template>
    <div class="submission" v-if="match">
        <div class="submission-timer">
            <p class="light-font">Time left to play</p>
            <p class="timer-text bold">{{ timer }}</p>
        </div>
        <div class="submission-buttons">
            <IconButton buttonText="SUBMIT" icon="send" :click="() => null" />
            <IconButton buttonText="RESIGN" icon="flag" :click="() => null" />
        </div>
    </div>
</template>

<script>
import IconButton from "@/components/Elements/IconButton.vue";

export default {
    components: { IconButton },
    created() {
        setInterval(this.updateTimer, 1000);
    },
    data() {
        return {
            secondsLeft: null,
        };
    },
    computed: {
        match() {
            return this.$store.state.match;
        },
        timer() {
            const date = new Date(this.secondsLeft * 1000);
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");
            return `${minutes}:${seconds}`;
        },
    },
    methods: {
        startTimer() {
            const now = new Date();
            const matchStart = new Date(this.match.createdAt);
            const secondsPassed = Math.floor((now - matchStart) / 1000);
            this.secondsLeft = 10 * 60 - secondsPassed;
        },
        stopTimer() {
            this.secondsLeft = null;
            if (this.match) this.$store.commit("setMatch", null);
        },
        decrementTimer() {
            this.secondsLeft -= 1;
        },
        updateTimer() {
            if (this.match && this.secondsLeft === null) this.startTimer();
            else if (!this.match || this.secondsLeft <= 0) this.stopTimer();
            else if (this.secondsLeft > 0) this.decrementTimer();
        },
    },
};
</script>

<style scoped>
.submission {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.submission-buttons {
    display: flex;
    flex-flow: column wrap;
}
.submission-timer > p {
    margin: 0 10px;
}
.submission-timer {
    text-align: right;
}
.timer-text {
    font-size: 30px;
}
</style>

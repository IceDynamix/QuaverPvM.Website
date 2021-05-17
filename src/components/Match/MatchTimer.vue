<template>
    <div class="timer">
        <p class="timer-label">
            Time left to play
        </p>
        <p class="timer-content">
            {{ timer }}
        </p>
    </div>
</template>

<script>
export default {
    name: "MatchTimer",
    props: {
        secondsLeft: Number
    },
    computed: {
        timer() {
            if (this.secondsLeft)
                return `${Math.floor(this.secondsLeft / 60)}:${(
                    Math.floor(this.secondsLeft) % 60
                )
                    .toFixed(0)
                    .padStart(2, "0")}`;
            else return "";
        },
    }
}
</script>

<style scoped>
p {
    font-family: "Lexend Deca", sans-serif;
}
.timer-content {
    font-size: 30px;
}
</style>
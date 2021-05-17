<template>
    <div class="leaderboards">
        <Leaderboard type="user" :page="1" />
    </div>
</template>

<script>
import Leaderboard from "../components/Leaderboard/Leaderboard";

export default {
    name: "Leaderboards",
    components: { Leaderboard },
}
</script>

<style scoped>

</style>
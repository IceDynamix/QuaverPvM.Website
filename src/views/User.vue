<template>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else-if="user === null">User not found</div>
    <div v-else>
        <div class="content">
            <User :user="user" class="user" />
        </div>
        <div class="qlink">
            <a
                :href="`https://quavergame.com/user/${user.userId}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                User on quavergame.com
            </a>
        </div>
        <hr />
        <h3>Rating Plot</h3>
        <div class="content" v-if="user.history && user.history.length > 0">
            <RatingPlot :datapoints="user.history" :height="100" />
        </div>
        <div v-else class="content">No datapoints to plot...</div>
        <hr />
        <h3>Best Wins</h3>
        <div class="content" v-if="bestWins && bestWins.length > 0">
            <div class="match" v-for="match in bestWins" :key="match.matchId">
                <MatchResult :match="match" />
            </div>
        </div>
        <div v-else class="content">No wins so far...</div>
        <hr />
        <h3>Match History</h3>
        <div class="content" v-if="matchHistory && matchHistory.length > 0">
            <div
                class="match"
                v-for="match in matchHistory"
                :key="match.matchId"
            >
                <MatchResult :match="match" />
            </div>
        </div>
        <div v-else class="content">No matches played...</div>
    </div>
</template>

<script>
import User from "@/components/Entity/User.vue";
import RatingPlot from "@/components/Entity/RatingPlot.vue";
import MatchResult from "@/components/Match/MatchResult.vue";
import Spinner from "@/components/Elements/Spinner.vue";
import axios from "axios";

export default {
    components: { User, Spinner, MatchResult, RatingPlot },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
            user: null,
            matchHistory: null,
            bestWins: null,
        };
    },
    async created() {
        const params = { id: this.id };
        const userResponse = await axios.get("user", { params });
        this.user = userResponse.data;
        if (this.user) {
            const matchesResponse = await axios.get("user/matches", { params });
            this.matchHistory = matchesResponse.data;

            const bestWinsResponse = await axios.get("user/bestwins", {
                params,
            });
            this.bestWins = bestWinsResponse.data;
        }
        this.loading = false;
    },
};
</script>

<style>
</style>

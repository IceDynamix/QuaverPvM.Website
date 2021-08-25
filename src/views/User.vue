<template>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else-if="user === null">User not found</div>
    <div v-else>
        <div class="content">
            <User :user="user" class="user" />
        </div>
        <hr />
        <h3>Match History</h3>
        <div class="content" v-if="matchHistory.length > 0">
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
import MatchResult from "@/components/Match/MatchResult.vue";
import Spinner from "@/components/Elements/Spinner.vue";
import axios from "axios";

export default {
    components: { User, Spinner, MatchResult },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
            user: null,
            matchHistory: null,
        };
    },
    async created() {
        const params = { id: this.id };
        const userResponse = await axios.get("user", { params });
        this.user = userResponse.data;
        const matchesResponse = await axios.get("user/matches", { params });
        this.matchHistory = matchesResponse.data;
        this.loading = false;
    },
};
</script>

<style>
</style>

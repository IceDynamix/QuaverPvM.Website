<template>
    <div class="match">
        <User :user="user" v-if="user" />
        <div v-if="matchLoading"><Spinner /></div>
        <div v-else>
            <div v-if="!match" class="match-button">
                <IconButton
                    buttonText="MATCH"
                    icon="search"
                    :click="onMatchButton"
                />
            </div>
            <div v-else>
                <div id="vs">vs.</div>
                <Map :map="match.map" v-if="match.map" />
                <MatchSubmission />
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from "@/components/Elements/Spinner.vue";
import IconButton from "@/components/Elements/IconButton.vue";
import User from "@/components/Entity/User.vue";
import Map from "@/components/Entity/Map.vue";
import MatchSubmission from "@/components/Match/MatchSubmission.vue";

export default {
    components: {
        Spinner,
        User,
        Map,
        IconButton,
        MatchSubmission,
    },
    created() {
        this.$store.dispatch("fetchOngoingMatch");
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        matchLoading() {
            return this.$store.state.matchLoading;
        },
        match() {
            return this.$store.state.match;
        },
    },
    methods: {
        onMatchButton() {
            this.$store.dispatch("createNewMatch");
        },
    },
};
</script>

<style scoped>
#vs {
    text-align: center;
    font-size: 24px;
    margin: -15px 0;
}
.match-button {
    text-align: center;
}
</style>

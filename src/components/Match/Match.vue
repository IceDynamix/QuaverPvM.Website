<template>
    <div class="match">
        <transition name="transition" mode="out-in">
            <div class="submission" v-if="matchLoading === false">
                <transition name="transition" mode="out-in">
                    <div v-if="match" key="playing">
                        <div class="vs">VS</div>
                        <Entity :entityId="match.map._id" />
                        <transition name="transition" mode="out-in">
                            <MatchSubmission :endsAt="match.endsAt"/>
                        </transition>
                    </div>
                    <div v-else key="idling">
                        <Button :click="onMatchButton" button-text="MATCH" icon="search"/>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
// import axios from "axios";
import Entity from "../Entity/Entity.vue";
import Button from "../Elements/Button";
import MatchSubmission from "./MatchSubmission";

export default {
    components: {
        Entity,
        MatchSubmission,
        Button,
    },
    created() {
        this.$store.dispatch("fetchMatch");
    },
    methods: {
        onMatchButton: function () {
            this.$store.dispatch("requestMatch");
        },
    },
    computed: {
        match() {
            return this.$store.state.match.match;
        },
        matchLoading() {
            return this.$store.state.match.loading;
        },
    },
};
</script>

<style scoped>
.submission {
    text-align: center;
}
</style>

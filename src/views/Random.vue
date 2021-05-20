<template>
    <div class="random">
        <div class="content-row">
            <div class="content-row input">
                <input v-model.number="rating" placeholder="Rating" id="rating">
                <p>±</p>
                <input v-model.number.lazy="rd" placeholder="RD" id="rd">
            </div>
            <div class="content-row extra">
                <EntityLetterRank class="rank" :letter-rank="letterRank" v-if="generalDp != null"/>
                <Button class="roll" button-text="ROLL" icon="casino" :click="onRollClick"/>
            </div>
        </div>
        <transition name="transition" mode="out-in">
            <div v-if="loading === true" key="loading">
                <LoadingSpinner/>
            </div>
            <div v-else key="content">
                <Entity v-if="selected != null" :entity-id="selected"/>
            </div>
        </transition>
    </div>
</template>

<script>
import EntityLetterRank from "../components/Entity/EntityLetterRank";
import Button from "../components/Elements/ElementButton";
import LoadingSpinner from "../components/Elements/ElementLoadingSpinner";
import Entity from "../components/Entity/Entity";

export default {
    name: "Random",
    components: { EntityLetterRank, Button, LoadingSpinner, Entity },
    data: function () {
        return {
            rating: null,
            rd: null,
            rolledEntity: String,
        }
    },
    created() {
        this.$store.dispatch("fetchGeneralDatapoints");
    },
    computed: {
        loading() {
            return this.$store.state.datapoints.randomLoading
        },
        selected() {
            return this.$store.state.datapoints.selectedRandom
        },
        generalDp() {
            return this.$store.getters.currentGeneralDatapoint;
        },
        rankThresholds() {
            return this.generalDp["rankThresholds"]
        },
        letterRank() {
            for (const rank of this.rankThresholds) if (this.rating > rank.rating.user) return rank.rank;
            return "?"
        },
    },
    methods: {
        onRollClick() {
            if (this.loading) {
                this.$toasted.show("Already rolling!");
                return;
            }
            this.$store.dispatch("fetchRandom", { min: this.rating - this.rd, max: this.rating + this.rd })
        },
    },

}
</script>

<style scoped>
.content-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
}

.content-row.extra {
    justify-content: space-around;
}

.input {
    flex: 2;
}

.extra {
    flex: 1
}

input {
    padding: 0 10px;
    width: 10%;
}

p {
    flex-basis: 15px;
    padding: 0;
}

#rating {
    flex: 2;
    text-align: right;
}

#rd {
    flex: 1;
    text-align: left;
}
</style>
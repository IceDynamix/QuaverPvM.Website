<template>
    <div class="home">
        <p>{{ userId }}</p>
        <p>Logged In: {{ userId != null }}</p>
        <p>Entities: {{ entities }}</p>
        <p>Datapoints: {{ datapoints }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Home",
    created: function () {
        this.$store.dispatch(
            "datapoints/fetchEntityFull",
            "6084b989f6ff2970083cc564"
        );
        this.$store.dispatch("datapoints/fetchGeneralStats");
    },
    computed: mapState({
        userId: (state) => state.user.entityId,
        loggedIn: (state) => state.user.entityId != null,
        entities: (state) => state.entities,
        datapoints: (state) => state.datapoints,
    }),
};
</script>

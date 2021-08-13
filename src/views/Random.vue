<template>
    <div class="random">
        <div class="content-row">
            <div class="content-row input">
                <input
                    v-model.number.lazy="rating"
                    placeholder="Rating"
                    id="rating"
                />
                <p>±</p>
                <input v-model.number.lazy="rd" placeholder="RD" id="rd" />
            </div>
            <div class="content-row extra">
                <IconButton
                    class="roll"
                    button-text="ROLL"
                    icon="casino"
                    :click="onRollClick"
                />
            </div>
        </div>
        <div v-if="loading === true" key="loading">
            <Spinner />
        </div>
        <div v-else key="content" class="map">
            <Map v-if="map !== null" :map="map" />
        </div>
    </div>
</template>

<script>
import IconButton from "../components/Elements/IconButton";
import Spinner from "../components/Elements/Spinner";
import Map from "../components/Entity/Map";
import axios from "axios";

export default {
    name: "Random",
    components: { IconButton, Spinner, Map },
    data: function () {
        return {
            rating: null,
            rd: null,
            map: {},
            loading: false,
        };
    },
    methods: {
        async onRollClick() {
            if (this.loading) {
                this.$toasted.show("Already rolling!");
                return;
            }

            this.loading = true;
            const { data: map } = await axios.get("map/random", {
                params: {
                    min: this.rating - this.rd,
                    max: this.rating + this.rd,
                },
            });

            if (!map) this.$toasted.show("Already rolling!");
            else this.map = map;

            this.loading = false;
        },
    },
};
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
    flex: 1;
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

.map {
    margin: 25px;
}
</style>

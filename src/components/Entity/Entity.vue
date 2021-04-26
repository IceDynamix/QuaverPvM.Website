<template>
    <div class="entity">
        <div
            class="entity-content"
            v-if="entityData != null"
            key="entity-content"
        >
            <div class="left-side">
                <EntityQuaverData
                    :quaverId="entityData.quaverId"
                    :entityType="entityData.entityType"
                />
            </div>
            <div class="right-side">
                <EntityStats :entityId="entityId" />
            </div>
        </div>
    </div>
</template>

<script>
import EntityStats from "./EntityStats.vue";
import EntityQuaverData from "./EntityQuaverData.vue";

export default {
    components: {
        EntityStats,
        EntityQuaverData,
    },
    props: {
        entityId: String,
    },
    created() {
        this.$store.dispatch("entities/fetch", { id: this.entityId });
    },
    computed: {
        entityData() {
            return this.$store.state.entities.entities[this.entityId];
        },
    },
};
</script>

<style scoped>
.entity {
    height: 60px;
    margin: 10px;
}
.entity-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

<template>
    <div class="entity">
        <div
            class="entity-content"
            v-if="entityData != null"
            key="entity-content"
        >
            <div class="left-side">
                <EntityData :entityId="entityId" />
            </div>
            <div class="right-side">
                <EntityStats :entityId="entityId" />
            </div>
        </div>
    </div>
</template>

<script>
import EntityStats from "./EntityStats.vue";
import EntityData from "./EntityData.vue";

export default {
    components: {
        EntityStats,
        EntityData,
    },
    props: {
        entityId: String,
    },
    created() {
        if (!this.entityData)
            this.$store.dispatch("fetchEntities", { id: this.entityId });
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
    margin: 10px;
}
.entity-content {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>

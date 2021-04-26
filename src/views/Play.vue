<template>
    <div class="play">
        <div v-if="userId != null">
            <Entity :entityId="userId" />
        </div>
        <div v-else>Please log in!</div>
    </div>
</template>

<script>
import Entity from "@/components/Entity/Entity.vue";
export default {
    components: {
        Entity,
    },
    computed: {
        userId() {
            return this.$store.state.user.entityId;
        },
    },
};
</script>

<style scoped>
</style>

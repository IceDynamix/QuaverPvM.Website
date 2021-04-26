<template>
    <div class="home">
        <p>{{ userId }}</p>
        <p>Logged In: {{ userId != null }}</p>
        <p>User: {{ $store.state.entities.entities[userId] }}</p>
    </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
        userId() {
            return this.$store.state.user.entityId;
        },
    },
};
</script>

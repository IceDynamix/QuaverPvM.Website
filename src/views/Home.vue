<template>
    <div class="home">
        <p>{{ $store.state.user.entityId }}</p>
        <p>Logged In: {{ $store.state.user.entityId != null }}</p>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

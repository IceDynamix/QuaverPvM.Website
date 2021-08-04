<template>
    <Entity
        :img="user.avatarUrl"
        :url="`https://quavergame.com/user/${this.user.userId}`"
        :title="user.username"
        :rating="user.rating"
        :rd="user.rd"
        :wins="user.wins"
        :matchesPlayed="user.matchesPlayed"
        :letterRank="user.letterRank"
    />
</template>

<script>
import Entity from "@/components/Entity/Entity.vue";

export default {
    components: { Entity },
    props: { user: Object },
};
</script>

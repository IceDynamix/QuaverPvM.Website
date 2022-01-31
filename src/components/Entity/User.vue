<template>
    <Entity
        :img="user.avatarUrl"
        :url="`/user/${this.user.userId}`"
        :imgUrl="`https://quavergame.com/user/${this.user.userId}`"
        :imgTooltip="`Click to view on the Quaver website!`"
        :title="user.username"
        :rating="user.rating"
        :rd="user.rd"
        :wins="user.wins"
        :matchesPlayed="user.matchesPlayed"
        :rank="user.rank"
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

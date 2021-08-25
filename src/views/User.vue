<template>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else-if="user === null">User not found</div>
    <div v-else>
        <User :user="user" class="user" />
    </div>
</template>

<script>
import User from "@/components/Entity/User.vue";
import Spinner from "@/components/Elements/Spinner.vue";
import axios from "axios";

export default {
    components: { User, Spinner },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
            user: null,
        };
    },
    async created() {
        const { data } = await axios.get("user", {
            params: { id: this.id },
        });
        this.user = data;
        this.loading = false;
    },
};
</script>

<style>
</style>

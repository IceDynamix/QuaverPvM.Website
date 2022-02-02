<template>
    <div class="leaderboard">
        <div class="list">
            <div v-if="loading">
                <Spinner />
            </div>
            <div v-else-if="!loading && users.length === 0">
                No users ranked so far...
            </div>
            <div
                class="user-container"
                v-for="(user, index) in users"
                :key="user.userId"
                v-else
            >
                <div class="rank light-font">#{{ index + 1 + page * 50 }}</div>
                <User :user="user" class="user" />
            </div>
            <div style="text-align: center">
                <p>
                    <a :href="prevPage" v-if="page > 0"><b>←</b></a>
                    {{ page + 1 }}
                    <a :href="nextPage"><b>→</b></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import User from "@/components/Entity/User.vue";
import axios from "axios";
import Spinner from "@/components/Elements/Spinner.vue";

export default {
    components: { User, Spinner },
    data() {
        return {
            users: [],
            loading: false,
            page: 0,
            full: false,
        };
    },
    async created() {
        if (this.$route.query.page)
            this.page = parseInt(this.$route.query.page);
        if (this.$route.query.full) this.full = true;
        const { data } = await axios.get("leaderboard", {
            params: { page: this.page, full: this.full },
        });
        this.users = data;
    },
    computed: {
        prevPage() {
            let index = this.page - 1;
            return `/leaderboards?page=${index}`;
        },
        nextPage() {
            let index = this.page + 1;
            return `/leaderboards?page=${index}`;
        },
    },
};
</script>

<style>
.user-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.list {
    margin: 25px;
}
.rank {
    margin: 5px;
}
.user {
    flex: auto;
}
</style>

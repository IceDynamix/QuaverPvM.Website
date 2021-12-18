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
                <div class="rank light-font">#{{ index + 1 }}</div>
                <User :user="user" class="user" />
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
    created() {
        this.loadMore();
        if (this.$route.query.full) this.full = true;
    },
    methods: {
        loadMore() {
            this.loading = true;

            setTimeout(async () => {
                const { data } = await axios.get("leaderboard", {
                    params: { page: this.page, full: this.full },
                });
                console.log(data);
                this.users.push(...data);
                this.page++;
                this.loading = false;
            }, 1000);
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

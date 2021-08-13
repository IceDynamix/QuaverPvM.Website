<template>
    <div class="leaderboard">
        <div class="list">
            <div
                class="user-container"
                v-for="(user, index) in users"
                :key="user.userId"
            >
                <div class="rank light-font">#{{ index + 1 }}</div>
                <User :user="user" class="user" />
            </div>
            <div v-if="users.length === 0">No users ranked so far...</div>
        </div>
    </div>
</template>

<script>
import User from "@/components/Entity/User.vue";
import axios from "axios";

export default {
    components: { User },
    data() {
        return {
            users: [],
            loading: false,
            page: 0,
        };
    },
    created() {
        this.loadMore();
    },
    methods: {
        loadMore() {
            this.loading = true;

            setTimeout(async () => {
                const { data } = await axios.get("leaderboard", {
                    params: { page: this.page },
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
    flex: content;
    margin: 5px;
}
.user {
    flex: auto;
}
</style>

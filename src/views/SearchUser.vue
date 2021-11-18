<template>
    <div class="search">
        <input v-model="search" placeholder="User Search Term" id="search" />
        <div v-if="loading === true" key="loading">
            <Spinner />
        </div>
        <div v-else-if="users.length === 0" key="content" class="map">
            <div v-if="search !== ''">No users found</div>
        </div>
        <div v-else key="content" class="map">
            <User v-for="user in users" :key="user.userId" :user="user" />
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import User from "@/components/Entity/User.vue";
import Spinner from "@/components/Elements/Spinner.vue";

export default {
    components: { User, Spinner },
    data() {
        return {
            search: "",
            users: [],
            loading: false,
        };
    },
    watch: {
        search: function (newSearch) {
            this.loading = true;
            this.debouncedSearch(newSearch);
        },
    },
    created() {
        this.debouncedSearch = _.debounce(this.searchUsers, 500);
    },
    methods: {
        async searchUsers(search) {
            const params = { search };
            const mapResponse = await axios.get("user/search", { params });
            this.users = mapResponse.data;
            this.loading = false;
        },
    },
};
</script>

<style>
#search {
    width: 100%;
    margin: 10px 0;
}
</style>

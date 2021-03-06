<template>
    <div class="home">
        <div class="title">
            <h1>QuaverPvM</h1>
            <p>
                <i id="subtitle">
                    The ultimate 4K Player vs. Map experience based on
                    <a href="https://quavergame.com/">Quaver</a>
                </i>
            </p>
        </div>
        <transition name="transition" mode="out-in">
            <div class="stats" v-if="stats != null">
                <div class="stat">
                    <h4 class="stat-title">Users (ranked)</h4>
                    <p class="stat-value">
                        <Number :value="stats['userCount']" />
                        (<Number :value="stats['rankedUserCount']" />)
                    </p>
                </div>
                <div class="stat">
                    <h4 class="stat-title">Maps (ranked)</h4>
                    <p class="stat-value">
                        <Number :value="stats['mapCount']" />
                        (<Number :value="stats['rankedMapCount']" />)
                    </p>
                </div>
                <div class="stat">
                    <h4 class="stat-title">Matches played</h4>
                    <p class="stat-value">
                        <Number :value="stats['matchCount']" />
                    </p>
                </div>
            </div>
        </transition>
        <div class="features">
            <div class="col feature">
                <h3>Player/Map ELO</h3>
                <p class="feature-text">
                    Imagine chess, where two players play against each other.
                    Each of them has a rating, that goes up or down depending on
                    whether they win or lose.
                </p>
                <p class="feature-text">
                    QuaverPvM uses that concept and applies it to a VSRG
                    environment, but instead of playing against another player,
                    <b>you play against a map</b>.
                </p>
                <p class="feature-text">
                    You have a rating that goes up or down as you win or lose,
                    and the map also has a rating that goes up or down. The win
                    condition in QuaverPvM is reaching 95% (S Rank).
                </p>
            </div>
            <div class="col feature">
                <h3>Skill Range</h3>
                <p class="feature-text">
                    Get map "recommendations" in your skill range. You'll always
                    have something challenging to play.
                </p>
                <p class="feature-text">
                    The rating system will make sure it's mostly accurate. If
                    it's not, then the outcome will make sure that it becomes
                    more accurate over time.
                </p>
                <p class="feature-text">
                    If you're not feeling the thrill of playing the ranked mode,
                    then you can always play the
                    <router-link to="/random">unranked mode</router-link>
                    without worrying about your rating.
                </p>
            </div>
        </div>
        <h2>
            <div v-if="!loggedIn">
                <a :href="loginUrl">LOGIN TO PLAY</a>
            </div>
            <div v-else>
                <router-link to="/play">CLICK TO PLAY</router-link>
            </div>
        </h2>
    </div>
</template>

<script>
import axios from "axios";
import Number from "@/components/Elements/Number.vue";
import config from "../config/config";

export default {
    components: { Number },
    data() {
        return {
            stats: null,
        };
    },
    computed: {
        loginUrl() {
            return config.apiUrl + "/auth/quaver";
        },
        loggedIn() {
            return this.$store.state.user !== null;
        },
    },
    async created() {
        const { data } = await axios.get("stats");
        this.stats = data;
    },
};
</script>

<style scoped>
.home {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.title {
    width: 100%;
}
#subtitle {
    color: var(--foreground-sub-color);
}
.title > * {
    text-align: center;
}
.stats {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
.stat {
    flex: 200px;
    text-align: center;
}
.stat-value {
    margin-top: -10px;
}
.features {
    display: flex;
    align-items: top;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
.feature {
    flex: 300px;
    margin: 25px;
}
.feature-icon {
    height: 35px;
    line-height: 35px;
}
</style>

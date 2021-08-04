<template>
    <div class="home">
        <div class="title">
            <h1>QuaverPvM</h1>
            <p>
                <i id="subtitle">
                    The ultimate Player vs. Map experience based on
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
                <h3>Rating System</h3>
                <p class="feature-text">
                    Imagine chess, where two players play against each other.
                    Each of them has a rating, that goes up or down depending on
                    whether they win or lose. QuaverPvM uses that concept and
                    applies it to a VSRG environment.
                </p>
                <p class="feature-text">
                    You have a rating that goes up or down as you win or lose,
                    and the map also has a rating that goes up or down. The win
                    condition in QuaverPvM is reaching 95%.
                </p>
            </div>
            <div class="col feature">
                <h3>Skill Range</h3>
                <p class="feature-text">
                    Get map "recommendations" in your skill range. You'll always
                    have something challenging to play. The rating system will
                    make sure it's mostly accurate. If it's not, then the
                    outcome will make sure that it becomes more accurate over
                    time.
                </p>
                <p class="feature-text">
                    If you're not feeling the thrill of playing the ranked mode,
                    then you can always play the unranked mode without worrying
                    about your rating (coming soon).
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Number from "@/components/Elements/Number.vue";

export default {
    components: { Number },
    data() {
        return {
            stats: null,
        };
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

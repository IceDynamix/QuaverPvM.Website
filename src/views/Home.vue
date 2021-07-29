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
        <div class="features">
            <div class="features cols">
                <div class="col">
                    <h3>Rating System</h3>
                    <p class="feature-text">
                        Imagine chess, where two players play against each
                        other. Each of them has an rating, that goes up or down
                        depending on whether they win or lose. QuaverPvM uses
                        that concept and applies it to a VSRG environment. You
                        have a rating that goes up or down as you win or lose,
                        and the map also has a rating that goes up or down. The
                        win condition in QuaverPvM is reaching 95%.
                    </p>
                </div>
                <div class="col">
                    <h3>Skill Range</h3>
                    <p class="feature-text">
                        Get map "recommendations" in your skill range. You'll
                        always have something challenging to play. The rating
                        system will make sure it's mostly accurate, and if it's
                        not, then the outcome will make sure that it becomes
                        more accurate over time. If you're not feeling the
                        thrill of playing the ranked mode, then you can always
                        play the unranked mode without worrying about your
                        rating.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
.features {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
.col {
    flex: 300px;
    margin: 25px;
}
.feature-text {
    text-align: justify;
}
.feature-icon {
    height: 35px;
    line-height: 35px;
}
</style>

<template>
    <div class="home">
        <div class="title">
            <h1>QuaverPvM</h1>
            <p class="sub"><i>The ultimate Player vs. Map experience</i></p>
        </div>

        <div class="play">
            <router-link to="/play"><h2>PLAY</h2></router-link>
        </div>

        <div class="cols">
            <div class="col">
                <span class="material-icons">emoji_events</span>
                <h3>Rating System</h3>
                <p>
                    Glicko-2 rating system applied to a PvE environment. Your
                    rating and the maps rating changes after each match. Takes
                    account rating inaccuracy over time into account. Destined
                    to become the best skill and difficulty measurement system
                    over time.
                </p>
            </div>
            <div class="col">
                <span class="material-icons">recommend</span>
                <h3>Recommendations</h3>
                <p>
                    Map recommendations in your skill range. You'll always have
                    something challenging to play. The rating system will make
                    sure it's mostly accurate, and if it's not, then the outcome
                    will make sure that it becomes more accurate over time.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sub {
    text-align: center;
}
.home {
    text-align: center;
}
.cols {
    display: flex;
    flex-direction: row;
    margin: 25px 0;
}
.col {
    flex: 1;
    margin: 10px;
}
p {
    font-family: "Lexend";
    text-align: justify;
}
.play {
    margin: 25px;
}
.col > h3 {
    margin: 5px;
}
</style>

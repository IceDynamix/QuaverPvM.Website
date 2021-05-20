<template>
    <div class="faq">
        <div class="entry">
            <h1>How do I play?</h1>
            <p>
                QuaverPvM is based on <a href="https://quavergame.com/">Quaver</a> and all of the gameplay
                will happen in the Quaver client. Make sure you've downloaded and installed Quaver over Steam and are
                familiar with how the game works. QuaverPvM's role is matching you against maps and computing the
                ratings based on the match outcome.
            </p>
            <p>
                After getting matched against a map around your current rating, you will have 10 minutes to submit an S
                Rank score or higher (&ge; 95.00% accuracy) in Quaver on that map. This also means that you're allowed
                to retry as long as you have time left to submit the score. If you're unable to get the S rank, then
                you're free to resign. Please make sure that you're playing the correct rate.
            </p>
            <p>
                Mirror mod is allowed. Rates below the provided map rate are not allowed (higher rates are allowed).
                NF/NLN/FLN/INV mods and pausing are not allowed, as those will make your play not submit to the Quaver
                server. NSV is also not allowed, but not necessary because of the maps chosen to get added to QuaverPvM.
            </p>
        </div>
        <div class="entry">
            <h1>
                Where can I submit feedback or find a community to talk about
                QuaverPvM?
            </h1>
            <p>
                You can refer to the Discord server at the bottom of the page.
            </p>
        </div>
        <div class="entry">
            <h1>
                Will I gain more rating if I win with a large accuracy lead /
                higher rate?
            </h1>
            <p>
                No, the Glicko-2 system considers each win/loss as the same, no
                matter the accuracy or rate.
            </p>
        </div>
        <div class="entry">
            <h1>
                Why do I have to play 10 matches before I can see any stats?
            </h1>
            <p>
                The rating is the most inaccurate at the beginning. This can lead
                to false expectations, so you need to play a few matches until
                the system is confident that your rating is roughly accurate.
            </p>
        </div>
        <div class="entry">
            <h1>
                I played 10 matches and see my Glicko rating, but I don't have a
                letter rank yet?
            </h1>
            <p>
                While you need to play 10 matches to see your Glicko rating,
                being able to see it does not mean that you are ranked. You will
                be ranked as soon as you get a letter rank, which requires
                having 100 RD or less, which takes around 12-16 matches.
                Once you have it, you will be considered in the leaderboards.
                Only one way to get there: play more matches!
            </p>
        </div>
        <div class="entry">
            <h1>What does my letter rank mean?</h1>
            <p>
                Your letter rank is determined by the percentile you're
                currently in. This means that for example at rank #15 of 200
                players, you would be in the 7.5th percentile, which is
                considered SS rank. The thresholds are the same as in
                <a href="https://tetr.io/">Tetr.io</a> and as following:
            </p>
            <div class="ranks">
                <div class="thresholds">
                    <span>X</span><span>U</span><span>SS</span><span>S+</span
                ><span>S</span><span>S-</span><span>A+</span><span>A</span
                ><span>A-</span><span>B+</span><span>B</span><span>B-</span
                ><span>C+</span><span>C</span><span>C-</span><span>D+</span>
                    <span>D</span>
                </div>
                <div class="thresholds">
                    <span>1%</span><span>5%</span><span>11%</span
                ><span>17%</span><span>23%</span><span>30%</span
                ><span>38%</span><span>46%</span><span>54%</span
                ><span>62%</span><span>70%</span><span>78%</span
                ><span>84%</span><span>90%</span><span>95%</span
                ><span>97.5%</span>
                    <span>100%</span>
                </div>
            </div>
        </div>
        <div class="entry">
            <h1>Are the maps added to the database randomly?</h1>
            <p>
                Yes and no. A specific set of filters have been implemented: 4K
                only, map must be ranked, length between 2-5 minutes, &lt; 60%
                LN and no SVs in the map file. The system chooses maps randomly
                from this filtered pool of maps. The total pool covers around 2200
                maps, from a subset is in the active matchmaking pool.
                The initial rating of a map scales off its Quaver difficulty and
                its initial RD is reduced to 200 as opposed to 350.
            </p>
        </div>
        <div class="entry">
            <h1>I played against a map that was over/underrated in rating!</h1>
            <p>
                This happens. Remember, a map's initial rating scales off Quaver
                difficulty rating, so it's as accurate as that when it hasn't
                played against anyone. It will get more accurate as more players
                play against it, so please play more!
            </p>
        </div>
        <div class="entry">
            <h1>How does the rating work? / What is Glicko/RD?</h1>
            <p>
                QuaverPvM uses the the Glicko-2 system, which is most commonly used for chess. It's a rating system that
                has a regular skill rating, but also considers how inaccurate the rating is by computing a value called
                rating deviation (RD). The more matches you play, the smaller RD becomes, which means that the system
                thinks your rating is more accurate. RD increases over time.
            </p>
        </div>


    </div>
</template>


<style scoped>
.entry {
    margin-top: 25px;
}
h1 {
    text-align: left;
    font-size: 18px;
}
p {
    text-align: justify;
    margin: 10px 25px;
    font-family: Lexend, sans-serif;
}
.ranks {
    margin: 10px 25px;
}
.thresholds {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: inherit;
}
.thresholds > span {
    flex: 1;
    font-size: 12px;
}
</style>

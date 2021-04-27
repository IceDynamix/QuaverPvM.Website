<template>
    <div class="faq">
        <div class="entry">
            <h1>How do I play?</h1>
            <p>
                After getting matched against a map around your current rating,
                you will then have 10 minutes to submit an S Rank score or
                higher (&ge; 95.00% accuracy) in Quaver on that map. This also
                means that you're allowed to retry as long as you have time left
                to submit the score. If you're unable to get the S rank, then
                you can resign.
            </p>
            <p>
                Mirror mod is allowed. Rates below 1.0x are not allowed.
                NF/NLN/FLN/INV mods and pausing are not allowed, as those will
                make your play not submit to the server. NSV is also not
                allowed, but not necessary because of the maps chosen to get
                added to QuaverPvM.
            </p>
        </div>
        <div class="entry">
            <h1>Are the maps added to the database randomly?</h1>
            <p>
                No. A specific set of filters have been implemented: 4K only,
                map must be ranked, length between 2-5 minutes, &lt; 60% LN and
                no SVs in the map file. The initial rating of a map also scales
                off its Quaver difficulty and its initial RD is reduced to 200
                as opposed to 350. I used the ratings computed
                <a
                    href="https://docs.google.com/spreadsheets/d/1lfBCM6EAdJ1n-xf8HqR7PEEJDFoqApI8uy5s8ESf45g/edit#gid=247636023"
                >
                    in this spreadsheet </a
                >, which considers players with more than 50 playcount and more
                than 50 overall rating in percentile ranking. I made it before
                QuaverPvM, so they will not reflect the current thresholds.
                Please refer to the upcoming stats page for current thresholds.
            </p>
        </div>
        <div class="entry">
            <h1>I played against a map that was over/underrated in QXE!</h1>
            <p>
                This happens. Remember, a maps initial rating scales off Quaver
                difficulty rating, so its as accurate as that when it hasn't
                played against anyone. It will get more accurate as more players
                play against it, so please help make the rating more accurate!
            </p>
        </div>
        <div class="entry">
            <h1>How does the rating work? / What is QXE?</h1>
            <p>
                QuaverPvM roughly adapts the system that
                <a href="https://tetr.io/">Tetr.io</a> currently uses, which is
                Glicko+GLIXARE and percentile ranks.
            </p>
            <p>
                QLIXARE (QXE) is a term I made up to describe the rating used on
                this QuaverPvM. It scales off the
                <a
                    href="https://www.smogon.com/forums/threads/gxe-glixare-a-much-better-way-of-estimating-a-players-overall-rating-than-shoddys-cre.51169/"
                    >GLIXARE</a
                >
                system, based on the change of beating a random unranked player,
                which is computed from a Glicko Rating and Rating Deviation.
                GLIXARE has been scaled to 0-25000 for QXE, with 12500 being the
                average. This is the same scaling
                <a href="https://tetr.io/">Tetr.io</a> uses for its Tetra
                Rating.
            </p>
        </div>
        <div class="entry">
            <h1>What is Glicko / RD?</h1>
            <p>
                The Glicko-2 system is a rating system that has a regular skill
                rating, but also considers how inaccurate the rating is by
                computing a value called rating deviation (RD). The more matches
                you play, the smaller RD becomes, which means that the system
                thinks your rating is more accurate. RD increases over time.
            </p>
        </div>
        <div class="entry">
            <h1>
                Why do I have to play 10 matches before I can see any stats?
            </h1>
            <p>
                The RD is the largest for an unranked player, which means that
                the rating will fluctuate a lot at the beginning. This can lead
                to false expectations, so you need to play a few matches until
                the system can be sure that your rating is roughly accurate.
            </p>
        </div>
        <div class="entry">
            <h1>
                I played 10 matches and see my QXE, but I don't have a letter
                rank yet?
            </h1>
            <p>
                While you need to play 10 matches to see your QXE and Glicko
                rating, once you see them does not mean that you are ranked. You
                will be ranked as soon as you get a letter rank, which requires
                having 100 RD or less. Once you have it, you will be considered
                in the leaderboards. Only one way to get there: play more
                matches.
            </p>
        </div>
        <div class="entry">
            <h1>What does my letter rank mean?</h1>
            <p>
                Your letter rank is determined by the current percentile you're
                currently in (based on GLIXARE). This means that for example at
                rank #150 of 2000 players, you would be in the 7.5th percentile,
                which is considered SS rank. The thresholds are the same as in
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
            <p>
                You will be able to find more statistics in that regard in the
                upcoming stats page.
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
    margin: 5px 25px;
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

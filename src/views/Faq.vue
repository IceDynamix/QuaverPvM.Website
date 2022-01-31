<template>
    <div class="faq">
        <div class="entry">
            <h1>How do I play?</h1>
            <p>
                QuaverPvM is based on
                <a href="https://quavergame.com/">Quaver</a> and all of the
                gameplay will happen in the Quaver client. Make sure you've
                downloaded and installed Quaver over Steam and are familiar with
                how the game works. QuaverPvM's role is matching you against
                maps and computing the ratings based on the match outcome.
            </p>
            <p>
                After getting matched against a map around your current rating,
                you will have 10 minutes to submit an S Rank score or higher
                (&ge; 95.00% accuracy) in Quaver on that map. This also means
                that you're allowed to retry as long as you have time left to
                submit the score. If you're unable to get the S rank, then
                you're free to resign. Please make sure that you're playing the
                correct rate.
            </p>
            <p>
                Mirror mod is allowed. Rates below the provided map rate are not
                allowed (higher rates are allowed). NF/NLN/FLN/INV mods and
                pausing are not allowed, as those will make your play not submit
                to the Quaver server. NSV is also not allowed, but not necessary
                because of the maps chosen to get added to QuaverPvM.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>
                Where can I submit feedback or find a community to talk about
                QuaverPvM?
            </h1>
            <p>
                You can refer to the Discord server linked in the navigation bar
                of the page.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>
                Will I gain more rating if I win with a large accuracy lead or a
                higher rate?
            </h1>
            <p>
                No, the Glicko-2 system considers each win/loss as the same, no
                matter the accuracy or rate.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>How does the rating work? / What is Glicko or RD?</h1>
            <p>
                QuaverPvM uses the the Glicko-2 system, which is most commonly
                used for chess. It's a rating system that has a regular skill
                rating, but also considers how inaccurate the rating is by
                computing a value called rating deviation (RD). The more matches
                you play, the smaller RD becomes, which means that the system
                thinks your rating is more accurate. RD increases over time.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>Why am I not on the leaderboard?</h1>
            <p>
                You need to play until you have less than 100 RD for your rating
                to be considered accurate enough to have you ranked. You will
                appear on the leaderboards once you are ranked.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>I was ranked a while ago, so why am I unranked again?</h1>
            <p>
                The rating on QuaverPvM becomes more inaccurate over time,
                because people can improve (or rust) outside of QuaverPvM.
                Rating deviation represents rating accuracy, so it decays over
                time to mimic that behavior. Remember that you're ranked while
                your RD is below 100, so if your RD decays outside of 100 then
                you will be considered unranked and removed from the
                leaderboards.
            </p>
            <p>
                The rate is roughly +0.6-0.8 RD per day, a player with 70 RD
                (which means that the player has played a pretty good number of
                matches recently) would become unranked in about 42 days of not
                touching QuaverPvM.
            </p>
        </div>
        <hr />
        <div class="entry">
            <h1>Are the maps added to the database by hand?</h1>
            <p>
                No, all maps that meet following conditions are added to the
                database.
            </p>
            <ul>
                <li>4K only (explained in the question below)</li>
                <li>Map must be ranked</li>
                <li>Map is between 2-5 minutes on 1.0x</li>
                <li>Map has &lt; 60% LN</li>
                <li>
                    Map has no SVs in the map file (if the NSV mod becomes
                    submittable then this will not apply)
                </li>
            </ul>
        </div>
        <hr />
        <div class="entry">
            <h1>Are you going to add QuaverPvM for 7k?</h1>
            <p>
                No. Don't get me wrong, I'm a 7k main myself, but there are
                specific reasons why adding the 7k gamemode will not work out
                and is generally not worth it.
            </p>
            <ol>
                <li>
                    <p>Not enough players to play matches</p>
                    <p>
                        The system needs a lot of matches and thus a lot of
                        players to arrive at accurate map ratings. 4k barely has
                        30 ranked players as of November 2021, while my goal is
                        to have 100 until I can consider the ratings accurate.
                        Think about how many players 7k will have.
                    </p>
                </li>
                <li>
                    <p>
                        Inaccurate initial ratings from the Quaver difficulty
                        calculator
                    </p>
                    <p>
                        In order to get to accurate ratings the fastest, you
                        need good estimations for the initial rating. It reduces
                        the amount of matches a map needs to get to its true
                        rating. Additionally, if a map's initial rating is too
                        high, then it will never be played and thus also never
                        arrive at its true rating. The difficulty calculator is
                        very inaccurate for 7k when compared to 4k, so relying
                        on those values means its going to take ages until the
                        map ratings are accurate.
                    </p>
                </li>
                <li>
                    <p>
                        7k pattern complexity messes up the 0.8x-1.2x rate
                        system
                    </p>
                    <p>
                        Maps have a specific level of
                        <i>complexity</i> that the player needs to learn to play
                        first. This can refer to patterns like LN releases,
                        inverse, or even specific rice patterns such as
                        brackets. Playing a map outside your own level of
                        complexity means you won't be able to play it,
                        regardless of whether you play on downrates or not. Once
                        you attain that level of complexity, you will be able to
                        play it on any rate as long your raw speed allows it.
                    </p>
                    <p>
                        This means that the rate system becomes massively
                        inaccurate for maps based on complexity and probably
                        needs to be thrown out the window, so maps are only
                        playable on 1.0x rate. This restricts the amount of
                        available maps.
                    </p>
                    <p>
                        This problem does not appear in 4k, as you reach the
                        required <i>complexity</i> to play any level of
                        complexity relatively quickly. The highest level
                        complexity I would consider to be relevant in 4k is
                        inverse, very dense jacks and very dense
                        jump/handstream, all of which are unplayable on any rate
                        at first until practice the patterns individually which
                        happens relatively early when compared to the highest
                        level of complexity in 7k. Most of the mid to high level
                        focus is about gaining raw speed in order to play those
                        patterns.
                    </p>
                </li>
                <li>
                    <p>Not enough maps to play</p>
                    <p>
                        There is barely 1/3 the number of 7k maps that fit the
                        aforementioned conditions in order to be added to the
                        system. Additionally, there are barely any competitive
                        maps in ranked. This means that there is going to be a
                        very small pool of maps that don't test isolated high
                        level skills, such as pure chordstream or chordjack,
                        which are the most relevant to test overall skill.
                    </p>
                    <p>
                        4k would have 5200+ maps including additional rates,
                        while 7k would only have around 350 maps excluding
                        additional rates (as explained above).
                        <i>This is not enough.</i>
                        Would you be ok with playing the same 10 maps over and
                        over? It wouldn't be a very fun experience.
                    </p>
                </li>
            </ol>
        </div>
        <hr />
        <div class="entry">
            <h1>What does my letter rank mean?</h1>
            <p>
                Your letter rank is determined by the rating you're currently
                at. The letter ranks are the same as in
                <a href="https://tetr.io/">Tetr.io</a> and as following:
            </p>
            <div class="ranks">
                <div class="thresholds">
                    <div class="threshold">
                        <p>X</p>
                        <p>2400</p>
                    </div>
                    <div class="threshold">
                        <p>U</p>
                        <p>2100</p>
                    </div>
                    <div class="threshold">
                        <p>SS</p>
                        <p>1800</p>
                    </div>
                    <div class="threshold">
                        <p>S+</p>
                        <p>1600</p>
                    </div>
                    <div class="threshold">
                        <p>S</p>
                        <p>1400</p>
                    </div>
                    <div class="threshold">
                        <p>S-</p>
                        <p>1200</p>
                    </div>
                    <div class="threshold">
                        <p>A+</p>
                        <p>1100</p>
                    </div>
                    <div class="threshold">
                        <p>A</p>
                        <p>1000</p>
                    </div>
                    <div class="threshold">
                        <p>A-</p>
                        <p>900</p>
                    </div>
                    <div class="threshold">
                        <p>B+</p>
                        <p>800</p>
                    </div>
                    <div class="threshold">
                        <p>B</p>
                        <p>700</p>
                    </div>
                    <div class="threshold">
                        <p>B-</p>
                        <p>650</p>
                    </div>
                    <div class="threshold">
                        <p>C+</p>
                        <p>600</p>
                    </div>
                    <div class="threshold">
                        <p>C</p>
                        <p>575</p>
                    </div>
                    <div class="threshold">
                        <p>C-</p>
                        <p>550</p>
                    </div>
                    <div class="threshold">
                        <p>D+</p>
                        <p>525</p>
                    </div>
                    <div class="threshold">
                        <p>D</p>
                        <p>500</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="entry">
            <h1>I played against a map that was over/underrated in rating!</h1>
            <p>
                This happens. Remember, a map's initial rating scales off Quaver
                difficulty rating, so it's as accurate as that when it hasn't
                played against anyone. It will get more accurate as more players
                play against it, so please play more!
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
    font-size: 24px;
}
.entry > p {
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
    justify-content: space-between;
    width: inherit;
    flex-wrap: wrap;
}
.threshold {
    flex: 35px;
}
.threshold > p {
    font-size: 12px;
    margin: 0;
}
</style>

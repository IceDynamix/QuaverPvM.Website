<template>
    <div class="navbar">
        <div class="dropdown">
            <div>
                Play
                <span class="material-icons icon">expand_more</span>
            </div>
            <div class="dropdown-content">
                <router-link to="/play">
                    <div class="dropdown-item">Ranked</div>
                </router-link>
                <router-link to="/random">
                    <div class="dropdown-item">Unranked</div>
                </router-link>
            </div>
        </div>
        <div><router-link to="/faq">FAQ</router-link></div>
        <div><router-link to="/leaderboards">Leaderboard</router-link></div>
        <div class="dropdown">
            <div>
                Socials
                <span class="material-icons icon">expand_more</span>
            </div>
            <div class="dropdown-content">
                <a
                    href="https://discord.gg/czxEcwBftm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="dropdown-item">Discord</div>
                </a>
                <a
                    href="https://github.com/IceDynamix/QuaverPvM.API"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="dropdown-item">GitHub (API)</div>
                </a>
                <a
                    href="https://github.com/IceDynamix/QuaverPvM.Website"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="dropdown-item">GitHub (Website)</div>
                </a>
                <a
                    href="https://ko-fi.com/icedynamix"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="dropdown-item">Donate</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-item {
    padding: 5px;
}

.dropdown-item,
.dropdown-item > * {
    background-color: var(--foreground-color);
    color: var(--background-color);
}

.icon {
    font-size: 18px;
    flex: auto;
}
</style>

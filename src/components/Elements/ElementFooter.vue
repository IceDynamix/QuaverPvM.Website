<template>
    <div class="footer">
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/leaderboards">Leaderboards</router-link>
        <a
            href="https://discord.gg/czxEcwBftm"
            target="_blank"
            rel="noopener noreferrer"
        >
            Discord
        </a>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
    margin-top: 25px;
}
</style>

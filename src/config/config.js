import dotenv from "dotenv";

dotenv.config();

const config = {
    apiUrl: process.env.VUE_APP_API_URL || "http://localhost:5001",
    quaverBaseUrl: process.env.VUE_APP_QUAVER_BASE_URL || "https://quavergame.com",
    quaverCdnUrl: process.env.VUE_APP_QUAVER_CDN_URL || "https://cdn.quavergame.com"
};

export default config;

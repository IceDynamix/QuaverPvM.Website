import dotenv from "dotenv";

dotenv.config();

const config = {
    apiUrl: process.env.API_URL || "http://localhost:5001",
    quaverBaseUrl: process.env.QUAVER_BASE_URL || "https://quavergame.com",
    quaverCdnUrl: process.env.QUAVER_CDN_URL || "https://cdn.quavergame.com"
};

export default config;

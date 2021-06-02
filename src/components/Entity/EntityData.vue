<template>
    <div class="quaver-data-outer">
        <transition name="transition" mode="out-in">
            <div class="quaver-data" v-if="entityData != null">
                <div class="img">
                    <img :src="img" alt=""/>
                </div>
                <div class="info-text">
                    <p class="row1">
                        <a
                            :href="quaverUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ info1 }}
                        </a>
                    </p>
                    <p class="row2">{{ info2 }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import config from "@/config/config";

export default {
    props: {
        entityId: String,
    },
    computed: {
        entityData() {
            return this.$store.state.entities.entities[this.entityId];
        },
        entityType() {
            return this.entityData.entityType;
        },
        quaverId() {
            return this.entityData.quaverId;
        },
        quaverData() {
            return this.entityData.quaverData;
        },
        quaverUrl() {
            switch (this.entityType) {
                case "user":
                    return `${config.quaverBaseUrl}/user/${this.quaverId}`;
                case "map":
                    return `quaver://map/${this.quaverId}`;
                default:
                    return "";
            }
        },
        img() {
            switch (this.entityType) {
                case "user":
                    return this.quaverData?.info.avatar_url;
                case "map":
                    return `${ config.quaverCdnUrl }/mapsets/${ this.quaverData?.mapset_id }.jpg`;
                default:
                    return "";
            }
        },
        info1() {
            switch (this.entityType) {
                case "user":
                    return this.quaverData?.info.username;
                case "map":
                    return `${ this.quaverData?.artist } - ${ this.quaverData?.title }`;
                default:
                    return "";
            }
        },
        info2() {
            switch (this.entityType) {
                case "user":
                    return `#${ this.quaverData?.keys4.globalRank }`;
                case "map":
                    return `${
                        this.quaverData?.difficulty_name
                    } ${this.entityData.mapRate.toFixed(1)}x`;
                default:
                    return "";
            }
        },
    },
};
</script>

<style scoped>
.quaver-data-outer {
    height: 60px;
}
.quaver-data {
    flex: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: inherit;
}
.info-text {
    flex: auto;
    text-align: left;
    padding: 0 10px;
}
.row2 {
    color: rgb(163, 163, 163);
}
.img {
    height: 60px;
    width: 60px;
}
img {
    height: 100%;
    width: 100%;
    vertical-align: middle;
    background-size: cover;
    object-fit: cover;
    object-position: center;
}
</style>

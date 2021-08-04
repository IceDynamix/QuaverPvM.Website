<template>
    <div class="loading" key="entity-loading">
        <half-circle-spinner
            :animation-duration="1000"
            :size="30"
            color="#ffffff"
        />
    </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";
export default {
    components: { HalfCircleSpinner },
};
</script>

<style scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    width: inherit;
}
</style>

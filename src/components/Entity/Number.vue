<template>
    <animated-number
        :value="value"
        :duration="2000"
        :formatValue="trim"
        :delay="100"
        easing="easeInOutQuint"
    />
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
    props: {
        value: Number,
    },
    components: {
        AnimatedNumber,
    },
    methods: {
        trim: function (n) {
            return n.toFixed(0);
        },
    },
};
</script>

<style>
</style>

<script>
import { Line } from "vue-chartjs";
import { ratingToRank, rankToColor } from "@/ranks.js";

export default {
    extends: Line,
    props: ["datapoints"],
    mounted() {
        const reversed = this.datapoints.reverse();
        const options = {
            legend: { display: false },
            scales: {
                xAxes: [
                    {
                        ticks: { fontFamily: "Lexend Deca" },
                        gridLines: { display: false },
                    },
                ],
                yAxes: [
                    {
                        ticks: { stepSize: 100, fontFamily: "Lexend Deca" },
                        gridLines: { color: "#333333" },
                    },
                ],
            },
        };

        const data = {
            labels: reversed.map((dp) => dp.matchesPlayed),
            datasets: [
                {
                    label: "Rating",
                    data: reversed.map((dp) => dp.rating.toFixed(0)),
                    fill: false,
                    borderColor: "#aaaaaa",
                    borderWidth: 1,
                    pointHitRadius: 50,
                    pointBackgroundColor: (ctx) =>
                        rankToColor(
                            ratingToRank(ctx.dataset.data[ctx.dataIndex])
                        ),
                    pointBorderColor: (ctx) =>
                        rankToColor(
                            ratingToRank(ctx.dataset.data[ctx.dataIndex])
                        ),
                },
            ],
        };

        this.renderChart(data, options);
    },
};
</script>

<style>
</style>

<template>
  <v-container>
    <h1>Consumption</h1>
    <bar-chart :chart-data="averages" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BarChart from "./BarChart.vue";
export default {
  name: "ConsumptionTimes",
  components: {
    BarChart
  },
  computed: {
    averages() {
      return {
        labels: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        datasets: [
          {
            label: "Averages (Wh) per hour",
            data: this.timeAverages,
            fill: false,
            backgroundColor: "rgba(30, 180, 255, 0.2)"
          }
        ]
      };
    },
    ...mapGetters(["timeAverages"])
  },
  methods: {
    ...mapActions(["fetchData"]),
    // https://stackoverflow.com/questions/1484506/random-color-generator
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  created() {
    this.loaded = false;
    this.fetchData(this.$route.params.houseId).then(() => {
      this.loaded = true;
    });
  }
};
</script>
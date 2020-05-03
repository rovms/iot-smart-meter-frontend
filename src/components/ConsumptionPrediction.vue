<template>
  <v-container>
    <h1>Consumption prediction</h1>
    <h3 class="mb-3 font-weight-light">shows predictions for the next 24 hours</h3>
    <line-chart :height="400" :chart-data="meterdata" :options="options" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "./LineChart.vue";
export default {
  name: "ConsumptionPrediction",
  components: {
    LineChart
  },
  data() {
    return {
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  },
  computed: {
    meterdata() {
      return {
        labels: [
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
          23,
          24
        ],
        datasets: [
          {
            borderColor: this.getRandomColor(),
            fill: false,
            label: "Meter " + this.$route.params.houseId,
            data: this.predictions
          }
        ]
      };
    },
    ...mapGetters(["predictions"])
  },
  methods: {
    ...mapActions(["fetchPredictions"]),
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
    this.fetchPredictions(this.$route.params.houseId);
  }
};
</script>
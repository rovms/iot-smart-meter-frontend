<template>
  <v-container>
    <h1>Consumption (daily totals)</h1>
    <bar-chart :chart-data="dailyTotals" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BarChart from "./BarChart.vue";
export default {
  name: "ConsumptionDays",
  components: {
    BarChart
  },
  computed: {
    dailyTotals() {
      return {};
    },
    ...mapGetters(["timeAverages"])
  },
  methods: {
    ...mapActions(["fetchData"]),
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
    this.fetchData().then(() => {
      this.loaded = true;
    });
  }
};
</script>
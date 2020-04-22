<template>
  <v-container>
    <h1>Consumption</h1>
    <button @click="fetchData()">Add data</button>
    <line-chart :chart-data="datasetsfull" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "./LineChart.vue";
export default {
  name: "ConsumptionChart",
  components: {
    LineChart
  },
  computed: {
    datasetsfull() {
      return {
        labels: this.lineLabels,
        datasets: [
          {
            label: "Meter 1",
            borderColor: "rgb(255, 0, 0)",
            fill: false,
            data: this.lineDatas
          }
        ]
      };
    },
    ...mapGetters(["lineLabels", "lineDatas"])
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  created() {
    this.loaded = false;
    this.fetchData().then(() => {
      this.loaded = true;
    });
  }
};
</script>

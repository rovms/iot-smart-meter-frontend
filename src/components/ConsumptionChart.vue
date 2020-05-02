<template>
  <v-container>
    <h1>Consumption</h1>
    <div class="chart"></div>
    <line-chart :chart-data="meterdata" />
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
    meterdata() {
      const datas = this.lineDatas;
      var sets = [];
      var i;
      for (i = 0; i < datas.length; i++) {
        if (datas[i].length > 0) {
          sets.push({
            label: "Meter " + i,
            borderColor: this.getRandomColor(),
            fill: false,
            data: datas[i]
          });
        }
      }
      return {
        labels: this.lineLabels,
        datasets: sets
      };
    },
    ...mapGetters(["lineLabels", "lineDatas"])
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
<style scoped>
.chart {
  max-height: 200px;
}
</style>
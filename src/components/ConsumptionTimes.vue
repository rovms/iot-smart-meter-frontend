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
      // return
      //  {
      // {labels:["January","February","March","April","May","June","July"],
      // datasets:[{label:"My First Dataset","data":[65,59,80,81,56,55,40],"fill":false,"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],"borderColor":["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],"borderWidth":1}]}
      // labels: [1,2,3],
      // datasets: [
      //   {
      //   }
      // ]
      // };
      // const datas = this.timeAverages;
      // var sets = [];
      // for (var i = 0; i < datas.length; i++) {
      //   sets.push({
      //     backgroundColor: this.getRandomColor(),
      //     fill: false,
      //     data: datas[i]
      //   });
      // }
      // /*eslint-disable no-console*/
      // console.log(sets);
      // /*eslint-enable no-console*/
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
    this.fetchData().then(() => {
      this.loaded = true;
    });
  }
};
</script>
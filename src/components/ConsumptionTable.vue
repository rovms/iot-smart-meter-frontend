<template>
  <v-container>
    <h1>Consumption</h1>
    <v-data-table
      :headers="headers"
      :items="allData.data"
      item-key="_id"
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:item.timestamp="{ item }">
        <span>{{ item.timestamp | moment("DD.MM.YYYY hh:mm") }}</span>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ConsumptionTable",
  data() {
    return {
      headers: [
        {
          text: "Time",
          align: "start",
          value: "timestamp"
        },
        { text: "Reading (Wh)", value: "reading" },
        { text: "Meter id", value: "meter_id" }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  computed: mapGetters(["allData", "loading"]),
  created() {
    this.fetchData(this.$route.params.houseId);
  }
};
</script>

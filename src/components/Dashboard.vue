<template>
  <v-container>
    <h3>What would you like to see?</h3>
    <v-list>
      <v-list-item>
        <v-btn small :to="{ name: 'consumption' }">See reading in table</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn small :to="{ name:  'consumption_chart' }">See development chart</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn small :to="{ name:  'consumption_weekly' }">See daily totals</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn small :to="{ name:  'consumption_time' }">See hourly averages</v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  }
};
</script>

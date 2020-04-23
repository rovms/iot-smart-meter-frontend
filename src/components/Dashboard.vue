<template>
  <v-container>
    <h3>What would you like to see?</h3>
    <v-list>
      <v-list-item>
        <v-btn :to="{ name: 'consumption' }">Consumption (table)</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn :to="{ name:  'consumption_chart' }">Consumption (development)</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn :to="{ name:  'consumption_weekly' }">Consumption (weekly average)</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn :to="{ name:  'consumption_time' }">Consumption (time distribution)</v-btn>
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

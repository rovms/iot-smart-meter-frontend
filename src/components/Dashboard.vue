<template>
  <v-container>
    <h3>What would you like to see?</h3>
    <v-list>
      <v-list-item>
        <v-btn small :to="{ name: 'consumption' }">Readings in table</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn small :to="{ name: 'consumption_chart' }"
          >Development chart</v-btn
        >
      </v-list-item>
      <v-list-item>
        <v-btn small :to="{ name: 'consumption_time' }">Hourly averages</v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
};
</script>

<template>
  <v-container>
    <v-card class="mx-auto mb-5" max-width="344" outlined>
      <v-card-title>
        <strong>ALL CUSTOMERS</strong>
      </v-card-title>
      <v-card-actions>
        <v-btn :to="{ name: 'consumption', params: { houseId: 'all' } }">Table</v-btn>
        <v-btn :to="{ name: 'consumption_chart', params: { houseId: 'all' } }">Chart</v-btn>
        <v-btn :to="{ name: 'consumption_time', params: { houseId: 'all' } }">Averages</v-btn>
      </v-card-actions>
    </v-card>
    <div v-for="admin in admins" v-bind:key="admin._id">
      <v-card class="mx-auto mb-2" max-width="344" outlined>
        <v-card-title>Admin: {{admin.username}} {{admin.adminId}}</v-card-title>
        <div v-for="houseId in admin.houses_id" v-bind:key="houseId">
          <v-card class="mx-auto mb-2 mr-3 ml-3" max-width="344" outlined color="#1739211A">
            <v-card-title>House / Meter: {{houseId}}</v-card-title>
            <v-card-actions>
              <v-btn x-small :to="{ name: 'consumption', params: { houseId: houseId } }">Table</v-btn>
              <v-btn x-small :to="{ name: 'consumption_chart', params: { houseId: houseId } }">Chart</v-btn>
              <v-btn
                x-small
                :to="{ name: 'consumption_time', params: { houseId: houseId } }"
              >Averages</v-btn>
              <v-btn
                x-small
                :to="{ name: 'consumption_prediction', params: { houseId: houseId } }"
              >Predictions</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SupplierDashboard",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAdministrators"])
  },
  computed: mapGetters(["admins"]),
  created() {
    this.fetchAdministrators();
  }
};
</script>

<template>
  <v-app id="app">
    <v-app-bar dense app color="primary" dark>
      <v-toolbar-title>IoT 2020 - Smart Meter Data Platform</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" v-if="!isLoggedIn" :to="{ name:  'login' }">Login</v-btn>
      <v-btn color="primary" small v-if="isLoggedIn" v-on:click="logout">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "./store";
import axios from "axios";
export default {
  name: "App",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser().then(() => this.$router.push({ name: "home" }));
    }
  },
  created() {
    axios.interceptors.response.use(
      undefined,
      function(response) {
        return response;
      },
      function(error) {
        if (error.response.status === 401) {
          store
            .dispatch("logoutUser")
            .then(() => this.$router.push({ name: "login" }));
        }
        return Promise.reject(error);
      }
    );
  }
};
</script>

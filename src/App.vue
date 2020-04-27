<template>
  <v-app id="app">
    <v-app-bar dense app color="primary" dark>
      <v-toolbar-title>IoT 2020 - Smart Meter Data Platform</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link v-if="!isLoggedIn" :to="{ name:  'login' }" tag="button">Login</router-link>
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

  data: () => ({
    //
  }),
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
    /*eslint-disable no-console*/
    console.log("this: " + this);
    console.log("this.http: " + this.$http);
    /*eslint-enable no-console*/
    axios.interceptors.response.use(undefined, function(err) {
      // this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.response.status === 401) {
          console.log("401");
          console.log("store: " + store);
          store
            .dispatch("logoutUser")
            .then(() => this.$router.push({ name: "login" }));
        }
        throw err;
      });
    });
  }
};
</script>

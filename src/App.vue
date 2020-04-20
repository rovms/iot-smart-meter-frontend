<template>
  <v-app id="app">
    <v-app-bar dense app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>IoT 2020 - Smart Meter Data Platform</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="login" tag="button">Login</router-link>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    toLogin() {
      /*eslint-disable no-console*/
      console.log("hello");
      /*eslint-enable no-console*/
      this.$router.push({ name: "login" });
    },
  },
};
</script>

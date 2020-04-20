<template>
  <v-app id="app">
    <v-app-bar dense app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>IoT 2020 - Smart Meter Data Platform</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-on:click="toLogin" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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

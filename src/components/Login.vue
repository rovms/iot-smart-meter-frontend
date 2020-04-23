<template>
  <v-container class="fill-height" fluid>
    <v-row v-if="registerSuccess" align="center" justify="center">
      <v-alert dismissible type="success">Successfully registered!</v-alert>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card v-if="loggingIn" class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="username" label="Username" name="username" type="text" />
              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text small v-on:click="loggingIn = false">No account? Register instead</v-btn>
            <v-spacer />
            <v-btn v-on:click="submitLogin" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="!loggingIn" class="elevation-12">
          <v-toolbar color="success" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="username" label="Username" name="username" type="text" />
              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                type="password"
              />,
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text small v-on:click="loggingIn = true">Already an account? Login instead</v-btn>
            <v-spacer />
            <v-btn v-on:click="submitRegister" color="success">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loggingIn: true
    };
  },
  methods: {
    ...mapActions(["login", "register"]),
    submitLogin() {
      const req = { username: this.username, password: this.password };
      this.login(req).then(() => {
        this.$router.push({ name: "dashboard" });
      });
    },
    submitRegister() {
      const req = { username: this.username, password: this.password };
      this.register(req).then(() => {
        (this.username = ""), (this.password = ""), (this.loggingIn = true);
      });
    }
  },
  computed: mapGetters(["registerSuccess"])
};
</script>

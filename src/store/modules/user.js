import axios from "axios";

const API_URL = process.env.VUE_APP_API_BASE_URL;

const state = {
  token: localStorage.getItem("smd-user") || "",
  loginError: false,
  registerSuccess: false,
};

const mutations = {
  setToken(state, token) {
    localStorage.setItem("smd-user", JSON.stringify(token));
    state.token = token;
  },

  setLoginError(state, value) {
    state.loginError = value;
  },

  setRegisterSuccess(state, value) {
    state.registerSuccess = value;
  },
};

const actions = {
  async register({ commit }, req) {
    try {
      await axios.post(API_URL + "register/", req);
      return commit("setRegisterSuccess", true);
    } catch (error) {
      alert(error);
    }
  },

  /*eslint-disable no-console*/

  async login({ commit }, req) {
    try {
      const response = await axios.post(API_URL + "login/", req);
      console.log(response.data);
      commit("setToken", response.data.token);
    } catch (error) {
      console.log(error);
      commit("setLoginError", true);
      throw error;
    }
  },
  /*eslint-enable no-console*/
};

const getters = {
  token: (state) => state.token,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

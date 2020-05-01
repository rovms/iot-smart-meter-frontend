import axios from "axios";
import authHeader from "../auth/auth-header";
import router from "../../router";

const API_URL = process.env.VUE_APP_API_BASE_URL;

const state = {
  token: localStorage.getItem("smd-user") || "",
  loginError: false,
  registerSuccess: false,
  type: "",
  cooperativeHouses: [],
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

  logoutUser(state) {
    localStorage.removeItem("smd-user");
    state.token = "";
  },

  setCooperativeHouses(state, payload) {
    state.cooperativeHouses = payload;
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
      commit("setToken", response.data.token);
      var jwt = parseJwt(response.data.token);
      if (jwt.user_role == "admin") {
        router.push({ name: "admin_dashboard" });
      }
    } catch (error) {
      console.log(error);
      commit("setLoginError", true);
      throw error;
    }
  },

  logoutUser({ commit }) {
    return new Promise((resolve) => {
      commit("logoutUser");
      localStorage.removeItem("smd-user");
      resolve();
    });
  },
  /*eslint-enable no-console*/

  fetchCooperative({ commit, state }) {
    var jwt = parseJwt(state.token);
    if (jwt.user_role != "admin") {
      alert("only admins!");
    }
    return new Promise((resolve) => {
      axios
        .get(API_URL + "cooperative/", {
          headers: authHeader(),
        })
        .then((response) => {
          commit("setCooperativeHouses", response.data);
          resolve();
        });
    });
  },
};

const getters = {
  token: (state) => state.token,
  registerSuccess: (state) => state.registerSuccess,
  isLoggedIn: (state) => !!state.token,
  cooperativeHouses: (state) => state.cooperativeHouses,
};

// https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export default {
  state,
  mutations,
  actions,
  getters,
};

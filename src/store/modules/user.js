import axios from "axios";
import authHeader from "../auth/auth-header";

// const API_URL = process.env.VUE_APP_API_BASE_URL + "user/";

const state = {
  users: [],
  user: {},
  isLoadingUser: false,
  submittingUserAddress: false,
  addresses: [],
  loadingAddresses: false,
  loadingUsers: false,
};

const mutations = {};

const actions = {};

const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
  isLoadingUser: (state) => state.isLoadingUser,
  allUsers: (state) => state.users,
  loadingUsers: (state) => state.loadingUsers,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

import axios from "axios";

const API_URL = process.env.VUE_APP_API_BASE_URL + "real_data/";
const state = {
  data: [],
  loading: false,
};

const mutations = {
  setData(state, payload) {
    state.data = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
};

const actions = {
  async fetchData({ commit }) {
    commit("setLoading", true);
    try {
      const response = await axios.get(API_URL, { params: { size: 100 } });
      commit("setLoading", false);
      return commit("setData", response.data);
    } catch (error) {
      alert(error);
    }
  },
};

const getters = {
  allData: (state) => state.data,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

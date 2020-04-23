import axios from "axios";
import authHeader from "../auth/auth-header";

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
    /*eslint-disable no-console*/
    console.log("header: " + authHeader());
    /*eslint-enable no-console*/
    commit("setLoading", true);
    try {
      const response = await axios.get(API_URL, {
        headers: authHeader(),
        params: { size: 500 },
      });
      commit("setLoading", false);
      commit("setData", response.data);
      return;
    } catch (error) {
      /*eslint-disable no-console*/
      console.log("error: " + error.data);
      /*eslint-enable no-console*/
      alert(error);
    }
  },
};

const getters = {
  allData: (state) => state.data,
  loading: (state) => state.loading,
  lineLabels: (state) => {
    var labels = [];
    if (state.data && state.data.data && state.data.data.length > 0) {
      const id = state.data.data[0].meter_id;
      state.data.data.forEach((element) => {
        if (element.meter_id === id) {
          var date = new Date(element.timestamp);
          var datestr =
            date.getDate() +
            "." +
            date.getMonth() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes();
          labels.push(datestr);
        }
      });
    }
    return labels;
  },
  lineDatas: (state) => {
    var datas = [[], [], [], []];
    if (state.data && state.data.data) {
      state.data.data.forEach((element) => {
        datas[element.meter_id].push(element.reading);
      });
    }
    return datas;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

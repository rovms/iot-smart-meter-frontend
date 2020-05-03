import axios from "axios";
import authHeader from "../auth/auth-header";

const API_URL = process.env.VUE_APP_API_BASE_URL;

const state = {
  data: [],
  loading: false,
  predictions: [],
};

const mutations = {
  setData(state, payload) {
    state.data = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setPredictions(state, payload) {
    state.predictions = payload;
  },
};

const actions = {
  async fetchData({ commit }, houseId) {
    commit("setLoading", true);
    try {
      const response = await axios.get(
        API_URL + "real_data" + (houseId != "all" ? "/" + houseId : ""),
        {
          headers: authHeader(),
          params: { size: 1000 },
        }
      );
      commit("setLoading", false);
      commit("setData", response.data);
      return;
    } catch (error) {
      alert(error);
    }
  },

  async fetchPredictions({ commit }, houseId) {
    if (!houseId) {
      alert("no house id given...");
      return;
    }
    try {
      const response = await axios.get(API_URL + "prediction/" + houseId, {
        params: { size: 24 },
      });
      commit("setPredictions", response.data);
      return;
    } catch (error) {
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
            (date.getMonth() + 1) +
            " " +
            date.getHours() +
            ":" +
            "00";
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
  timeAverages: (state) => {
    var elmts = Array(24);
    for (var i = 0; i < elmts.length; i++) {
      elmts[i] = [];
    }
    if (state.data && state.data.data) {
      state.data.data.forEach((element) => {
        var date = new Date(element.timestamp);
        elmts[date.getHours()].push(element.reading);
      });
    }

    var averages = [];
    for (var k = 0; k < elmts.length; k++) {
      var sum = 0;
      for (var j = 0; j < elmts[k].length; j++) {
        sum += elmts[k][j];
      }
      averages.push(sum / elmts[k].length);
    }

    return averages;
  },

  predictions: (state) => {
    if (state.predictions) {
      // return state.predictions.data.map((r) => );
      return state.predictions.data;
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

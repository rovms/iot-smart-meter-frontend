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
      const response = await axios.get(API_URL, { params: { size: 20 } });
      commit("setLoading", false);
      return commit("setData", response.data);
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
      state.data.data.forEach((element) => {
        if (element.meter_id === 1) {
          labels.push(element.timestamp);
        }
      });
    }
    return labels;
  },
  lineDatas: (state) => {
    var datas = [];
    if (state.data && state.data.data && state.data.data.length > 0) {
      state.data.data.forEach((element) => {
        if (element.meter_id === 1) {
          datas.push(element.reading);
        }
      });
    }
    return datas;
  },
  // datas: (state) => {
  //   var data = [];
  //   if (state.data && state.data.data && state.data.data.length > 0) {
  //     state.data.data.forEach((element) => {
  //       if (element.meter_id === 1) {
  //         labels.push(element.timestamp);
  //         data.push(element.reading);
  //       }
  //     });
  //     // var datasets = [
  //     //   {
  //     //     label: "Meter 1",
  //     //     data: data,
  //     //     fill: false,
  //     //     borderColor: "rgb(84, 153, 199)",
  //     //   },
  //     // ];

  //     // return { labels: labels, datasets: datasets };
  //     return [1, 2, 3];
  //   }
  //   return null;
  // },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

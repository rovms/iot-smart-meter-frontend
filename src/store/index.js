import Vuex from "vuex";
import Vue from "vue";
import user from "./modules/user";
import smartmeter from "./modules/smartmeter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    smartmeter,
  },
});

import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import NotExists from "../components/NotExists.vue";
import ConsumptionTable from "../components/ConsumptionTable.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/consumption",
      name: "consumption",
      component: ConsumptionTable,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "*",
      name: "notExists",
      component: NotExists,
    },
  ],
});

export default router;

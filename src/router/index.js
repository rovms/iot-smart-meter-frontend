import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import NotExists from "../components/NotExists.vue";
import ConsumptionTable from "../components/ConsumptionTable.vue";
import ConsumptionChart from "../components/ConsumptionChart.vue";
import ConsumptionTimes from "../components/ConsumptionTimes.vue";
import store from "../store";

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
      path: "/consumption/time",
      name: "consumption_time",
      component: ConsumptionTimes,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/consumption/chart",
      name: "consumption_chart",
      component: ConsumptionChart,
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

router.beforeEach((to, from, next) => {
  if (store.getters.isLoggedIn) {
    return next();
  }
  const authRequired = to.matched.some((record) => record.meta.authRequired);
  if (authRequired) return next("/login");
  return next();
});

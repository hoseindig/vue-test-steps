import mainPageVue from "@/components/mainPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import mainStepVue from "../components/steps/mainStep.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: mainPageVue,
  },
  {
    path: "/step",
    name: "step",
    component: mainStepVue,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

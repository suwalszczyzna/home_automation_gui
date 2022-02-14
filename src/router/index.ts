import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/Home.vue')
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

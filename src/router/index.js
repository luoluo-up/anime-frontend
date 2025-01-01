import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/detail", component: () => import("../views/Detail.vue") },
    { path: "/tv", component: () => import("../views/TV.vue") },
    { path: "/myinfo", component: () => import("../views/My.vue") },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/form",
      name: "form",
      
      component: () => import("../views/QuoteForm.vue"),
    },
    {
      path: "/edit",
      name: "edit",
     
      component: () => import("../views/QuoteEdit.vue"),
    },
  ],
});

export default router;

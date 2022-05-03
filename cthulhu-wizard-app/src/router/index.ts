import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/wizard",
      name: "wizard",
      component: import("../features/wizard/WizardPage.vue"),
    },
  ],
});

export default router;

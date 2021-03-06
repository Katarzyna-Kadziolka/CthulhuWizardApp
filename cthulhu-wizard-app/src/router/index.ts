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
      component: () => import("../features/wizard/WizardPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../features/auth/LoginPage.vue"),
    },
    {
      path: "/report-error",
      name: "reportError",
      component: () => import("../features/errorReport/ErrorReportPage.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../features/settings/SettingsPage.vue"),
    },
  ],
});

export default router;

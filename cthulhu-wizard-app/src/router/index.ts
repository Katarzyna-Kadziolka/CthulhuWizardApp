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
    {
      path: "/image-generator",
      name: "imageGenerator",
      component: () => import("../features/imageGenerator/ImageGenerator.vue"),
    },
    {
      path: "/investigator-card/:id",
      name: "investigatorCard",
      component: () =>
        import("../features/investigatorCard/InvestigatorCardPage.vue"),
    },
  ],
});

export default router;

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";

import { useAuth } from "@/features/auth/composables/useAuth";
import { useToggles } from "@/features/toggles/composables/useToggles";
import { useAppSettings } from "@/features/appSettings/composables/useAppSettings";

await useAuth().authenticate();

Promise.all([await useToggles().fetch(), await useAppSettings().fetch()]);

const routes = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/article", component: () => import("./pages/ArticlePage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

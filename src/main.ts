import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { useAuth } from "@/features/auth/composables/useAuth";
import { useToggles } from "@/features/toggles/composables/useToggles";
import { useAppSettings } from "@/features/appSettings/composables/useAppSettings";

await useAuth().authenticate();

Promise.all([
    await useToggles().fetch(), 
    await useAppSettings().fetch()
]);

createApp(App).mount("#app");

import { ref } from "vue";
import { fetchAppSettings } from "@/features/appSettings/api";

const appSettings = ref();

export function useAppSettings() {

  async function fetch() {
    const response = await fetchAppSettings();
    appSettings.value = response;
  }

  return { appSettings, fetch };
}

import { ref } from "vue";
import { fetchToggles } from "@/features/toggles/api";

const toggles = ref();

export function useToggles() {
  
  async function fetch() {
    const response = await fetchToggles();
    toggles.value = response;
  }

  return { toggles, fetch };
}

import { ref } from "vue";
import { authenticateWithToken } from "@/features/auth/api";

const userInfo = ref({});

export function useAuth() {
  async function authenticate() {
    const response = await authenticateWithToken();
    userInfo.value = response;
  }

  return { userInfo, authenticate };
}

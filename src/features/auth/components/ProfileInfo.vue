<script setup lang="ts">
import { useAuth } from "@/features/auth/composables/useAuth";

const { userInfo } = useAuth();
</script>

<template>
  <div class="profile-info">
    <img
      class="profile-avatar"
      :src="userInfo.avatar"
    />
    <div class="user-info">
      <div class="fullname">{{ userInfo.fullname }}</div>
      <div class="username">{{ userInfo.username }}</div>
    </div>
  </div>
</template>

<style scoped>
.profile-info {
  display: flex;
  gap: 8px;
}

.profile-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.user-info {
  text-align: left;
}

.fullname {
  font-weight: bold;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();

onMounted(() => {
  if (authStore.token) {
    authStore.fetchUser();
    authStore.restoreSession();

  }
});
</script>

<template>
  <router-view></router-view>
</template>

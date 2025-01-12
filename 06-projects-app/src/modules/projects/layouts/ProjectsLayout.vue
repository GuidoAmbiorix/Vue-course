<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import { RouterView } from 'vue-router';
import SideMenu from '../components/SideMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu />

    <main class="flex flex-row">
      <!-- Side Menu -->
      <SideMenu />

      <!-- RouterView -->
      <RouterView />
    </main>
  </div>
</template>

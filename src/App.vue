<template>
  <v-app>
    <router-view />
    <Analytics />
  </v-app>
</template>

<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

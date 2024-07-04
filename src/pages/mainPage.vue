<script setup lang="ts">
import WebHeader from '@/components/WebHeader.vue'
</script>
<template>
  <v-layout>
    <WebHeader></WebHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

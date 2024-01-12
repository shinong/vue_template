<script setup lang="ts">
import WebHeader from '@/components/WebHeader.vue'
import WebMenu from '@/components/WebMenu.vue'
</script>
<template>
  <v-layout>
    <WebHeader></WebHeader>
    <WebMenu></WebMenu>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

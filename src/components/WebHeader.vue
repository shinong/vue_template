<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar color="primary">
    <!-- <v-navigation-bar-icon variant="text"></v-navigation-bar-icon> -->
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>Vue templates</v-toolbar-title>
    <template v-slot:append>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </template>
  </v-app-bar>
</template>

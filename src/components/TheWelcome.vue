<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
const hostEnv = import.meta.env.VITE_APP_Title
</script>

<template>
  <h1>Welcome to Test Page</h1>
  <p>This indicates that docker publish has been worked</p>
  <p>current hosting envrionment is: {{ hostEnv }}</p>
  <ul>
    <li>
      <a @click="$router.push('/example/formkit')">To registration page</a>
    </li>
    <li>
      <a @click="$router.push('/admin/allusers')">To users list page</a>
    </li>
  </ul>
</template>

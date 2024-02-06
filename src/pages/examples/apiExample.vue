<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '@/composables/useApi'
let res = ref({})
const api = useApi()
api.site
  .serverStatus()
  .then((response: any) => {
    res = response
    console.log(res)
  })
  .catch((error: any) => {
    console.log(error)
  })
</script>
<script lang="ts"></script>
<template>
  <div>
    <p>{{ res }}</p>
  </div>
</template>

<template>
  <FormKit type="form" v-model="res" @submit="save">
    <FormKit
      type="text"
      label="formkit input"
      name="input"
      help="input something"
      placeholder="type here"
    />
  </FormKit>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let res = ref({})
let save = () => {
  console.log(res)
}
</script>

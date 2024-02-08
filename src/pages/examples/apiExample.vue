<!-- <script setup lang="ts">
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
</script> -->

<template>
  <div>
    result is
    {{ res }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      res: {}
    }
  },
  created() {
    this.fetchRes()
  },
  methods: {
    fetchRes() {
      //@ts-ignore
      this.$api.site
        .serverStatus()
        .then((response: any) => {
          this.res = response
          console.log(this.res)
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }
})
</script>

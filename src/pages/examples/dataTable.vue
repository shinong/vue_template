<template>
  <v-data-table :items="table"></v-data-table>
</template>

<script lang="ts">
//@ts-nocheck
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      table: []
    }
  },
  created() {
    this.fetchTable()
  },
  methods: {
    fetchTable() {
      this.$api.admin.fetchAllUsers().then((response: any) => {
        this.table = response
      })
    }
  }
})
</script>

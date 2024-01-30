<template>
  <!-- <v-container>
    <v-row>
      <v-col>Form kit examples</v-col>
    </v-row>
    <v-row>
      <v-col>standard form kit components</v-col>
    </v-row>
    <v-row>
      <v-col>render from schema</v-col>
    </v-row>
    <v-row>
      <v-col>
        <FormKitSchema :schema="formObj" />
      </v-col>
      <v-col>
        <FormKit type="select" />
      </v-col>
    </v-row>
  </v-container> -->
  <FormKit
    type="text"
    name="name"
    id="name"
    label="Name"
    help="Your full name"
    placeholder="“Jon Doe”"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
var formObj = ref([
  {
    $formkit: 'text',
    name: 'email',
    label: 'Email',
    help: 'This will be used for your account.',
    validation: 'required|email'
  }
])
</script>

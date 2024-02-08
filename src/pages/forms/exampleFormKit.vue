<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <FormKit type="form" v-model="res" @submit="save">
          <FormKit
            type="text"
            name="firstName"
            id="firstName"
            validation="required|not:Admin"
            label="First Name"
            help="Enter your first name (required)"
            placeholder="“Shinong”"
          />

          <FormKit
            type="text"
            name="lastName"
            id="lastName"
            label="Last Name"
            help="Enter your last name"
            placeholder="“Mao”"
          />

          <FormKit
            type="email"
            label="Email Address"
            name="email"
            help="Please enter your email address."
            validation="required|email"
            validation-visibility="live"
            placeholder="@uwaterloo.ca"
          />

          <FormKit
            type="tel"
            label="Phone number"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'Phone number must be in the format xxx-xxx-xxxx'
            }"
            validation-visibility="dirty"
          />

          <FormKit
            type="select"
            label="Your Status"
            name="status"
            id="status"
            placeholder="Select your status"
            :options="['Student', 'Other']"
            validation="required"
          />

          <FormKit
            type="select"
            label="department"
            name="department"
            id="department"
            placeholder="Select your department"
            :options="['Art', 'Engineering', 'Environment', 'Math', 'Science']"
          />
        </FormKit>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      res: {}
    }
  },
  methods: {
    save() {
      //@ts-ignore
      this.$api.public
        .openRegistration(JSON.parse(JSON.stringify(this.res)))
        .then((response: any) => {
          console.log(response)
          this.$router.push('/thanks')
        })
      //   console.log(JSON.parse(JSON.stringify(this.res)))
    }
  }
})
</script>

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
            label="Name/ prefer name:"
            placeholder="“Shinong”"
          />

          <FormKit
            type="email"
            label="Email address: (your school/institution email to prove your student/staff identity)"
            name="email"
            validation="required|email"
            placeholder="@uwaterloo.ca"
          />

          <FormKit
            v-model="value"
            type="radio"
            label="Preferred transportation"
            :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
            help="How do you like to get around?"
          />

          <FormKit
            type="radio"
            label="Gender"
            name="gender"
            validation="required"
            :options="['Female', 'Male', 'Non-binary', 'Prefer not to say', 'other']"
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
      res: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        status: null,
        department: null
      },
      value: undefined
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

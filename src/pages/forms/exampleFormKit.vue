<template>
  <v-container>
    <v-row>
      <v-col cols="12" offset-sm="3">
        <FormKit type="form" v-model="res" @submit="save">
          <FormKit
            type="text"
            name="name"
            id="name"
            validation="required|not:Admin"
            label="Full Name"
            placeholder="“Enter your name”"
          />

          <FormKit
            type="email"
            label="Email address: (your school/institution email to prove your student/staff identity)"
            name="email"
            validation="required|email"
            placeholder="Enter your email"
          />

          <FormKit
            type="radio"
            label="Gender"
            name="gender"
            validation="required"
            :options="['Female', 'Male', 'Non-binary', 'Prefer not to say', 'other']"
          />

          <FormKit
            type="radio"
            label="What is your current academic status?"
            name="status"
            :options="[
              'High School student',
              'Undergraduate student',
              'Graduate student(Master\'s/Ph.D)',
              'Researcher/Phostdoctoral Fellow',
              'Full-time staff',
              'Part-time staff',
              'Prefer not to say'
            ]"
            validation="required"
          />

          <!-- <FormKit
            type="tel"
            label="Phone number"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'Phone number must be in the format xxx-xxx-xxxx'
            }"
            validation-visibility="dirty"
          /> -->

          <FormKit
            type="radio"
            label="If you are student/staff, which faculty are you enrolled in? (eg. Arts)"
            name="department"
            id="department"
            :options="[
              'Arts',
              'Engineering',
              'Environment',
              'Health',
              'Mathematics',
              'Science',
              'other'
            ]"
          />

          <FormKit
            type="radio"
            label="Data Usage Consent: We greatly appreicate your participation in this survey. Your response are invaluable to our research. Do we have your permission to use the information you provided for research and analytical purpose while ensuring your privacy?"
            name="consent"
            :options="[
              {
                label: 'Yes, I consent to the use of my responses for reasearch purpose',
                value: 'true'
              },
              {
                label: 'No, I do not wish for my response to be used for research purpose',
                value: 'false'
              }
            ]"
            validation="required"
          ></FormKit>

          <FormKit
            type="checkbox"
            name="checkbox1"
            label="We are conducting a pilot program, all compensations will be sent directly from the research team."
            help="I understand all compensation are directly from the reasearch team."
            :value="false"
            validation="accepted"
          ></FormKit>

          <FormKit
            type="checkbox"
            name="checkbox2"
            label="I gaurantee that the data provided above are accurate. If it deesn't, I understand that I will not be qualified to take any rewared survey and will be dropped from the respondent pool."
            :value="false"
            validation="accepted"
          ></FormKit>
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
      res: {},
      value: undefined
    }
  },
  methods: {
    save() {
      let formRes = { ...this.res }
      // @ts-ignore
      delete formRes.checkbox1
      // @ts-ignore
      delete formRes.checkbox2
      // @ts-ignore
      this.$api.public
        .openRegistration(JSON.parse(JSON.stringify(formRes)))
        .then((response: any) => {
          console.log(response)
          this.$router.push('/thanks')
        })
      //   console.log(JSON.parse(JSON.stringify(formRes)))
    }
  }
})
</script>

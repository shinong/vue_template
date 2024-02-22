// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// set up vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  components,
  directives
})
app.use(vuetify)
//

// setup global api
import ApiWrapper from '@/api/index'
const api = new ApiWrapper()
app.config.globalProperties.$api = api

//setup formkit
import './style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
app.use(plugin, defaultConfig(config))
//

app.use(createPinia())
app.use(router)

app.mount('#app')

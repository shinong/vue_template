import './assets/main.css'

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

const vuetify = createVuetify({
  components,
  directives
})
app.use(vuetify)
//

//setup formkit
import { plugin, defaultConfig, FormKitSchema } from '@formkit/vue'
import config from '../formkit.config'
app.use(plugin, defaultConfig(config), FormKitSchema)
//

app.use(createPinia())
app.use(router)

app.mount('#app')

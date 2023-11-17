import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Datatable from './components/core/Datatable.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases } from 'vuetify/iconsets/mdi'
import BaseInput from  './components/inputs/BaseInput.vue'
import BaseSelect from  './components/inputs/BaseSelect.vue'

// import './plugins/chartlist'

const vuetify = createVuetify({
  components,
  directives,
  aliases,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

const app = createApp(App)

app.use(router)


app.use(vuetify)

app.component('datatable', Datatable)
app.component('BaseInput', BaseInput)
app.component('BaseSelect', BaseSelect)

app.mount('#app')

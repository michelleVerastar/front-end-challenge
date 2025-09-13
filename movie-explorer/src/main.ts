import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  router  from './router'

// Vuetify
import 'vuetify/styles/main.css'
import { createVuetify } from 'vuetify'

//Vuetify fonts
import 'unfonts.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

//Set whole app styling with vuetify for light and dark mode to be flexible based on user system preferences
const vuetify = createVuetify({
  theme: {
    defaultTheme: "system",
    themes: {
      light: { dark: false, colors: { primary: "#646cff" } },
      dark: { dark: true, colors: { primary: "#646cff" } },
    },
  },
});

//initialize Pinia
const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')


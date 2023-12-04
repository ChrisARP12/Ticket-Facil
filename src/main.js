import { createApp } from 'vue'
import {createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Registro from './components/Registro.vue'
import Compra from './components/EventoCarlos.vue'
import Confirmar from './components/Confirmar.vue'


const routes = [
  { path: '/', component: Logo },
  { path: '/Menu', component: Menu },
  { path: '/Login', component: Login },
  { path: '/Registro', component: Registro },
  { path: '/Evento', component: Compra },
  { path: '/Confirmar', component: Confirmar },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')

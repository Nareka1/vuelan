import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
// import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
// import Button from './components/Button.vue'
import Try from './components/Try.vue'

window.addEventListener('load', function () {
  AOS.init()
})

// const routes = [
//   { path: '/', component: App },
//   { path: '/button', component: Button },
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

const main = createApp(App)
// main.use(router)
// main.mount('#app')

const tryElement = createApp(Try)
tryElement.mount('#app')

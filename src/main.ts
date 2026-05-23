import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

console.log('%c🍪 Hungry?', 'font-size:14px;font-weight:bold;color:#487689')
console.log(
  'There is a slightly secret cookie recipe hiding on this site.\nClick the cookie in the footer, or visit %c/#cookies',
  'font-weight:bold;text-decoration:underline',
)

createApp(App).mount('#app')

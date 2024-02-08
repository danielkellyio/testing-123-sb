import { createApp } from 'vue'
import '@vueschool/browser-devtools'
import App from './App.vue'
import '@/assets/main.css'

// only mounting the app after the devtools are ready
// this makes console log work even onMounted or setup
window.addEventListener('custom_devtools_ready', () => {
  createApp(App).mount('#app')
})

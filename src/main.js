import '@/assets/main.css'
import router from '@/router/index'
import { useAuth } from '@/useAuth'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)
const { getUser } = useAuth()
getUser().then(() => {
    app.use(router)
    app.mount('#app')
})



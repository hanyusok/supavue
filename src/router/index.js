import { createMemoryHistory, createRouter } from 'vue-router'
import { useAuth } from '@/useAuth'
import Auth from '@/components/Auth.vue'
import Account from '@/components/Account.vue'
import CallsView from '@/views/CallsView.vue'
import MessagesView from '@/views/MessagesView.vue'
import HomeView from '@/views/HomeView.vue'
import Login from '@/components/Login.vue'

const { user } = useAuth()

const routes = [
  { path: '/', component: HomeView },
  { path: '/calldoctor', component: CallsView, meta: { requiresAuth: true}  },
  { path: '/messagesfrom', component: MessagesView, meta: { requiresAuth: true} },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !user.value) {
    next('/login')
  } else {
    next()    
  }
})



export default router;


import { createMemoryHistory, createRouter } from 'vue-router'

import Auth from '@/components/Auth.vue'
import Account from '@/components/Account.vue'
import CallsView from '@/views/CallsView.vue'
import MessagesView from '@/views/MessagesView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/home', component: HomeView },
  { path: '/calldoctor', component: CallsView },
  { path: '/messagesfromdoctor', component: MessagesView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;


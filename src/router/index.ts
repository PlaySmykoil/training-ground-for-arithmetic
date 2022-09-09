import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MultiplicationView from '../views/MultiplicationView.vue'
import AdditionView from '../views/AdditionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/multiplication', name: 'multiplication', component: MultiplicationView },
    { path: '/addition', name: 'addition', component: AdditionView }
  ]
})

export default router

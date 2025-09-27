import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'
import TrainersView from '../views/TrainersView.vue'
import TrainerApplyView from '../views/TrainerApplyView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', redirect: '/courses' },
  { path: '/courses', component: CoursesView },
  { path: '/trainers', component: TrainersView },
  { path: '/trainer/apply', component: TrainerApplyView },
  { path: '/dashboard', component: DashboardView },
  { path: '/login', component: LoginView },
  // catch-all: redirect unknown routes back to Courses
  { path: '/:pathMatch(.*)*', redirect: '/courses' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router







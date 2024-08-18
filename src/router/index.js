import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectOverview from '../views/ProjectOverview.vue'
import ProgressTracker from '../views/ProgressTracker.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectOverview
    },
    {
      path: '/progress',
      name: 'progress',
      component: ProgressTracker
    },
    {
      path: '/projectDetail/:id',
      name: 'projectDetail',
      component: ProjectDetail
    }
  ]
})

export default router

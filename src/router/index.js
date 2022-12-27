import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Job from '../views/JobsView.vue'
import JobDetails from '../views/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Job
  },
  {
    path: '/jobs/:id',
    name: 'jobdetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

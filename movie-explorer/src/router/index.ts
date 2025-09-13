import { createRouter, createWebHistory } from 'vue-router'
import MovieSearch from '../pages/MovieSearch.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/movie-explorer/', component: MovieSearch, meta: { title: 'Movie Search' } },
  { path: '/movie-explorer/about', component: About, meta: { title: 'About' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



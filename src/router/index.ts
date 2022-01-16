import { Component } from 'vue'
import { createRouter } from '../../packages'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

type Routers = {
  path: string,
  component: Component,
  children?: Routers
}[]

const routes: Routers = [
  {path: '/home', component: Home},
  {path: '/about', component: About}
]

export default createRouter({
  routes
})

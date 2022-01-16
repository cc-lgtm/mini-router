import { Component } from 'vue'
import install from './install'
import { routers } from '../components/routes'

export type Routers = {
  path: string,
  component: Component,
  children?: Routers
}[]

type Options = {
  routes: Routers
}
function createRouter(options: Options) {
  const { routes } = options
  routes.forEach(route => {
    routers.push(route)
  })

  return install;
}

export {
  createRouter
}

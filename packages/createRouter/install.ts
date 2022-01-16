import { App , Component} from 'vue'
import RouterLink from '../components/router-link.vue'
import RouterView from '../components/router-view.vue'

const installMap = [
  RouterLink,
  RouterView
]

export default function install(app: App) {
  installMap.map((component: Component) => {
    app.component(component.name!, component)
  })
}

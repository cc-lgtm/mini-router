<template>
  <div>
    <component v-if="component" :is="component"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Component, onMounted } from 'vue'
import { routers } from './routes'
export default defineComponent({
  name: 'router-view',
  setup() {
    const component = ref<Component | null>(null)
    onMounted(() => {
      routers.forEach(route => {
        const path = route.path
        const locals = location.href.split('/')
        if (locals.includes(path.split('/')[1])) {
          component.value = route.component
        }
      })
    })

    return {
      component
    }
  }
})
</script>

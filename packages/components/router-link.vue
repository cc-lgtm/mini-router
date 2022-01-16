<template>
  <a :href="to" @click="onClick">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'router-link',
  props: {
    to: {
      type: String,
      default: '/'
    }
  },
  setup(props) {
    const to = ref<string>("")
    const onClick = () => {
      to.value = (props.to).split('/')[1]
    }

    return {
      onClick,
      to
    }
  }
})
</script>

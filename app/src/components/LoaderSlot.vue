<template>
  <slot v-if="state === 'data200'" name="data200"></slot>
  <div v-if="state === 'loading'" class="row text-center align-items-center justify-content-center" :class="height">
    <loader-full />
  </div>
  <slot v-if="state === 'data404'" name="data404"></slot>
</template>

<script>
import LoaderFull from '@/components/LoaderFull'

export default {
  name: 'LoaderSlot',
  components: {
    LoaderFull
  },
  props: {
    state: {
      required: true,
      type: String,
      default: ''
    },
    height: {
      required: false,
      type: String,
      default: 'h10vh'
    }
  }
}
</script>

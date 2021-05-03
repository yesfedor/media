<template>
  <component :kpid="kpid" :is="get_component"></component>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const WatchAuthTrue = defineAsyncComponent(() =>
  import(/* webpackChunkName: "watch.player" */'../components/WatchAuthTrue')
)
const WatchAuthFalse = defineAsyncComponent(() =>
  import(/* webpackChunkName: "watch.intro" */'../components/WatchAuthFalse')
)

export default {
  name: 'Watch',
  components: {
    WatchAuthTrue,
    WatchAuthFalse
  },
  props: {
    kpid: String
  },
  data () {
    return {
      auth: false
    }
  },
  mounted () {
    this.auth = this.$store.getters.IS_AUTH
  },
  computed: {
    get_component () {
      if (this.auth) return 'WatchAuthTrue'
      else return 'WatchAuthFalse'
    },
    get_auth () {
      return this.$store.getters.IS_AUTH
    }
  },
  watch: {
    get_auth (isAuth) {
      this.auth = isAuth
    }
  }
}
</script>

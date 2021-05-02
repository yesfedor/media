<template>
  <component :kpid="kpid" :is="get_component"></component>
</template>

<script>
import WatchAuthTrue from '../components/WatchAuthTrue'
import WatchAuthFalse from '../components/WatchAuthFalse'

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

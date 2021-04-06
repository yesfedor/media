<template>
  <WatchAuthFalse v-if="!auth" :kpid="kpid" />
  <WatchAuthTrue v-else :kpid="kpid" />
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
      auth: undefined
    }
  },
  mounted () {
    this.auth = this.$store.getters.IS_AUTH
  },
  computed: {
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

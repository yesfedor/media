<template>
  <AppHeader :logo="logo" />
  <router-view class="router-view-height"></router-view>
  <component :is="asd" />
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      asd: 'AppFooter',
      logo: 'INY Media'
    }
  },
  mounted () {
    window.addEventListener('storage', (event) => {
      if (event.key === 'jwt') {
        if (event.newValue === 'LOGOUT') this.$store.commit('LOGOUT')
        else this.$store.commit('LOGIN', event.newValue)
      }
    })

    const jwt = localStorage.getItem('jwt')
    if (jwt && jwt !== 'LOGOUT') this.$store.commit('LOGIN', jwt)
  },
  watch: {
  }
}
</script>

<style>
.router-view-height {
  min-height: calc(100vh - 161px) !important;
}
</style>

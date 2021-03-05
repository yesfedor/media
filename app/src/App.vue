<template>
  <AppHeader :logo="logo" />
  <router-view class="router-view-height"></router-view>
  <AppFooter :logo="logo" />
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
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
  min-height: 88.4vh !important;
}
</style>

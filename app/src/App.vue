<template>
  <AppHeader :logo="logo" />
  <router-view v-slot="{ Component }" class="router-view-height">
    <transition name="router-view" :duration="{ enter: 600, leave: 600 }" mode="out-in" enter-to-class="animated fadeIn" leave-active-class="animated fadeOut">
      <component :is="Component" />
    </transition>
  </router-view>
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
  overflow-x: hidden;
  min-height: 100vh !important;
  /* min-height: 88.4vh !important; */
}
</style>

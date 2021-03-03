<template>
  <AppHeader :logo="logo" />
  <router-view></router-view>
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
      logo: ''
    }
  },
  mounted () {
    this.logo = 'INY Media'
  }
}
</script>

<style>
@import url('./assets/dark.css');
@import url('./assets/themes.css');
@import url('./assets/common.css');
</style>

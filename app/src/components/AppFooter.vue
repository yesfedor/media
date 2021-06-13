<template>
  <footer v-if="$route.name !== 'Welcome'" class="theme-footer text-center text-lg-start">
    <div class="text-center theme-text p-3">
      © {{year}} Copyright:
      <a class="theme-title" target="_blank" href="https://iny.su/">{{logo}}</a>
      <router-link to="/changelog" class="theme-nav-link pl-3">{{version}}</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    logo: String
  },
  data () {
    return {
      version: 'media-v5.1.2',
      year: new Date().getFullYear()
    }
  }
}
</script>

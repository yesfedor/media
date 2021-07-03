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
    logo: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    version () {
      return this.$store.getters.VERSION_LAST
    }
  }
}
</script>

<template>
  <footer class="theme-footer text-center text-lg-start">
    <div class="text-center theme-title p-3">
      © {{year}} Copyright:
      <a class="theme-title" target="_blank" href="https://iny.su/">{{logo}}</a>
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
      year: new Date().getFullYear()
    }
  }
}
</script>

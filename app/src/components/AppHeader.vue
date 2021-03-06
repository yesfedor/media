<template>
  <nav class="navbar navbar-expand-lg sticky-top theme-header">
    <div class="container">
      <router-link class="navbar-brand theme-title" to="/">{{logo}}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appNavbarTop" aria-controls="appNavbarTop" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars theme-title"></i>
      </button>
      <div class="collapse navbar-collapse" id="appNavbarTop">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link class="nav-link theme-title" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link theme-title" to="/search">Поиск</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link theme-title" to="/tops">В тренде</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="auth" class="nav-item">
              <router-link class="nav-link theme-title" to="/subscriptions">Подписки</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link theme-title" to="/auth">Аккаунт</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    logo: String
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
    get_auth (status) {
      this.auth = status
    }
  }
}
</script>

<style>
.navbar {
    -webkit-backdrop-filter: blur(12px) brightness(.7);
    backdrop-filter: blur(12px) brightness(.7);
    border-bottom: 1px solid #717170
}
</style>

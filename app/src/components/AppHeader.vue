<template>
  <nav class="navbar navbar-expand-lg sticky-top theme-header z-depth-0" :class="(position[1] === 0 ? '':'theme-panel-blur theme-border-bottom-header')">
    <div class="container">
      <router-link class="navbar-brand theme-title" to="/">{{logo}}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appNavbarTop" aria-controls="appNavbarTop" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars theme-title"></i>
      </button>
      <div class="collapse navbar-collapse" id="appNavbarTop">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link theme-title" to="/tops">В тренде</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link theme-title d-lg-none" to="/search">Поиск</router-link>
            <form class="d-none d-lg-block form-inline pl-3 w-100">
              <input v-if="searchBlock" @keypress.prevent.enter="goToSearch()" class="form-control border-white theme-header theme-panel-blur theme-title placeholder-text w-100" type="text" placeholder="Поиск" aria-label="Search" v-model="AppNavbarSearch">
            </form>
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
import windowScrollPosition from '../mixins/window-scroll-position'

export default {
  name: 'AppHeader',
  props: {
    logo: String
  },
  mixins: [windowScrollPosition('position')],
  data () {
    return {
      AppNavbarSearch: '',
      auth: undefined
    }
  },
  mounted () {
    this.auth = this.$store.getters.IS_AUTH
  },
  computed: {
    get_auth () {
      return this.$store.getters.IS_AUTH
    },
    searchBlock () {
      return (this.$route.name !== 'Search')
    }
  },
  methods: {
    goToSearch () {
      const searchUrl = `/search?request=${this.AppNavbarSearch}`
      if (this.$route.name === 'Watch') window.open(searchUrl, 'blank')
      else this.$router.push(searchUrl)
      this.AppNavbarSearch = ''
    }
  },
  watch: {
    get_auth (status) {
      this.auth = status
    }
  }
}
</script>

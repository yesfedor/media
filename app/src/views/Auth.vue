<template>
    <div class="container mt-3 pt-5">
      <div v-if="!status" class="row d-flex justify-content-center align-items-center mt-5">
        <div class="col-12 col-lg-6 my-3 py-3 border border-white rounded theme-panel text-center">
          <h3 class="theme-title my-0 py-3">Авторизация</h3>
          <h4 class="theme-text my-0 py-3">Выполните авторизацию на INY.SU, чтобы получить доступ к просмотру фильмов и сериалов</h4>
          <button class="btn btn-outline-white btn-rounded my-3 w-75" @click="authWithIny()">Авторизоваться</button>
        </div>
      </div>
      <div v-else class="row justify-content-center align-items-center mt-5">
        <div class="col-12 col-lg-7 text-center theme-panel rounded py-3">
          <h1 class="h1-responsive mt-0 mb-3 py-3">{{ getWelcomeText() }}</h1>
          <ul class="list-group border">
            <li class="list-group-item theme-panel-primary border border-primary theme-title py-3">Управление аккаунтом</li>
            <router-link to="/playlist/dashboard" class="list-group-item list-group-item-action theme-panel theme-title py-3">Плейлисты</router-link>
            <router-link to="/history" class="list-group-item list-group-item-action theme-panel theme-title py-3">История просмотров</router-link>
            <a class="list-group-item list-group-item-action theme-panel theme-title py-3" href="https://iny.su" target="_blank">Вернуться на INY.SU</a>
            <a @click.prevent="logout()" href="#" class="list-group-item list-group-item-action danger-color border-danger theme-title py-3">Выйти</a>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      user: {},
      status: ''
    }
  },
  methods: {
    getWelcomeText () {
      const MyHours = new Date().getHours()
      let welcomeText = ''
      switch (true) {
        case (MyHours >= 5) && (MyHours < 11) : welcomeText = 'Доброе утро, '
          break
        case (MyHours >= 11) && (MyHours < 16) : welcomeText = 'Добрый день, '
          break
        case (MyHours >= 16) && (MyHours <= 23) : welcomeText = 'Добрый вечер, '
          break
        case (MyHours >= 0) && (MyHours < 5) : welcomeText = 'Доброй ночи, '
          break
        default: welcomeText = 'Здравствуйте, '
          break
      }
      welcomeText += this.user.name
      return welcomeText
    },
    authWithIny () {
      open('https://iny.su/auth?to=media.iny.su&_origin=true&api=true')
    },
    logout () {
      this.$store.commit('LOGOUT')
    }
  },
  mounted () {
    document.title = 'Авторизация на INY Media'
    this.status = this.$store.getters.IS_AUTH
    this.user = this.$store.getters.USER
  },
  computed: {
    auth_staus () {
      return this.$store.getters.IS_AUTH
    },
    get_user () {
      return this.$store.getters.USER
    }
  },
  watch: {
    auth_staus (status) {
      this.status = status
    },
    get_user (user) {
      this.user = user
    }
  }
}
</script>

<style>
.border-primary {
  border-color: var(--theme-panel-primary);
}
.border-danger {
  border-color: var(--theme-danger);
}
</style>

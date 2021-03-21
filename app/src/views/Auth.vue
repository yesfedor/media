<template>
    <div class="container pt-5">
      <div v-if="!status" class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-lg-6 my-3 py-3 border border-white rounded theme-panel text-center">
          <h3 class="theme-title my-0 py-3">Авторизация</h3>
          <h4 class="theme-text my-0 py-3">Выполните авторизацию на INY.SU, чтобы получить доступ к просмотру фильмов и сериалов</h4>
          <button class="btn btn-outline-white btn-rounded my-3 w-75" @click="authWithIny()">Авторизоваться</button>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-12 text-center">
          <h1 class="my-0 py-3">Привет, {{user.name}} {{user.surname}}</h1>
          <button class="btn btn-outline-white btn-rounded my-3" @click="logout()">Выйти</button>
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

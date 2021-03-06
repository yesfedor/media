<template>
    <div class="container pt-5">
      <div v-if="!status" class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-lg-6 theme-panel border rounded text-center z-depth-3 px-0">
          <h3 class="mt-2 py-2">Войти</h3>
          <hr class="w-100 border-white mt-2">
          <form id="app-login" class="row my-0 py-0 p-3">
              <div class="col-12 md-form md-outline mt-1 mb-2">
                  <input v-model="login" @click="reset();" @keypress.enter="auth()" type="text" id="app-login-username" name="login-username" class="theme-text form-control" :class="{'border border-danger':(status_login == 'Логин' ? false : true)}">
                  <label :class="{'active text-danger':(status_login !== 'Логин' ? true : false)}" class="theme-panel mx-3" for="app-login-username">{{status_login}}</label>
              </div>
              <div class="col-12 md-form md-outline mt-1 mb-3">
                  <input v-model="password" @click="reset()" @keypress.enter="auth()" type="password" id="app-login-password" name="login-password" class="theme-text form-control" :class="{'border border-danger':(status_password == 'Пароль' ? false : true)}">
                  <label :class="{'active text-danger':(status_password !== 'Пароль' ? true : false)}" class="theme-panel mx-3" for="app-login-password">{{status_password}}</label>
              </div>
              <div class="col-12 text-center mb-2">
                  <button @click="auth()" type="button" class="btn btn-outline-white btn-rounded waves-effect z-depth-0 my-0">Войти</button>
              </div>
          </form>
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
      status_login: 'Логин',
      status_password: 'Пароль',
      login: '',
      password: '',
      status: ''
    }
  },
  methods: {
    auth () {
      if (this.login === '') {
        this.status_login = 'Введите логин или почту'
      }
      if (this.password === '') {
        this.status_password = 'Введите пароль'
      }
      if (this.login && this.password) {
        this.$store.dispatch('AUTH', { login: this.login, password: this.password })
      }
    },
    reset () {
      this.status_login = 'Логин'
      this.status_password = 'Пароль'
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

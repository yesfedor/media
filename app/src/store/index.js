import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {
      auth: false,
      uid: '',
      name: '',
      surname: '',
      jwt: ''
    }
  },
  getters: {
    IS_AUTH: state => {
      return state.user.auth
    },
    USER: state => {
      return state.user
    },
    JWT: state => {
      return state.user.jwt
    }
  },
  mutations: {
    LOGIN: (state, jwt) => {
      const user = JSON.parse(atob(jwt.split('.')[1]))
      state.user.auth = true
      state.user.name = user.name
      state.user.surname = user.surname
      state.user.jwt = jwt
      localStorage.setItem('jwt', jwt)
    },
    LOGOUT: state => {
      localStorage.setItem('jwt', 'LOGOUT')
      state.user = {
        auth: false,
        uid: '',
        name: '',
        surname: '',
        jwt: ''
      }
    }
  },
  actions: {
    AUTH: (context, payload) => {
      axios
        .get(`https://iny.su/api.php?_action=auth.jwt&v=0.1&login=${payload.login}&password=${payload.password}`)
        .then(res => {
          const user = res.data
          if (user.auth === true) context.commit('LOGIN', user.jwt)
        })
    },
    REGISTER: (context, payload) => {
      axios.get(`https://iny.su/api.php?_action=auth.jwt&v=0.1&login=${payload.login}&password=${payload.password}`)
    }
  },
  modules: {
  }
})

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
    },
    versions: [
      {
        version: 'media-v5.3.1',
        title: 'Bugfix #1',
        date: '03.07.2021',
        text: `
        <span class="mb-3">Список изменений:</span>
        <ul class="pl-1 pl-lg-4">
          <li>Исправления связанные с эффектом матового стекла</li>
          <li>Улучшение загрузки данных с сервера</li>
          <li>Начата разработка комментариев на сайте</li>
        </ul> 
        `
      },
      {
        version: 'media-v5.3.0',
        title: 'Bugfix #1',
        date: '02.07.2021',
        text: `
        <span class="mb-3">Список изменений:</span>
        <ul class="pl-1 pl-lg-4">
          <li>Исправления в работе плеера</li>
          <li>Исправления карточек сериалов и фильмов</li>
          <li>различные фиксы и улучшения</li>
        </ul>
        `
      },
      {
        version: 'media-v5.2.6',
        title: 'Изменения при загрузке данных',
        date: '28.06.2021',
        text: `
        <ul class="pl-1 pl-lg-4">
          <li>При загрузке страниц теперь показывается лоадер</li>
          <li>Если смотрите с компьютера - воспользуйтесь средней кнопкой мышки по карточке, чтобы открыть плеер в новом окне</li>
          <li>Исправен баг в рекомендациях, когда отображалось два одинаковых результата</li>
        </ul>
        `
      },
      {
        version: 'media-v5.2.0',
        title: 'Работа с плеером',
        date: '13.06.2021',
        text: 'Теперь при просмотре с компьютера вы можете читать факты, а в будущем и комментарии, плеер всегда будет виден на экране.'
      },
      {
        version: 'media-v5.1.2',
        title: 'Добавлен Changelog',
        date: '12.06.2021',
        text: 'Список версий и нововведений на сайте'
      }
    ]
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
    },
    VERSION_DATA: state => {
      return state.versions
    },
    VERSION_LAST: state => {
      return state.versions[0].version
    }
  },
  mutations: {
    LOGIN: (state, jwt) => {
      const user = JSON.parse(atob(jwt.split('.')[1]))
      state.user.auth = true
      state.user.uid = user.uid
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

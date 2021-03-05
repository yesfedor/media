<template>
  <div class="d-none d-lg-block bg-poster-image animated fadeIn" :style="{'background-image':getBgImage()}"></div>
  <div class="container-fluid">
    <div class="row py-3">
      <div class="col-12 col-md-10 offset-md-1">
        <div class="row">
          <div class="col-12 col-xl-9 mt-3">
            <div class="row">
              <div class="col-12 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src="getSrc()" frameborder="0" scrolling="no" allowfullscreen="" referrerpolicy="origin"></iframe>
              </div>
              <div class="col-12 px-3 px-md-0">
                <h4 class="w-75 text-left theme-title text-capitalize mt-3 mb-0 float-left">{{type}} {{nameRu}}</h4>
                <h4 class="w-25 text-right text-muted mt-3 mb-0 float-right">{{ratingAgeLimits}}</h4>
              </div>
              <hr class="w-100 theme-border-white mt-3 mb-3">
              <div class="col-12 col-lg-6 px-0 text-center text-lg-left">
                <h4 class="theme-text my-2">Информация к {{type}}у</h4>
              </div>
              <div class="col-12 col-lg-6 px-0 text-center text-lg-right mt-3 mt-lg-0">
                <a href="httpl://go.iny.su/donate" target="_blank" class="btn btn-outline-primary btn-rounded me-3">Донат</a>
                <button @click="subsManager()" class="btn btn-rounded theme-duration ml-3" :class="(is_subscription ? 'btn-outline-primary':'btn-outline-red')">{{(is_subscription ? 'Отписаться':'Подписаться')}}</button>
              </div>
              <div class="col-12 px-0 my-3">
                <ul class="list-group list-group-flush rounded">
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Год производства</span>
                    <span class="float-right w-50 text-left">{{year}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Страна</span>
                    <span class="float-right w-50 text-left">{{countries}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Жанр</span>
                    <span class="float-right w-50 text-left">{{genres}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Слоган</span>
                    <span class="float-right w-50 text-left">{{slogan}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Время</span>
                    <span class="float-right w-50 text-left">{{filmLength}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="text-left theme-title">Описание:</span> {{description}}
                  </li>
                </ul>
              </div>
            <div class="col-12 theme-panel rounded text-center py-3 my-3">
              <h4 class="text-center text-center theme-title py-3 mb-3">Факты</h4>
              <div class="row">
                <template v-if="facts.length > 0">
                  <h5 v-for="(content, idx) in facts" :key="idx" class="d-block theme-text text-left px-3 mb-3">
                    <span class="theme-link">#{{idx + 1}}</span> {{content}}
                  </h5>
                </template>
                <h5 v-else class="d-block theme-text text-center px-3 mb-3">
                  Факты еще не подобраны
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-3">
          <div class="row px-0 pl-xl-5 ">
            <div class="col-12 text-center mb-3">
              <h4 class="my-0 py-3">Рекомендации</h4>
            </div>
          </div>
          <div class="row px-0 pl-xl-5">
            <MediaCart v-for="cart in recoms" :key="cart.filmId" view="max-content" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCart from '../components/MediaCart'

export default {
  name: 'Watch',
  components: {
    MediaCart
  },
  props: {
    kpid: String
  },
  data () {
    return {
      auth: undefined,
      type: '',
      nameRu: '',
      ratingAgeLimits: '',
      slogan: '',
      year: '',
      description: '',
      premiereWorldCountry: '',
      filmLength: '',
      countries: '',
      genres: '',
      facts: [],
      is_subscription: false,
      subscriptionCount: 0,
      recoms: []
    }
  },
  mounted () {
    this.auth = this.$store.getters.IS_AUTH
    if (!this.auth) this.$router.push('/')
    this.render()
    this.getRecoms()
  },
  methods: {
    render () {
      axios
        .get(`https://iny.su/api.php?_action=media.watch&v=0.1&kpid=${this.kpid}&jwt=${this.$store.getters.JWT}`)
        .then(res => {
          const watchData = res.data.watchData.data
          if (res.data.is_subscription === 'subscribe') this.is_subscription = true
          else this.is_subscription = false
          this.subscriptionCount = res.data.subscriptionCount
          if (watchData.type === 'FILM') this.type = 'фильм'
          if (watchData.type === 'TV_SHOW') this.type = 'сериал'
          this.nameRu = watchData.nameRu
          this.ratingAgeLimits = (watchData.ratingAgeLimits ? watchData.ratingAgeLimits : '16+')
          this.slogan = watchData.slogan
          this.year = watchData.year
          this.description = watchData.description
          this.premiereWorldCountry = watchData.premiereWorldCountry
          this.filmLength = watchData.filmLength
          this.facts = (watchData.facts.length > 0 ? watchData.facts : [])

          const countries = []
          watchData.countries.map(obj => {
            countries.push(obj.country)
          })
          this.countries = countries.join(', ')

          const genres = []
          watchData.genres.map(obj => {
            genres.push(obj.genre)
          })
          this.genres = genres.join(', ')
        })
    },
    getRecoms () {
      axios
        .get('https://iny.su/api/0.1/media/mediaWatchRecoms.json')
        .then(res => {
          this.recoms = res.data
        })
    },
    subsManager () {
      let act = ''
      if (this.is_subscription === true) {
        this.is_subscription = false
        act = 'unsubscribe'
      } else {
        this.is_subscription = true
        act = 'subscribe'
      }
      axios.get(`https://iny.su/api.php?_action=media.subscription&v=0.1&act=${act}&kpid=${this.kpid}&jwt=${this.$store.getters.JWT}`)
    },
    getSrc () {
      return `https://dud.allohalive.com/?kp=${this.kpid}&token=10b16a40f5793e2d02d06265c13912`
    },
    getBgImage () {
      return `url(https://kinopoiskapiunofficial.tech/images/posters/kp/${this.kpid}.jpg)`
    }
  },
  computed: {
    get_auth () {
      return this.$store.getters.IS_AUTH
    }
  },
  watch: {
    get_auth (isAuth) {
      this.auth = isAuth
    },
    kpid () {
      this.render()
      this.getRecoms()
    }
  }
}
</script>

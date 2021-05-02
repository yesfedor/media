<template>
  <div class="conteiner-fluid">
    <div class="row mt-3">
      <div class="col-12 col-md-10 offset-md-1">
        <!-- Wrapper -->
        <div class="row my-3">
          <div class="col-12 col-md-3">
            <div class="row">
              <!-- Image -->
              <div class="col-12">
                <img itemprop="image" :src="'https://kinopoiskapiunofficial.tech/images/posters/kp/' + kpid + '.jpg'" alt="thumbnail" class="img-thumbnail" style="width: 100%"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="row">
              <!-- Base Info -->
              <div class="col-12 px-0">
                <h1 itemprop="name" class="text-center text-left theme-panel rounded theme-title font-weight-bold py-3 my-0 z-depth-1 mb-3">
                  {{nameRu}}
                </h1>
                <div class="row px-md-3" :class="(!trailerSrc ? 'd-none':'my-3')">
                  <div class="col-12 my-3 theme-panel embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="trailerSrc" allowfullscreen=""></iframe>
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item theme-panel theme-title">
                    Информация:
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Год производства</span>
                    <span itemprop="dateCreated" class="float-left w-50 text-left">{{year}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Страна</span>
                    <span class="float-left w-50 text-left">{{countries}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Жанр</span>
                    <span class="float-left w-50 text-left">{{genres}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Слоган</span>
                    <span class="float-left w-50 text-left">{{slogan}}</span
                    >
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span class="float-left w-50 text-left theme-title">Время</span>
                    <span itemprop="duration" class="float-left w-50 text-left">{{filmLength}}</span>
                  </li>
                  <li class="list-group-item theme-panel theme-text">
                    <span itemprop="description" class="float-left text-left theme-title">Описание:<br />{{description}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-12 theme-panel rounded text-center py-3 mt-3">
                <a class="h3 theme-title py-3 my-0" :href="'https://iny.su/auth?to=media.iny.su&_origin=true&api=true&kpid=' + kpid">
                  Авторизоваться, что бы начать просмотр
                </a>
              </div>
              <div class="col-12 theme-panel rounded text-center py-3 my-3">
                <h1 class="text-center text-center theme-title py-3 mb-3">Факты</h1>
                <div class="row">
                  <template v-if="facts?.length > 0">
                  <h5 v-for="(content, idx) in facts" :key="idx" class="d-block theme-text text-left px-3 mb-3">
                    <span class="theme-link">#{{idx + 1}}</span> {{content}}
                  </h5>
                  </template>
                  <div v-else class="col-12">
                    <h5 class="d-block theme-text text-center px-3 mb-3">Факты еще не подобраны</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WatchAuthFalse',
  props: {
    kpid: String
  },
  data () {
    return {
      nameRu: undefined,
      trailerSrc: false,
      year: undefined,
      countries: undefined,
      genres: undefined,
      slogan: undefined,
      filmLength: undefined,
      description: undefined,
      facts: undefined,
      jwtFree: 'eyJhbGciOiJzaGEyNTYiLCJ0eXAiOiJKV1QiLCJ1bmlxdWUiOiIxOSJ9.eyJ1aWQiOiIxOSIsIm5hbWUiOiJJTlkiLCJzdXJuYW1lIjoiTWVkaWEiLCJtYWlsIjoibWVkaWFGcmVlQGlueS5zdSIsImF1dGgiOnRydWV9.5330ea31f0ce3a4f126dab8b592eaf9711a0c2a764c95b8d8eecf2af75acfa8d'
    }
  },
  methods: {
    load () {
      axios
        .get(`https://iny.su/api.php?_action=media.watch&v=0.1&kpid=${this.kpid}&jwt=${this.jwtFree}`)
        .then(res => {
          const watchData = res.data.watchData.data

          // trailerSrc
          this.nameRu = watchData.nameRu
          if (watchData.type === 'FILM') this.type = 'фильм'
          if (watchData.type === 'TV_SHOW') this.type = 'сериал'
          if (watchData.slogan) this.slogan = watchData.slogan
          else this.slogan = '-'
          this.year = watchData.year
          this.description = watchData.description
          this.premiereWorldCountry = watchData.premiereWorldCountry
          this.filmLength = watchData.filmLength
          this.facts = (watchData.facts.length > 0 ? watchData.facts : [])
          document.title = `Авторизуйтесь для просмотра ${this.type} ${this.nameRu}`
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
    }
  },
  mounted () {
    this.load()
    console.log(this.auth)
  }
}
</script>

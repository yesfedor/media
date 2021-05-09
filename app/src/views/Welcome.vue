<template>
  <div class="container-fluid px-0">
    <div class="view jarallax h90vh">
      <img class="jarallax-img" src="https://go.iny.su/uc/cc4ca42/v6f7584/8abc67c6/4dbea97c0d7.jpg" alt="">
      <div class="mask pattern-1">
        <div class="row h60vh align-items-end">
          <div class="col-10 col-lg-3 offset-1 text-center text-lg-left">
            <h1 class="h1-responsive font-weight-bold theme-title my-0">Лучшее кино<br> у вас дома</h1>
            <p class="theme-text font-weight-lighter mt-3">
              В INY Media собрана библиотека лучших фильмов и сериалов.
              Смотрите их в любимой озвучке LostFilm, NewStudio, AlexFilm и др. - онлайн.
            </p>
            <button @click="goMainAction()" class="btn purple-gradient mx-0 my-2">Смотреть бесплатно</button>
            <p class="text-monospace theme-title">Пройдите быструю регистрацию и смотрите - бесплатно</p>
          </div>
        </div>
        <div class="d-none d-lg-flex row h30vh align-items-center">
          <div class="col-3 offset-1 flex-center">
            <i class="far fa-list-alt purple-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Более 25 000 фильмов и сериалов<br>уже в библиотеке для<br>вас и вашей семьи
            </p>
          </div>
          <div class="col-4 flex-center">
            <i class="fas fa-user-check purple-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Большой список рекомендаций на<br>основе ваших интересов
            </p>
          </div>
          <div class="col-3 flex-center">
            <i class="fas fa-globe-europe purple-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Фильмы и сериалы со всего света<br>Включая все популярные<br>студии мира
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row deep-purple darken-3 align-items-center h50vh">
      <div class="col-10 offset-1 text-center">
        <div class="row">
          <div class="d-flex justify-content-between col-12 text-center text-lg-left mb-5">
            <h2 class="w-75 h1-responsive font-weight-bold theme-title my-0">Фильмы с высоким рейтигном</h2>
            <button @click="goAllFilm()" class="w-25 btn btn-link my-0 theme-title">Все фильмы</button>
          </div>
          <MediaCart view="default" :kpid="'1387021'" :type="'FILM'" :nameRu="'Лига справедливости Зака Снайдера'" :year="'2021'" />
          <MediaCart view="default" :kpid="'1309596'" :type="'FILM'" :nameRu="'Никто'" :year="'2021'" />
          <MediaCart view="default" :kpid="'1015471'" :type="'FILM'" :nameRu="'Райя и последний дракон'" :year="'2021'" />
          <MediaCart view="default" :kpid="'1202296'" :type="'FILM'" :nameRu="'Палмер'" :year="'2021'" />
        </div>
      </div>
    </div>
    <div class="row deep-purple darken-4 align-items-center text-center h10vh">
      <div class="col-10 offset-1 text-center">
        <button @click="goMainAction()" class="btn purple-gradient mx-0 my-2 w-100">Перейти к авторизации</button>
      </div>
    </div>
  </div>
</template>

<script>
import MediaCart from '../components/MediaCart'
export default {
  name: 'Welcome',
  components: {
    MediaCart
  },
  data () {
    return {
    }
  },
  methods: {
    goMainAction () {
      this.$router.push('/auth')
    },
    goAllFilm () {
      this.$router.push('/search')
    },
    init () {
      // eslint-disable-next-line
      eval(`jarallax(document.querySelectorAll('.jarallax'));jarallax(document.querySelectorAll('.jarallax-keep-img'),{keepImg: true});`)
      // maybeWelcome set
      localStorage.setItem('isWelcomeShowV1', 'true')
    }
  },
  computed: {
  },
  mounted () {
    document.title = 'INY Media - больше возможностей, а также полное погружение в мир кинолент'
    this.init()
  }
}
</script>

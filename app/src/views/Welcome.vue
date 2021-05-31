<template>
  <div class="container-fluid px-0">
    <div class="view jarallax h90vh">
      <img class="jarallax-img" src="https://go.iny.su/uc/cc4ca42/v6f7584/8abc67c6/4dbea97c0d7.jpg" alt="">
      <div class="mask pattern-6">
        <div class="row h60vh align-items-end">
          <div class="col-10 col-lg-3 offset-1 text-center text-lg-left">
            <h1 class="h1-responsive font-weight-bold theme-title my-0">Лучшее кино<br> у вас дома</h1>
            <p class="theme-text font-weight-lighter mt-3">
              В INY Media собрана библиотека лучших фильмов и сериалов.
              Смотрите их в любимой озвучке LostFilm, NewStudio, AlexFilm и др. - онлайн.
            </p>
            <button @click="goMainAction()" class="btn blue-gradient mx-0 my-2">Регистрируйтесь бесплатно</button>
            <p class="text-monospace theme-title">Пройдите быструю регистрацию и смотрите - бесплатно</p>
          </div>
        </div>
        <div class="d-none d-lg-flex row h30vh align-items-center justify-content-around">
          <div class="col-3 flex-center rgba-black-strong rounded py-3">
            <i class="far fa-list-alt cyan-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Более 25 000 фильмов и сериалов<br>уже в библиотеке для<br>вас и вашей семьи
            </p>
          </div>
          <div class="col-3 flex-center rgba-black-strong rounded py-3">
            <i class="fas fa-user-check blue-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Выбирайте фильм или сериал<br> на основе ваших интересов,<br>смотрите популярные плейлисты
            </p>
          </div>
          <div class="col-3 flex-center rgba-black-strong rounded py-3">
            <i class="fas fa-globe-europe indigo-text fa-2x"></i>
            <p class="d-inline theme-title font-weight-lighter pl-3">
              Фильмы и сериалы со всего света<br>Включая все популярные<br>студии мира
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="blue-gradient">
      <div class="row align-items-center h50vh">
        <div class="col-10 offset-1 text-center">
          <div class="row">
            <div class="d-flex justify-content-between col-12 text-center text-lg-left mb-5">
              <h2 class="w-100 w-lg-75 h1-responsive font-weight-bold theme-title my-0 my-3 my-lg-0">Фильмы с высоким рейтигном</h2>
            </div>
            <MediaCart view="default" :kpid="'1387021'" :type="'FILM'" :nameRu="'Лига справедливости Зака Снайдера'" :year="'2021'" theme="card-poster-light" />
            <MediaCart view="default" :kpid="'1309596'" :type="'FILM'" :nameRu="'Никто'" :year="'2021'" theme="card-poster-light" />
            <MediaCart view="default" :kpid="'1015471'" :type="'FILM'" :nameRu="'Райя и последний дракон'" :year="'2021'" theme="card-poster-light" />
            <MediaCart view="default" :kpid="'1202296'" :type="'FILM'" :nameRu="'Палмер'" :year="'2021'" theme="card-poster-light" />
          </div>
        </div>
      </div>
      <hr class="border border-white">
      <div class="row align-items-center h50vh">
        <div class="col-10 offset-1 text-center">
          <div class="row">
            <div class="d-flex justify-content-between col-12 text-center text-lg-left mb-5">
              <h2 class="w-100 w-lg-75 h1-responsive font-weight-bold theme-title my-0 my-3 my-lg-0">Популярные плейлисты</h2>
            </div>
            <MediaPlaylist initState="closed" alias="welcome_netflix" :actionBtn="false" theme="card-poster-light" />
            <MediaPlaylist initState="closed" alias="welcome_apple" :actionBtn="false" theme="card-poster-light" />
            <MediaPlaylist initState="closed" alias="welcome_hbo" :actionBtn="false" theme="card-poster-light" />
            <MediaPlaylist initState="closed" alias="welcome_showtime" :actionBtn="false" theme="card-poster-light" />
          </div>
        </div>
      </div>
      <hr class="border border-white">
      <div class="row align-items-center h50vh text-center">
        <div class="col-10 offset-1 text-center px-0">
          <h3 class="h1-responsive theme-title mb-5">
            Вы уже написали в гугле «сериал смотреть онлайн» и листаете большой перечень ресурсов, где между волнующего момента возлюбленного телесериала вам нежданно-негаданно предложат сделать ставку или узнать о волшебном средстве, которое вылечит от всех болезней. Дальше лучше не листать, вы на верном пути: на INY Media возможно законно смотреть знаменитые телесериалы онлайн, не отрываясь на рекламу и прочую суету.
          </h3>
          <button @click="goMainAction()" class="btn btn-outline-white mx-0 my-2 w-50 mx-0">Перейти к авторизации</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaCart from '../components/MediaCart'
import MediaPlaylist from '../components/MediaPlaylist'

export default {
  name: 'Welcome',
  components: {
    MediaCart,
    MediaPlaylist
  },
  data () {
    return {
    }
  },
  methods: {
    goMainAction () {
      this.$router.push('/auth')
    },
    init () {
      // eslint-disable-next-line
      jarallax(document.querySelectorAll('.jarallax'), {speed: 0});
      // maybeWelcome set
      localStorage.setItem('isWelcomeShowV2', 'true')
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

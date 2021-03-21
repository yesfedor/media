<template>
  <MediaCarousel />
  <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3 theme-panel rounded text-center my-3 py-5">
          <h1 class="h4 theme-title mb-1 px-1 px-lg-4 font-weight-lighter">
            Вы уже написали в гугле «сериал смотреть онлайн» и листаете большой перечень ресурсов, где между волнующего момента возлюбленного телесериала вам нежданно-негаданно предложат сделать ставку или узнать о волшебном средстве,            которое вылечит от всех болезней. Дальше лучше не листать, вы на
            верном пути: на INY Media возможно законно смотреть знаменитые телесериалы онлайн, не
            отрываясь на рекламу и прочую суету.
          </h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <MediaPlaylist initState="opened" alias="1" />
      </div>
  </div>
</template>

<script>
import MediaCarousel from '../components/MediaCarousel'
import MediaPlaylist from '../components/MediaPlaylist'
/*
  main list(tops):
*/
export default {
  name: 'Main',
  props: {
    auth: String,
    _origin: String
  },
  components: {
    MediaCarousel,
    MediaPlaylist
  },
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    if (this.auth !== '' && this._origin === 'iny.su') {
      this.$store.commit('LOGIN', this.auth)
      this.$router.push('/')
    }

    document.title = 'INY Media - Онлайн кинотеатр'
  }
}
</script>

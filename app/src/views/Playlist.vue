<template>
  <div class="container-fluid px-0 px-lg-3">
    <template v-if="playlistData.length > 0">
      <div class="view jarallax h90vh">
        <img class="jarallax-img" :src="getPoster()" alt="Playlist logo">
        <div class="mask pattern-6">
          <div class="row h90vh align-items-center">
            <div class="col-10 col-lg-3 offset-1 text-center text-lg-left">
              <h1 class="h1-responsive font-weight-bold theme-title my-0">{{title}}</h1>
              <p class="theme-text font-weight-lighter mt-3">
                {{description}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3 px-3">
        <MediaCart v-for="cart in playlistData" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
      </div>
    </template>
    <div v-else class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4">
        <h4 class="mt-2 mb-3">Плейлист не найден</h4>
        <router-link class="btn btn-outline-white btn-rounded mt-3 mb-2 z-depth-0" to="/search">К поиску</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCart from '../components/MediaCart'

export default {
  name: 'Playlist',
  components: {
    MediaCart
  },
  props: {
    alias: String
  },
  data () {
    return {
      title: '',
      description: '',
      poster: '',
      owner_uid: '',
      playlistData: []
    }
  },
  methods: {
    jarallax () {
      setTimeout(() => {
        // eslint-disable-next-line
        jarallax(document.querySelectorAll('.jarallax'), {speed: 0});
      }, 800)
    },
    getPoster () {
      this.jarallax()
      return this.poster
    }
  },
  mounted () {
    document.title = 'Подборка на INY Media'
    axios
      .get('https://iny.su/api.php?_action=media.playlist&v=0.1&act=get&alias=' + this.alias)
      .then(res => {
        this.title = res.data.playlist.title
        this.description = res.data.playlist.description
        this.poster = res.data.playlist.poster
        this.owner_uid = res.data.playlist.owner_uid
        this.playlistData = res.data.playlist.content
        this.jarallax()
      })
  }
}
</script>

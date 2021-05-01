<template>
  <div class="container-fluid pt-5">
    <template v-if="playlistData.length > 0">
      <div class="row">
        <div class="col-12 col-lg-4 offset-lg-4 theme-panel z-depth-1 text-center mb-5 rounded px-0">
          <h1 class="h1-responsive mb-3 py-3 px-2 px-lg-3">{{title}}</h1>
          <hr class="w-100">
          <h5 v-if="description" class="h5-responsive theme-text mb-3 py-3 px-2 px-lg-3">{{description}}</h5>
        </div>
      </div>
      <div class="row justify-content-center">
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
      owner_uid: '',
      playlistData: []
    }
  },
  mounted () {
    document.title = 'Подборка на INY Media'
    axios
      .get('https://iny.su/api.php?_action=media.playlist&v=0.1&act=get&alias=' + this.alias)
      .then(res => {
        this.title = res.data.playlist.title
        this.description = res.data.playlist.description
        this.owner_uid = res.data.playlist.owner_uid
        this.playlistData = res.data.playlist.content
      })
  }
}
</script>

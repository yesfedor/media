<template>
  <div v-if="state === 'closed'" class="col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9">
    <div @click="go()" class="row justify-content-center align-items-center card-poster theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer" :style="{'background-image':getBgImage()}">
      <div class="col-12 text-center">
        <h4 class="white-text text-capitalize my-2">{{label_type}}</h4>
      </div>
      <div class="col-12 text-center">
        <h4 class="white-text text-capitalize my-2 text-truncate">{{title}}</h4>
      </div>
      <div class="col-12 text-center">
        <button @click.stop="toggleState()" class="btn btn-outline-white btn-rounded btn-large my-2 w-100">{{(state === 'closed' ? 'Раскрыть':'Скрыть')}}</button>
      </div>
    </div>
  </div>
  <div v-else class="col-12">
    <div class="row mb-3">
      <div @click="go()" class="col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9">
        <div class="row justify-content-center align-items-center card-poster theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer" :style="{'background-image':getBgImage()}">
          <div class="col-12 text-center">
            <h4 class="white-text my-2">{{label_type}}</h4>
          </div>
          <div class="col-12 text-center">
            <h4 class="white-text my-2 text-truncate">{{title}}</h4>
          </div>
          <div class="col-12 text-center">
            <button @click.stop="toggleState()" class="btn btn-outline-white btn-rounded my-2 w-100">{{(state === 'closed' ? 'Раскрыть':'Скрыть')}}</button>
          </div>
        </div>
      </div>
      <MediaCart v-for="cart in playlistData.slice(0, 3)" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
    </div>
  </div>
</template>

<script>
import MediaCart from './MediaCart'
import axios from 'axios'

export default {
  name: 'MediaPlaylist',
  components: {
    MediaCart
  },
  props: {
    alias: String,
    initState: String
  },
  data () {
    return {
      state: 'closed', // closed or opened
      title: '',
      label_type: 'Плейлист',
      playlistData: []
    }
  },
  methods: {
    go () {
      this.$router.push('/playlist/' + this.alias)
    },
    toggleState () {
      if (this.state === 'closed') this.state = 'opened'
      else this.state = 'closed'
    },
    getBgImage () {
      let firstKpid = 0
      if (this.playlistData.length >= 4) firstKpid = this.playlistData[this.playlistData.length - 1]?.filmId
      else firstKpid = this.playlistData[0]?.filmId
      return `url(https://kinopoiskapiunofficial.tech/images/posters/kp/${firstKpid}.jpg)`
    }
  },
  mounted () {
    if (this.initState) this.state = this.initState
    axios
      .get('https://iny.su/api.php?_action=media.playlist&v=0.1&act=get&alias=' + this.alias)
      .then(res => {
        this.title = res.data.playlist.title
        this.playlistData = res.data.playlist.content
      })
  }
}
</script>

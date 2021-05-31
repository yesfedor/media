<template>
  <div class="container-fluid mt-3 pt-5">
    <div class="row">
      <div class="col-12 col-lg-4 offset-lg-4 text-center rounded text-content theme-panel my-3 py-3">
        <h3 class="theme-title my-0 py-3">Мои плейлисты</h3>
        <!-- <button @click="state = 'playlist-create'" :class="(state === 'playlist-create' ? 'btn-white':'btn-outline-white')" class="btn btn-rounded z-depth-0">Создать</button>
        <button @click="state = 'my-playlist'" :class="(state === 'my-playlist' ? 'btn-white':'btn-outline-white')" class="btn btn-rounded z-depth-0">Мои плейлисты</button> -->
      </div>
    </div>
    <div v-if="state === 'my-playlist'" class="row justify-content-center">
      <template v-if="myPlaylist.length > 0">
        <MediaPlaylist v-for="playlist in myPlaylist" :key="playlist.id" initState="closed" :alias="playlist.id" :actionBtn="false" />
      </template>
      <div class="col-12 text-center my-3 py-3" v-else>
        <h4 class="theme-text my-0 py-3">У вас нет плейлистов</h4>
      </div>
    </div>
    <div v-if="state === 'playlist-create'" class="row justify-content-center">
      <MediaPlaylistCreate />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaPlaylist from '../components/MediaPlaylist.vue'
import MediaPlaylistCreate from '../components/MediaPlaylistCreate.vue'

export default {
  name: 'PlaylistDashboard',
  components: {
    MediaPlaylist,
    MediaPlaylistCreate
  },
  data () {
    return {
      state: 'my-playlist',
      isLeaveWarn: false,
      auth: undefined,
      myPlaylist: []
    }
  },
  methods: {
    render () {
      document.title = 'Работа с плейлистами'
      this.getMyPlaylistByUid()
    },
    getMyPlaylistByUid () {
      const user = this.$store.getters.USER
      axios
        .get(`https://iny.su/api.php?_action=media.playlist&v=0.1&act=getByUid&owner_uid=${user.uid}`)
        .then(res => {
          this.myPlaylist = res.data.playlists
        })
    }
  },
  mounted () {
    this.auth = this.$store.getters.IS_AUTH
    if (this.auth) this.render()
    else this.$router.push('/auth')
  },
  computed: {
    get_auth () {
      return this.$store.getters.IS_AUTH
    }
  },
  watch: {
    get_auth (isAuth) {
      console.log(isAuth)
      if (!isAuth) this.$router.push('/auth')
      this.auth = isAuth
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.isLeaveWarn) {
      const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
      if (answer) {
        next()
      }
      next(false)
    }
    next()
  }
}
</script>

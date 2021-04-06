<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-4 offset-lg-4 text-center rounded text-content theme-panel my-3 py-3">
        <h3 class="my-0 py-3">Плейлисты</h3>
        <button class="btn btn-outline-white btn-rounded">Создать</button>
        <button class="btn btn-outline-white btn-rounded">Мои плейлисты</button>
      </div>
    </div>
    <div v-if="state === 'my-playlist'" class="row justify-content-center">
      <template v-if="myPlaylist.length > 0">
        <MediaPlaylist v-for="id in myPlaylist" :key="id" initState="closed" :alias="id" />
      </template>
      <div class="col-12 text-center my-3 py-3" v-else>
        <h4 class="theme-text my-0 py-3">У вас нет плейлистов</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaPlaylist from '../components/MediaPlaylist.vue'

export default {
  name: 'PlaylistDashboard',
  components: {
    MediaPlaylist
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
    getMyPlaylistByUid () {
      const user = this.$store.getters.USER
      axios
        .get(`https://iny.su/api.php?_action=media.playlist&v=0.1&act=getByUid&owner_uid=${user.uid}`)
        .then(res => {
          this.myPlaylist = res.data.playlists
          console.log(res.data.playlists)
        })
    }
  },
  mounted () {
    document.title = 'Работа с плейлистами'
    this.getMyPlaylistByUid()
  },
  computed: {
    get_auth () {
      return this.$store.getters.IS_AUTH
    }
  },
  watch: {
    get_auth (isAuth) {
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

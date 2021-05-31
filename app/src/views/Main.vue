<template>
  <div class="container-fluid px-0 px-lg-3">
    <MediaCarousel />
    <div class="row justify-content-center mt-3 px-lg-3">
      <MediaPlaylist initState="opened" alias="welcome_netflix" />
      <MediaPlaylist initState="opened" alias="welcome_apple" />
      <MediaPlaylist initState="opened" alias="welcome_hbo" />
      <MediaPlaylist initState="opened" alias="welcome_showtime" />
      <MediaPlaylist initState="opened" alias="welcome_amc" />
    </div>
  </div>
</template>

<script>
import MediaCarousel from '../components/MediaCarousel'
import MediaPlaylist from '../components/MediaPlaylist'
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
      data: '',
      isAuth: false
    }
  },
  methods: {
    maybeWelcome () {
      const isWelcomeShow = localStorage.getItem('isWelcomeShowV2') || false
      if (!isWelcomeShow) this.$router.push('/welcome')
    }
  },
  computed: {
    auth_staus () {
      return this.$store.getters.IS_AUTH
    }
  },
  mounted () {
    this.maybeWelcome()
    if (this.auth !== '' && this._origin === 'iny.su') {
      this.$store.commit('LOGIN', this.auth)
      this.$router.push('/')
    }

    if (this.$store.getters.IS_AUTH) this.$router.push('/feed')
    document.title = 'INY Media - Онлайн кинотеатр'
  },
  watch: {
    auth_staus (status) {
      if (status) this.$router.push('/feed')
    }
  }
}
</script>

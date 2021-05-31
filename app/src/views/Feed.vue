<template>
  <div class="container-fluid px-0 px-lg-3">
    <MediaCarousel />
    <div class="row justify-content-center mt-3 px-3">
      <MediaCart v-for="cart in feedData" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCarousel from '../components/MediaCarousel'
import MediaCart from '../components/MediaCart'

export default {
  name: 'Feed',
  components: {
    MediaCarousel,
    MediaCart
  },
  data () {
    return {
      isAuth: false,
      feedData: []
    }
  },
  computed: {
    auth_staus () {
      return this.$store.getters.IS_AUTH
    }
  },
  mounted () {
    if (!this.$store.getters.IS_AUTH) this.$router.push('/')

    axios
      .get('https://iny.su/api.php?_action=media.getTop10&v=0.1')
      .then(res => {
        this.feedData = res.data.topData
      })

    document.title = 'INY Media - Онлайн кинотеатр'
  },
  watch: {
    auth_staus (status) {
      if (!status) this.$router.push('/')
    }
  }
}
</script>

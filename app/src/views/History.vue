<template>
  <div class="container-fluid mt-5 pt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="theme-title mb-3 py-3">Просмотренное на сайте за все время</h1>
      </div>
    </div>
    <div v-if="viewed.length > 0" class="row justify-content-center">
      <MediaCart v-for="cart in viewed" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4">
        <h4 class="theme-title mt-2 mb-3">Как-то здесь пусто</h4>
        <router-link class="btn btn-outline-white btn-rounded mt-3 mb-2 z-depth-0" to="/search">К поиску</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCart from '../components/MediaCart'

export default {
  name: 'Viewed',
  components: {
    MediaCart
  },
  data () {
    return {
      viewed: []
    }
  },
  methods: {
    loadViewed () {}
  },
  mounted () {
    document.title = 'Просмотренное на сайте за все время'
    if (this.$store.getters.IS_AUTH) {
      axios
        .get('https://iny.su/api.php?_action=media.getDistinctHistory&v=0.1&jwt=' + this.$store.getters.JWT)
        .then(res => {
          const viewed = res.data.viewed
          this.viewed = res.data.viewed
          console.log(typeof viewed)
        })
    } else this.$router.push('/auth')
  }
}
</script>

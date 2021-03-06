<template>
  <div class="container-fluid pt-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1 class="mb-3 py-3">Поиск</h1>
      </div>
      <div class="col-12 col-md-6 col-lg-4 md-form md-outline px-0">
        <input v-model="query" @change="search()" @keypress.enter="search()" type="search" id="searchinput" class="form-control theme-panel theme-title">
        <label class="active theme-panel mx-2" for="searchinput">Начните искать</label>
      </div>
    </div>
    <div v-if="code == 200" class="row justify-content-center">
      <MediaCart v-for="cart in searchData" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4">
        <h4 class="my-2">Ничего не нашлось</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCart from '../components/MediaCart'

export default {
  name: 'Search',
  components: {
    MediaCart
  },
  data () {
    return {
      code: 404,
      searchData: [],
      query: ''
    }
  },
  methods: {
    search () {
      axios
        .get('https://iny.su/api.php?_action=media.search&v=0.1&query=' + this.query)
        .then(res => {
          this.$router.replace('/search?request=' + this.query)
          this.code = res.data.code
          this.searchData = res.data.content
        })
    }
  },
  mounted () {
    document.title = 'Поиск фильмов и сериалов'
    if (this.$router.currentRoute._value.query?.request) {
      this.query = this.$router.currentRoute._value.query?.request
      this.search()
    }
  }
}
</script>

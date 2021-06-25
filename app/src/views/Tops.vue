<template>
  <div class="container-fluid mt-3 pt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="theme-title mb-3 py-3">В тренде</h1>
      </div>
    </div>
    <loader-slot :state="axiosStatus">
      <template #data200>
        <div class="row justify-content-center">
          <MediaCart v-for="cart in topsData" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
        </div>
      </template>
      <template #data404>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4">
            <h4 class="mt-2 mb-3">Как-то здесь пусто</h4>
            <router-link class="btn btn-outline-white btn-rounded mt-3 mb-2 z-depth-0" to="/search">К поиску</router-link>
          </div>
        </div>
      </template>
    </loader-slot>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCart from '../components/MediaCart'
import LoaderSlot from '../components/LoaderSlot'

export default {
  name: 'Tops',
  components: {
    MediaCart,
    LoaderSlot
  },
  data () {
    return {
      axiosStatus: 'loading',
      topsData: []
    }
  },
  mounted () {
    document.title = 'Топ 10 самых просматриваемых фильмов и сериалов'
    axios
      .get('https://iny.su/api.php?_action=media.getTop10&v=0.1')
      .then(res => {
        this.topsData = res?.data?.topData
        if (res?.data?.topData?.length > 0) this.axiosStatus = 'data200'
        else this.axiosStatus = 'data404'
      })
  }
}
</script>

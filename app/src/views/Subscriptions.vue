<template>
  <div class="container-fluid mt-3 pt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="theme-title mb-3 py-3">Мои подписки</h1>
      </div>
    </div>
    <loader-slot :state="axiosStatus">
      <template #data200>
        <div class="row justify-content-center">
          <MediaCart v-for="cart in recoms" :key="cart.filmId" view="default" :kpid="cart.filmId" :type="cart.type" :nameRu="cart.nameRu" :year="cart.year" />
        </div>
      </template>
      <template #data404>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4">
            <h4 class="theme-title mt-2 mb-3">Как-то здесь пусто</h4>
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
  name: 'Subscriptions',
  components: {
    MediaCart,
    LoaderSlot
  },
  data () {
    return {
      axiosStatus: '',
      recoms: []
    }
  },
  mounted () {
    document.title = 'Мои подписки'
    if (this.$store.getters.IS_AUTH) {
      this.axiosStatus = 'loading'
      axios
        .get('https://iny.su/api.php?_action=media.getSubscribe&v=0.1&jwt=' + this.$store.getters.JWT)
        .then(res => {
          this.recoms = res?.data?.subsData
          if (res?.data?.subsData?.length > 0) this.axiosStatus = 'data200'
          else this.axiosStatus = 'data404'
        })
    } else this.$router.push('/auth')
  }
}
</script>

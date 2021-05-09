<template>
  <div id="media-carousel-1" class="carousel slide carousel-fade z-depth-0" data-interval="3000" data-ride="false">
    <ol class="carousel-indicators">
      <li v-for="(value, key, index) in mediaData" :key="key" data-target="#media-carousel-1" :data-slide-to="index" :class="(index === 0 ? 'active' : '')"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div v-for="(value, key, index) in mediaData" :key="key" class="carousel-item carousel-view-height" :class="(index === 0 ? 'active' : '')">
        <div class="view not-select">
          <img v-if="value.type === 'img'" class="carousel-img-responsive" :src="value.src" alt="Gallery Item">
          <video v-if="value.type === 'video'" class="carousel-img-responsive" autoplay loop muted>
            <source src="//media.iny.su/file/videos/playlist1_trailer.mp4" type="video/mp4" />
          </video>
          <div class="mask carousel-mask"></div>
        </div>
        <div @click="go(value.object, key)" class="carousel-caption cursor-pointer row">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h1 class="d-none d-lg-block display-4 theme-title mb-lg-5">{{value.title}}</h1>
            <h1 class="d-block d-lg-none h2-responsive theme-title mb-lg-5">{{value.title}}</h1>
            <button class="btn btn-small btn-lg-large btn-white btn-rounded w-max mb-lg-5">Смотреть</button>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#media-carousel-1" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Предыдущий</span>
    </a>
    <a class="carousel-control-next" href="#media-carousel-1" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Следующий</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MediaCarousel',
  data () {
    return {
      mediaData: {}
    }
  },
  mounted () {
    const hash = new Date()
    const url = `https://iny.su/api/0.1/media/getCarouselData.json?v=${hash.getFullYear()}-${hash.getUTCHours()}`
    axios
      .get(url)
      .then((res) => { this.mediaData = res.data })
  },
  methods: {
    go (object, alias) {
      switch (object) {
        case 'kpid':
          this.$router.push('/watch' + alias)
          break
        case 'playlist':
          this.$router.push('/playlist/' + alias)
          break
      }
    }
  }
}
</script>

<style>
.carousel-img-responsive {
  object-fit: cover;
}
.carousel-view-height {
  height: 70vh;
}
@media (min-width: 768px) {
  .carousel-view-height {
    height: 100vh;
  }
}
.carousel-mask {
  background-color: rgb(24, 24, 24, 0.6) !important;
}
</style>

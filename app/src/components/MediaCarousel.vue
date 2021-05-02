<template>
  <div id="media-carousel-1" class="carousel slide z-depth-0" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(value, key, index) in mediaData" :key="key" data-target="#media-carousel-1" :data-slide-to="index" :class="(index === 0 ? 'active' : '')"></li>
    </ol>
    <div class="carousel-inner gallery-top" role="listbox">
      <div v-for="(value, key, index) in mediaData" :key="key" class="carousel-item carousel-view-height" :class="(index === 0 ? 'active' : '')">
        <div class="view">
          <img class="carousel-img-responsive" :src="value.img_src" alt="Gallery Item">
          <div class="mask carousel-mask"></div>
        </div>
        <div @click="go(key)" class="carousel-caption cursor-pointer">
          <h3 class="h2-responsive theme-title">{{value.title}}</h3>
          <p class="white-text">Смотреть</p>
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
export default {
  name: 'MediaCarousel',
  data () {
    return {
      mediaData: {
        1312668: {
          title: 'Облака (2020)',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/6533dc52/7ba28039fd9.jpg'
        },
        306084: {
          title: 'Теория Большого Взрыва',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/0349a97a/37e1c5d5743.jpg'
        },
        741231: {
          title: 'Чёрный список',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/7881d5e4/bd3b5d06e0d.jpg'
        },
        893621: {
          title: 'Люцифер',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/ac2f241b/31a5d9fd655.jpg'
        },
        1231016: {
          title: 'Воспитанные волками',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/061c60f5/0b387a36eb5.jpg'
        },
        716587: {
          title: 'Острые козырьки',
          img_src: 'https://go.iny.su/uc/cc4ca42/v6f7584/51506a19/dc162113bd0.jpg'
        }
      }
    }
  },
  methods: {
    go (kpid) {
      this.$router.push('/watch' + kpid)
    }
  }
}
</script>

<style>
.carousel-img-responsive {
  object-fit: cover;
}
.carousel-view-height {
  height: 87vh;
}
@media (min-width: 768px) {
  .carousel-view-height {
    height: 87vh;
  }
}
.carousel-mask {
  background-color: rgb(24, 24, 24, 0.6) !important;
}
.gallery-top {
  margin-top: -3.6rem!important;
}
</style>

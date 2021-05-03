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
export default {
  name: 'MediaCarousel',
  data () {
    return {
      mediaData: {
        1: {
          object: 'playlist',
          type: 'video',
          title: 'Весь контент Netflix, Apple Originals, HBO и других студий',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/6533dc52/7ba28039fd9.jpg'
        },
        1312668: {
          object: 'kpid',
          type: 'img',
          title: 'Облака (2020)',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/6533dc52/7ba28039fd9.jpg'
        },
        306084: {
          object: 'kpid',
          type: 'img',
          title: 'Теория Большого Взрыва',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/0349a97a/37e1c5d5743.jpg'
        },
        741231: {
          object: 'kpid',
          type: 'img',
          title: 'Чёрный список',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/7881d5e4/bd3b5d06e0d.jpg'
        },
        893621: {
          object: 'kpid',
          type: 'img',
          title: 'Люцифер',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/ac2f241b/31a5d9fd655.jpg'
        },
        1231016: {
          object: 'kpid',
          type: 'img',
          title: 'Воспитанные волками',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/061c60f5/0b387a36eb5.jpg'
        },
        716587: {
          object: 'kpid',
          type: 'img',
          title: 'Острые козырьки',
          src: 'https://go.iny.su/uc/cc4ca42/v6f7584/51506a19/dc162113bd0.jpg'
        }
      }
    }
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
  height: 100vh;
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

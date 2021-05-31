<template>
  <div class="embed-responsive embed-responsive-16by9" :class="(view === 'default' ? 'col-12 mb-3 col-md-6 col-lg-4 col-xl-3':'col-12 mb-3')">
    <div @click="go()" class="row justify-content-center align-items-center card-poster theme-duration embed-responsive-item ml-0 cursor-pointer rounded" :class="theme + ' ' + (view === 'default' ? 'card-poster_view-default':'card-poster_view-max-content')" :style="{'background-image':getBgImage()}">
      <div class="col-12 text-center">
        <h5 class="white-text text-capitalize my-2">{{label_type}}</h5>
      </div>
      <div class="col-12 text-center">
        <h5 class="white-text text-capitalize my-2">{{nameRu}}</h5>
      </div>
      <div class="col-12 text-center">
        <h6 class="white-text my-2">{{year}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaCart',
  props: {
    theme: {
      default: 'card-poster',
      required: false,
      type: String
    },
    view: String,
    kpid: Number,
    type: String,
    nameRu: String,
    year: String
  },
  data () {
    return {
      label_type: ''
    }
  },
  methods: {
    go () {
      this.$router.push('/watch' + this.kpid)
    },
    getBgImage () {
      return `url(https://kinopoiskapiunofficial.tech/images/posters/kp/${this.kpid}.jpg)`
    }
  },
  mounted () {
    if (this.type === 'FILM') this.label_type = 'фильм'
    if (this.type === 'TV_SHOW') this.label_type = 'сериал'
  }
}
</script>

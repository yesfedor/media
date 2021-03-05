<template>
    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="mb-3 py-3">Главная</h1>
            </div>
        </div>
        <div class="row justify-content-center">
          <MediaPlaylist initState="opened" alias="1" />
        </div>
    </div>
</template>

<script>
import MediaPlaylist from '../components/MediaPlaylist'
/*
  main list(tops):
*/
export default {
  name: 'Main',
  components: {
    MediaPlaylist
  },
  data () {
    return {
      data: ''
    }
  },
  mounted () {

  }
}
</script>

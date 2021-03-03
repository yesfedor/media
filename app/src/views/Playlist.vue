<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="my-0 py-3">Playlist</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    alias: String
  },
  data () {
    return {

    }
  },
  mounted () {
    if (!this.alias) this.$router.push('/')
  }
}
</script>

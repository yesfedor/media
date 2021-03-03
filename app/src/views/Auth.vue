<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="my-0 py-3">Auth</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  mounted () {
    this.$store.dispatch('AUTH', { login: 'yesfedor', password: 'asd486982asd' })
  },
  computed: {
    auth () {
      return this.$store.getters.IS_AUTH
    }
  },
  watch: {
    auth (status) {
      this.auth = status
    }
  }
}
</script>

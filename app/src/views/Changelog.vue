<template>
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-12 border rounded py-3 text-center mb-4">
        <h1 class="theme-title mb-3">INY Media | Версии</h1>
        <h4 class="theme-text my-0">
          Журнализация изменений проекта
        </h4>
      </div>
      <div v-for="(log, i) in changelog" :key="log.version" class="col-12 col-lg-6 offset-lg-3 px-lg-0 mb-4 py-3 border rounded">
        <div class="row p-3">
          <div class="col-12 mt-n2 clearfix">
            <span class="theme-nav-link w-50 float-left">The Changelog #{{i + 1}}</span>
            <strong :id="log.version" class="text-monospace w-50 float-left text-right">{{log.version}}</strong>
          </div>
          <div class="col-12 mt-2">
            <h2 class="h4 theme-title font-weight-bold my-0">{{log.title}}</h2>
          </div>
          <div class="col-12 mt-2 clearfix">
            <a class="theme-nav-link w-50 float-left" target="_blank" href="//go.iny.su/yf_vk">Фёдор Гаранин</a>
            <time class="w-50 float-left text-right">{{log.date}}</time>
          </div>
          <div class="col-12 mt-3">
            <h4 v-html="log.text" class="h5 theme-text"></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Changelog',
  computed: {
    changelog () {
      return this.$store.getters.VERSION_DATA
    }
  },
  mounted () {
    document.title = 'INY Media | Версии'
  }
}
</script>

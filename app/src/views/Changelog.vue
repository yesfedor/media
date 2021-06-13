<template>
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-12 theme-panel py-3 text-center mb-5">
        <h1 class="theme-title mb-3">Change Log</h1>
        <h4 class="theme-text my-0">
          Журнализация изменений проекта
        </h4>
      </div>
      <div v-for="(log, i) in changelog" :key="log.version" class="col-12 col-lg-6 offset-lg-3 px-lg-0 mb-4 py-3 border-bottom">
        <div class="row">
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
          <div class="col-12 mt-5">
            <h4 class="h5 theme-text">
              {{log.text}}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Changelog',
  data () {
    return {
      changelog: [
        {
          version: 'media-v5.2.0',
          title: 'Работа с плеером',
          date: '13.06.2021',
          text: 'Теперь при просмотре с компьютера вы можете читать факты, а в будущем и комментарии, плеер всегда будет виден на экране.'
        },
        {
          version: 'media-v5.1.2',
          title: 'Добавлен Changelog',
          date: '12.06.2021',
          text: 'Да, теперь тут будут новости о разработке сайта!'
        }
      ]
    }
  }
}
</script>

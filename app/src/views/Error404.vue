<template>
  <div class="container-fluid mt-5">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h1 class="theme-title my-0 py-3">Ошибка 404</h1>
        <h4 class="theme-text py-3">Вы попали на несуществующую страницу</h4>
        <h4 class="py-3">
          <router-link to="/" class="theme-link">На главную</router-link>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  mounted () {
    document.title = 'Вы попали на несуществующую страницу'
  }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg sticky-top theme-header">
        <div class="container">
            <router-link class="navbar-brand theme-title" to="/">{{logo}}</router-link>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars theme-title"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link theme-title" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link theme-title" to="/search">Поиск</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link theme-title" to="/top10">В тренде</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link theme-title" to="/subscriptions">Подписки</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link theme-title" to="/auth">Аккаунт</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    logo: String
  }
}
</script>

<style>
.navbar {
    -webkit-backdrop-filter: blur(12px) brightness(.7);
    backdrop-filter: blur(12px) brightness(.7);
    border-bottom: 1px solid #717170
}
</style>

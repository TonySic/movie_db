<template>
  <HeaderNav></HeaderNav>
  <div v-if="$route.path == '/'">
    <!-- si la route est / (racine du site) -->
    <h1 class="font-weight-light">
      Tout le cinoche est sur La Péloche !
    </h1>
    <MoviesList v-bind:movies="movies" />
  </div>

  <div v-else>
    <!-- si la route est différente de / -->
    <router-view v-bind:key="$route.fullPath"></router-view>
  </div>
  <FooterFooter></FooterFooter>
</template>

<script>
import HeaderNav from './components/template/HeaderNav'
import FooterFooter from './components/template/FooterFooter'
import axios from 'axios'
import MoviesList from './components/utilitaires/MoviesList.vue'
export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterFooter,
    MoviesList
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(reponse => {
        this.movies = reponse.data.results
      })
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>

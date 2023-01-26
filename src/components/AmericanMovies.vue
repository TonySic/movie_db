<template>
  <h1 class="font-weight-light">Les films de l'oncle SAM</h1>
  <button type="button" class="btn btn-dark m-2">Trier par titre</button>
  <button type="button" class="btn btn-dark m-2">Trier par date de sortie</button>
  <button type="button" class="btn btn-dark m-2">Trier par note</button>
  <MoviesList v-bind:movies="movies" />
</template>

<script>
import axios from 'axios'
import MoviesList from './utilitaires/MoviesList.vue'
export default {
  name: 'App',
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    axios.get(' https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=popularity.desc&certification_country=us&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=en&with_watch_monetization_types=flatrate')
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

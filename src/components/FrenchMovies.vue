<template>
    <h1 class="font-weight-light">Les films français</h1>
    <SortButtons :movies="movies" @sort-movies="sortmovies" />
    <MoviesList v-bind:movies="movies" />
</template>

<script>
import axios from 'axios'
import MoviesList from './utilitaires/MoviesList.vue'
import SortButtons from './utilitaires/SortButtons.vue'
export default {
    name: 'App',
    components: {
        MoviesList,
        SortButtons,
    },
    data() {
        return {
            movies: []
        }
    },
    created() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=fr&with_watch_monetization_types=flatrate')
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

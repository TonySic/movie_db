<template>
    <h1 class="font-weight-light">Top 50</h1>
    <button type="button" class="btn btn-dark m-2">Trier par titre</button>
    <button type="button" class="btn btn-dark m-2">Trier par date de sortie</button>
    <button type="button" class="btn btn-dark m-2">Trier par note</button>
    <Top50MoviesList v-bind:movies="movies" />
</template>

<script>
import axios from 'axios'
import Top50MoviesList from './utilitaires/Top50MoviesList.vue'
export default {
    name: 'App',
    components: {
        Top50MoviesList,
    },
    data() {
        return {
            movies: []
        }
    },
    created() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
            .then(reponse => {
                this.movies = reponse.data.results
                axios.get('https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000&with_watch_monetization_types=flatrate')
                .then(reponse => {
                    this.movies = this.movies.concat(reponse.data.results);
                    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=3&vote_count.gte=1000&with_watch_monetization_types=flatrate')
                    .then(reponse => {
                        this.movies = this.movies.concat(this.movies.slice(reponse.data.results,10));
                    })
                })
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

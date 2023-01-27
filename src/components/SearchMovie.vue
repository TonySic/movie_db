<template>
    <div>
        <h1 class="font-weight-light">Je recherche un film</h1>
        <input class="mb-3" v-model="recherche" @keyup="searchMovies">
    </div>
    <div>
        <SortButtons :movies="movies" @sort-movies="sortmovies" />
        <MoviesList v-bind:movies="movies" />
    </div>

</template>

<script>
import axios from 'axios';
import MoviesList from './utilitaires/MoviesList.vue'
import SortButtons from './utilitaires/SortButtons.vue';
export default {
    name: 'SearchMovie',
    components: {
        MoviesList,
        SortButtons
    },
    data() {
        return {
            recherche: '',
            movies: [],
        }
    },
    methods: {
        searchMovies() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=635decc7432b5718f94e2938effe2b0c&language=fr&query=' + this.recherche + '&include_adult=false')
                .then(reponse => {
                    console.log(reponse.data.results),
                        this.movies = reponse.data.results
                })
        }
    },
}




    // 
</script>
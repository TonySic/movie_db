<template>
    <div class="container-fluid row">
        <div class="col-md-3 col-lg-2 mb-3 pt-3" v-for="(movie, index) in movies" v-bind:key="movie.id">
            <router-link class="link" v-bind:to="`/MovieDetails/${movie.id}`">
                <MovieCard v-bind:index="index" v-bind:movie="movie" />
            </router-link>
        </div>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
    name: 'Top50MoviesList',
    props: ['movies'],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
        }
    },
    components: {
        MovieCard,
    } 
}
</script>

<style>
h6 {
    color: #ff741d !important
}

.link {
    text-decoration: none;
    color: inherit;
}
</style>
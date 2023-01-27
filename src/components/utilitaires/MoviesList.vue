<template>
    <div class="container-fluid row">
        <div class="col-md-3 col-lg-2 mb-3 pt-3" v-for="movie in movies" v-bind:key="movie.id">
            <router-link class="link" v-bind:to="`/MovieDetails/${movie.id}`">
                <MovieCard v-bind:movie="movie" />
            </router-link>
        </div>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
    name: 'MoviesList',
    components: {
        MovieCard,
    },
    props: ['movies'],
}
</script>

<style>
h6 {
    color: #ff741d !important
}
.link {
    text-decoration: none;
    color:inherit;
}
</style>
<template>
    <div class="container-fluid row">
        <div class="col-md-3 col-lg-2 mb-3 pt-3" v-for="movie in movies" v-bind:key="movie.id">
            <router-link class="link" v-bind:to="`/MovieDetails/${movie.id}`">
                <div class="card">
                    <img class="card-img-top" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ movie.title }}</h5>
                        <p class="card-text">{{ movie.overview.substring(0, 100) }}...</p>
                        <h6 class="card-title fst-italic fw-bold"><i class="fa-solid fa-star"></i> {{
                            movie.vote_average }}/10</h6>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    props: ['movies'],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
        }
    }
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
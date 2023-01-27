<template>
    <div class="card">
        <img class="card-img-top" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
        <div class="card-body">
            <h3 v-if="$route.path == '/Top50Movies'" class="pb-3 text-danger card-title">
                <span v-once>#{{ index + 1}}</span>
            </h3>
            <h5 class="card-title fw-bold">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview.substring(0, 100) }}...</p>
            <h6 class="card-title fst-italic fw-bold"><i class="fa-solid fa-star"></i> {{
                movie.vote_average
            }}/10</h6>
            <p class="card-text">{{ movie.release_date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    props: ['movie', 'index'],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
        }
    }
}
</script>

<style>
.card {
    font-family: Dosis;
}
</style>
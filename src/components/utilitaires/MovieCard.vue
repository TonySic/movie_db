<template>
    <div class="card">
        <img class="card-img-top" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview.substring(0, 100) }}...</p>
            <h6 class="card-title fst-italic fw-bold"><i class="fa-solid fa-star"></i> {{
                movie.vote_average
            }}/10</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    props: ['movie'],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
        }
    }
}
</script>
<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="card-img-top" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ movie.title }}</h5>
                    <p class="card-text">{{ movie.overview }}</p>
                    <h6 class="card-title fst-italic fw-bold"><i class="fa-solid fa-star"></i> {{ movie.vote_average }}/10</h6>
                    <p class="card-text">Date de sortie : {{ movie.release_date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList'
}
</script>
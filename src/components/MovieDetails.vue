<template>
    <div class="container-fluid" style="max-width: 800px;">
        <div class="row">
            <div class="col-md-6">
                <img class="rounded card-img-top mb-3" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
            </div>
            <div class="col-md-6 ml-3">
                <div class="card-body">
                    <h4 class="card-title fw-bold">{{ movie.title }}</h4>
                    <p class="mt-3 fst-italic">{{ movie.tagline }}</p>
                    <p class="card-text mt-3 text-start"><b>Résumé :</b> {{ movie.overview }}</p>
                    <h6 class="card-title fst-italic fw-bold">Note moyenne : <i class="fa-solid fa-star"></i> {{
                        movie.vote_average }}/10</h6>
                    <p class="card-text mt-3"><b>Date de sortie :</b> {{ movie.release_date }}</p>
                    <p class="card-text mt-3"><b>Pays d'origine :</b> {{ movie.original_country }}</p>
                    <p class="card-text mt-3"><b>Titre d'origine :</b> {{ movie.original_title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MovieDetails',

    data() {
        return {
            movie: {},
            id: this.$route.params.id,
            preUrl: "https://image.tmdb.org/t/p/original/",
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=635decc7432b5718f94e2938effe2b0c&language=fr')
            .then(response => {
                this.movie = response.data
            })
    }


}
</script>
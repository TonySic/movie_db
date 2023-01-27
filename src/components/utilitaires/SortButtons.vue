<template>
    <button @click="sortmoviesbytitle()" type="button" class="btn btn-dark m-2">Trier par titre</button>
    <button @click="sortmoviesbydate()" type="button" class="btn btn-dark m-2">Trier par date de sortie</button>
    <button @click="sortmoviesbyvote()" type="button" class="btn btn-dark m-2">Trier par note</button>
</template>

<script>
export default {
    name: 'SortButtons',
    data() {
        return {
            title: null,
            date: null,
            rate: null,
            sortedbytitle: false,
            sortedbydate: false,
            sortedbyvote: false
        }
    },
    props: ['movies'],
    methods: {
        sortmoviesbytitle() {
            let movies = this.movies
            if (this.sortedbytitle == false) {
                movies.sort(function (a, b) {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                })
                this.sortedbytitle = true;
            } else {
                movies.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (a.title < b.title) {
                        return 1;
                    }
                    return 0;
                })
                this.sortedbytitle = false;
            }
        },
        sortmoviesbydate() {
            let movies = this.movies
            if (this.sortedbydate == false) {
                movies.sort(function (a, b) {
                    if (a.release_date < b.release_date) {
                        return -1;

                    }
                    if (a.release_date > b.release_date) {
                        return 1;

                    }

                    return 0;

                }

                )

                this.sortedbydate = true;
            } else {
                movies.sort(function (a, b) {
                    if (a.release_date > b.release_date) {
                        return -1;

                    }
                    if (a.release_date < b.release_date) {
                        return 1;

                    }

                    return 0;
                }
                )
                this.sortedbydate = false;
            }


        },
        sortmoviesbyvote() {
            let movies = this.movies
            if (this.sortedbyvote == false) {
                movies.sort(function (a, b) {
                    if (a.vote_average < b.vote_average) {
                        return -1;

                    }
                    if (a.vote_average > b.vote_average) {
                        return 1;

                    }

                    return 0;

                }

                )

                this.sortedbyvote = true;
            } else {
                movies.sort(function (a, b) {
                    if (a.vote_average > b.vote_average) {
                        return -1;

                    }
                    if (a.vote_average < b.vote_average) {
                        return 1;

                    }

                    return 0;
                }
                )
                this.sortedbyvote = false;
            }


        },

    },





}
</script>
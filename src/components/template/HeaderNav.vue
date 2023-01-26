<template>
    <img src="../../assets/bandeau-header.jpg" alt="bandeau">
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5" data-bs-theme="light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/"><i
                                class="fa-sharp fa-solid fa-house"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/Top50Movies">Top 50</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/AmericanMovies">Films américains</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/FrenchMovies">Films français</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/LastMovies">Films de 2022</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/SearchMovie">Rechercher</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNav',

    data() {
        return {
            query: ''
        }
    },

    methods: {
        search(query) {
            alert(query)
        }
    }
}
</script>

<style>
.navbar {
    z-index: 4;
    background-color: black;
}

nav a {
    color: #ff741d !important
}

img {
    max-width: 100%;
    height: auto;
}

.navbar-toggler-icon {
    background-color: white;
}
</style>
import { createWebHistory, createRouter } from "vue-router";

// on importe les différents composants
import App from "./App.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import MovieDetails from "./components/MovieDetails.vue";
import SearchMovie from "./components/SearchMovie";

const routes = [ // on déclare les routes
    {
        path: '/',
        component: App
    },
    {
        path: '/AmericanMovies',
        component: AmericanMovies
    },
    {
        path: '/FrenchMovies',
        component: FrenchMovies
    },
    {
        path: '/LastMovies',
        component: LastMovies
    },
    {
        path: '/Top50Movies',
        component: Top50Movies
    },
    {
        path: '/MovieDetails/:id',
        component: MovieDetails
    },
    {
        path: '/SearchMovie',
        component: SearchMovie
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;
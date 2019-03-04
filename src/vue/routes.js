//import Home from './components/home.vue'
import Movies from './components/movies.vue'
import EditMovies from './components/edit_movie.vue'

const routes = [
//{ path: '/', component: Home, name: 'home', meta: { title: 'Home' } },
    { path: '/', redirect:'/movies' },
    { path: '/movies', component: Movies, name: 'movies', meta: { title: 'Movies' } },
    { path: '/movies/:id/edit', component: EditMovies, name: 'edit_movie', meta: { title: 'Edit movie' } }
]

export default routes;
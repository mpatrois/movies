import Movies from './components/movies.vue'
import EditMovies from './components/edit_movie.vue'
import CreateMovies from './components/create_movie.vue'

const routes = [
    { path: '/', redirect:'/movies' },
    { path: '/movies', component: Movies, name: 'movies', meta: { title: 'Movies' } },
    { path: '/add-movies', component: CreateMovies, name: 'new_movie', meta: { title: 'Create Movie' } },
    { path: '/movies/:id/edit', component: EditMovies, name: 'edit_movie', meta: { title: 'Edit movie' } }
]

export default routes;
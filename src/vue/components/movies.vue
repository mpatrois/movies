<template>
  <div class="movies">
    <div class="links">
      <router-link :to="{ name: 'new_movie' }">Ajouter un film</router-link>
    </div>
    <div class="search-form">
      <p>
        <strong>Search by</strong>
        <select v-model="search.attribute">
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="director">Director</option>
        </select> :
        <input type="text" v-model="search.value" placeholder="Search...">
      </p>
    </div>

    <ul>
      <li is="movie-item"
          v-for="movie in movies"
          v-bind:movie="movie"
          v-bind:key="movie.id"
          v-on:edit="editMovie(movie.id)"
          v-on:destroy="destroyMovie(movie.id)">
        </li>
    </ul>

    <p>Nombre de films enregistrés : {{ movies.length }} <button type="button" v-on:click="popMovies">Pop</button></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      search: {
        attribute: "title",
        value: "",
      },
      movies: [],
    }
  },
  created(){
    axios.get('/api/movies').then((response)=>{
      this.movies = response.data;
    })
  },
  methods: {
    popMovies: function () {
      this.movies.pop();
    },

    editMovie: function(id) {
     // this.$router.push({ name: 'edit_movie', params: { id: id } });
    },

    destroyMovie: function(id) {
      let index = this.movies.findIndex(item => item.id == id);
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    }
  }
}
</script>
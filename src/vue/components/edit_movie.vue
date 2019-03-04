<template>
    <div v-if="editingMovie == null">
      <p>Pas de film avec l'ID {{ this.$route.params.id }}</p>
      <button type="button" v-on:click="endEdit()">Back</button>
    </div>
    <div v-else class="edit-movie">
        <form>
        <label for="editingMovie.title">Title : </label>
        <input type="text" v-model="editingMovie.title" placeholder="Title" size="50"><br>

        <label for="editingMovie.year">Year : </label>
        <input type="number" style="width:5em;" v-model="editingMovie.year" placeholder="Year"><br>

        <label for="editingMovie.director">Director name: </label>
        <input type="text" v-model="editingMovie.director.name" placeholder="Director"><br>

        <label for="editingMovie.director">Director birthdate: </label>
        <input type="text" v-model="editingMovie.director.birthdate" placeholder="Director"><br>

        <label for="editingMovie.director">Director nationality: </label>
        <input type="text" v-model="editingMovie.director.nationality" placeholder="Nationality"><br>

        <label for="editingMovie.synopsis">Synopsis : </label><br>
        <textarea v-model="editingMovie.synopsis" rows="8" cols="80" placeholder="Lorem ipsum dolor sit amet..."></textarea><br>

        <button type="button" v-on:click="update()">Update movie</button>
        <button type="button" v-on:click="backToList()">Back</button>
        </form>   
    </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editingMovie: null
    }
  },
  created(){
      axios.get(`/api/movies/${this.$route.params.id}`).then((response)=>{
          this.editingMovie = response.data;
      });
  },
  methods: {
    endEdit() {
        this.$router.push({ name: 'movies' });
    },
    update() {
        axios.post(`/api/movies/${this.editingMovie.id}`, this.editingMovie).then(()=>{
            this.endEdit();
        });
    }
  }
}
</script>
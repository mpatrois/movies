<template>
    <div v-if="editingMovie == null">
      <p>Pas de film avec l'ID {{ this.$route.params.id }}</p>
      <button type="button" v-on:click="backToList()">Back</button>
    </div>
    <div v-else class="edit-movie">
        <MovieForm :movie="editingMovie"/>
        <button type="button" v-on:click="update()">Update movie</button>
        <button type="button" v-on:click="backToList()">Back</button>
    </div>
</template>

<script>
import axios from "axios";
import MovieForm from "./movie_form.vue";

export default {
    components:{
        MovieForm,
    },
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
        backToList() {
            this.$router.push({ name: 'movies' });
        },
        update() {
            var form_data = new FormData();

            form_data.append('poster', this.editingMovie.poster);
            delete this.editingMovie.poster;
            form_data.append('movie_data', JSON.stringify(this.editingMovie));

            axios.post(`/api/movies/${this.editingMovie.id}`, form_data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(()=>{
                this.backToList();
            });
        }
    }
}
</script>
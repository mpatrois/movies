<template>
    <div class="edit-movie">
        <MovieForm :movie="newMovie"/>
        <button type="button" v-on:click="createMovie()">Create movie</button>
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
            newMovie: {
                title: '',
                year: '',
                lang: '',
                director: {
                    name: '',
                    nationality: '',
                    birthdate: ''
                },
                synopsis: '',
                genre: ''
            }
        }
    },
    methods: {
        backToList() {
            this.$router.push({ name: 'movies' });
        },
        createMovie() {

            var form_data = new FormData();
            form_data.append('poster', this.newMovie.poster);
            delete this.newMovie.poster;
            form_data.append('movie_data', JSON.stringify(this.newMovie));
            
            axios.post(`/api/movies/`, form_data, {
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
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

            for ( var key in this.newMovie ) {
                console.log(this.newMovie[key]);
                form_data.append(key, this.newMovie[key]);
            }

            console.log(form_data);
            console.log(form_data);

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
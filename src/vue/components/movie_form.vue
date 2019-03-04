<template>
    <form>
        <label for="movie.title">Title : </label>
        <input type="text" v-model="movie.title" placeholder="Title" size="50"><br>

        <label for="movie.year">Year : </label>
        <input type="number" style="width:5em;" v-model="movie.year" placeholder="Year"><br>

        <label for="movie.director">Director name: </label>
        <input type="text" v-model="movie.director.name" placeholder="Director"><br>

        <label for="movie.director">Director birthdate: </label>
        <input type="text" v-model="movie.director.birthdate" placeholder="Director"><br>

        <label for="movie.director">Director nationality: </label>
        <input type="text" v-model="movie.director.nationality" placeholder="Nationality"><br>
       
        <label for="movie.director">Lang </label>
        <input type="text" v-model="movie.lang" placeholder="Nationality"><br>
        
        <label for="movie.director">Genre </label>
        <input type="text" v-model="movie.genre" placeholder="Nationality"><br>

        <label for="movie.synopsis">Synopsis : </label><br>
        <textarea v-model="movie.synopsis" rows="8" cols="80" placeholder="Lorem ipsum dolor sit amet..."></textarea><br>
    </form>   
</template>

<script>
export default {
    props:['movie']
}
</script>


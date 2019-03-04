<template>
<li>
  <p v-on:click="toggleDetails = !toggleDetails"><strong>{{ movie.title }} ({{ movie.year }})</strong></p>
  <div class="movie-details" v-if="toggleDetails">
    <p>
      <i>Réalisé par {{ movie.director.name }}
        ({{movie.director.nationality}}, né(e) le {{ movie.director.birthdate }})
    </i>
    <br>Langue : {{ movie.lang }}
    <br>Genre : {{ movie.genre }}
    <br>{{ movie.synopsis }}</p>
    <p>
      <button type="button" v-on:click="editMovie(movie.id)">Edit</button>
      <button type="button" v-on:click="$emit('destroy')" style="color:red;">Destroy</button>
    </p>
  </div>
</li>
</template>

<script>
export default {
  props: ["movie"],
  data: function () {
    return {
      toggleDetails: false
    }
  },
  methods:{
    editMovie: function(id) {
     this.$router.push({ name: 'edit_movie', params: { id: id } });
    },
  }
}
</script>
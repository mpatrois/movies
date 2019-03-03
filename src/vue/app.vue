<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: []
    }
  },
  computed: {
    lastId: function () {
      return this.movies[this.movies.length].id;
    }
  }
}
</script>
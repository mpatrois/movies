import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import routes from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})


new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
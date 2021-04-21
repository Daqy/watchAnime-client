import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.mixin({
  methods: {
    currentPageUrl() {
      return `${window.location.protocol}//${window.location.hostname}:3000/anime`
    },
    capitalize(nameOfAnime) {
      nameOfAnime = nameOfAnime.split(" ");
      let concat = "";

      for (const word of nameOfAnime) {
        concat += `${word.charAt(0).toUpperCase() + word.slice(1)} `
      }
      return concat;
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

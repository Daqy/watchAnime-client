<template lang="pug">
  #app
    nav
      c-navbar
    main
      router-view
</template>

<script>
import navbarComponent from "@/components/navbar/navbar.vue";

export default {
  components: {
    "c-navbar": navbarComponent,
  }
};
</script>

<style>
body {
  background-color:#171717;
  margin: 0px;
  padding: 0px;
  color: white;
  overflow-x: hidden;
}

 a {
  color: white;
  text-decoration: none;
}

p {
  margin: 0px;
}

#app {
  font-family: roboto condensed, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
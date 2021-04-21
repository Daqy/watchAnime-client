<template lang="pug">
  .navbar-container
    c-nav(:navList="this.navList")
      li.search
        input(type="text" v-model="searchQuery" v-on:keyup.enter="onEnter")
</template>

<script>
import navComponent from "@/components/navbar/nav.vue";

export default {
  components: {
    "c-nav": navComponent,
  },
  data() {
    return {
      searchQuery: "",
      navList: [
        {
          path: "/",
          display: "WatchAnime"
        }
      ]
    }
  },
  methods: {
    onEnter() {
      if (!this.currentPathIs("/anime")) {
        this.addQueryToURL()
      }
    },
    addQueryToURL() {
      if (this.queryIsEmpty()) {
        this.$router.push({ path: '/anime'}).catch()
      } else {
        this.$router.push({ path: '/anime', query: { search: this.searchQuery }}).catch(failure => {
          //do nothing
        })
      }
    },
    currentPathIs(path) {
      return this.$router.history.current.path == path;
    },
    queryIsEmpty() {
      return this.searchQuery == "";
    }
  },
  watch: {
    searchQuery() {
      if (this.currentPathIs("/anime")) {
        this.addQueryToURL()
      }
    }
  }
}
</script>

<style scoped>
.navbar-container {
  position: relative;
  width: 100vw;
  height: 50px;
  background-color: #0f0f0f;
  box-shadow: 5px 0px 8px 5px black;
  z-index: 10;
}

.search {
  height: 60%;
  width: 300px;
}

.search input {
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2e2e2e;
  height: 100%;
  width: 100%;
  color: white;
}

.search input:focus {
  box-shadow: 5px 0px 8px 5px black;
  outline: none;
}
</style>
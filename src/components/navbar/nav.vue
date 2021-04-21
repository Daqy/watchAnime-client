<template lang="pug">
  .nav
    ul
      li(v-for="nav in navList" :key="nav.key")
        router-link(:to="nav.path") {{ nav.display }}
      slot
</template>

<script>
export default {
  props: {
    navList: Array
  }
}
</script>

<style scoped>
.nav {
  position: relative;
  height: 100%;
}

ul {
  margin: 0px;
  display: flex;
  align-items: center;
  height: 100%;
}

li {
  list-style: none;
  display: inline-block;
}

.search {
  position: absolute;
  right: 40px;
}
</style>
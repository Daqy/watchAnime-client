<template lang="pug">
  .animeListGrid
    router-link(v-for="episode in episodeList" :key="episode.list" :to="{ name: 'watch-episode', params: { anime: `${(episode.name).toLowerCase()}-episode-${episode.id}` }}" replace) 
      p {{ episode.id }}
</template>

<script>
export default {
  props: {
    episodeList: Array
  }
}
</script>

<style>
.animeListGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 40px);
  grid-auto-rows: 30px;
  grid-gap: 5px;
}

.animeListGrid a {
  background-color: #333030;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

</style>
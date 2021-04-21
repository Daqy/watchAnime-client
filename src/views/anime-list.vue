<template lang="pug">
  .grid-container
    .grid
      c-card(v-for="card in animeList" :card="card")
</template>

<script>
import cardComponent from '@/components/card.vue';

export default {
  components: {
    "c-card": cardComponent,
  },
  data() {
    return {
      animeList: []
    }
  },
  async created() {
    this.animeList = await this.requestAnimeList(this.$route.query.search);
  },
  async beforeRouteUpdate(to, from, next) {
    this.animeList = await this.requestAnimeList(to.query.search);
    next();
  },
  methods: {
    async requestAnimeList(queryURL) {
      if (queryURL != undefined) {
        return (await this.$axios.get(`${this.currentPageUrl()}/api/search/${queryURL}`)).data;
      } else {
        return (await this.$axios.get(`${this.currentPageUrl()}/api/animeList`)).data;
      }
    }
  }
}
</script>

<style scoped>
.grid-container {
  margin-top: 1px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(308px, 1fr));
  grid-auto-rows: 448.5px;
  grid-gap: 1px 3px;
}
</style>
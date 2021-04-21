<template lang="pug">
  .navigatation 
    router-link.left(v-if="currentEpisode!=1" :to="{ name: 'watch-episode', params: { anime: `${this.animeName}-episode-${parseInt(this.currentEpisode)-1}`}}" replace)
      svg(viewBox="0 0 24 24")
        path(d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")
      p PREV

    router-link.middle(:to="{ name: 'anime-info', params: { name: this.animeName }}" replace)
      svg(viewBox="0 0 24 24")
        path(d="M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4V17.5H3V18.5H4V19H2V20H5V16H2V17Z")

    router-link.right(v-if="!LastEpisode" :to="{ name: 'watch-episode', params: { anime: `${this.animeName}-episode-${parseInt(this.currentEpisode)+1}` }}" replace)
      p NEXT
      svg(viewBox="0 0 24 24")
        path(d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")
      
      
</template>

<script>
export default {
  props: {
    currentEpisode: Number,
    animeName: String
  },
  data() {
    return {
      episodeLength: 0,
    }
  },
  async created() {
    this.episodeLength = ((await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/episodeList`)).data).length;
  },
  computed: {
    LastEpisode() {
      return this.episodeLength > 0 && this.currentEpisode == this.episodeLength;
    }
  }
}
</script>

<style scoped>
  .navigatation {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 12px;
  }

  .left {
    grid-column: 1;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .middle {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    grid-column: 3;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  svg {
    width: 19px;
    fill: white;
  }
</style>
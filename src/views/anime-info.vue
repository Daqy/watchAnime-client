<template lang="pug">
  .anime-information
    .head
      .content
        .information-container
          h1 {{ this.capitalize(this.$route.params.name) }}
        .thumbnail-container
          img(:src="this.thumbnailUrl")
      .overlay
    
    .main
      .listContainer
        c-episodeList(:episodeList="this.episodeList")
</template>

<script>
import listComponent from '@/components/list.vue';

export default {
  components: {
    "c-episodeList": listComponent,
  },
  data() {
    return {
      episodeList: [],
      thumbnailUrl: ""
    }
  },
  async created() {
    this.thumbnailUrl = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.$route.params.name}/thumbnail`)).data;
    this.episodeList = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.$route.params.name}/episodeList`)).data;
  }
}
</script>

<style>
  .head {
    position: relative;
    background-image: url("https://i.imgur.com/AMgEVXO.jpeg");
    width: 100vw;
    height: 400px;
    background-position: 10% 30%;
    background-size: 120% auto;
  }

  .head::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #333030;
    bottom: 0px;
  }

  .overlay {
    background-image: linear-gradient( to bottom, #171717, #171717bd 100%, black 30%, #171717 30%, #171717 180% );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
  }

  .content {
    position: relative;
    z-index: 1;
    width: 70%;
    left: 15%;
    top: 200px
  }

  .thumbnail-container {
    width: 250px;
    position: relative;
    height: 360px;
    overflow: hidden;
    display: block;
  }

  .thumbnail-container img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .information-container {
    position: absolute;
    left: 300px;
    top: 30px;
  }

  .listContainer {
    position: relative;
    width: 60%;
    left: calc(15% + 300px);
    margin-top: 20px
  }
</style>
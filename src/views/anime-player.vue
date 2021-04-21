<template lang="pug">
  .displayContentMiddle
    .contentEpisode
      .episode
        c-videoPlayer(:videoUrl="this.videoURL")
      .main
        .episodeNavigation
          c-navigate(:currentEpisode="this.currentEpisode" :animeName="this.animeName")
        .episodeInformation
          .thumbnail-container
            img(:src="this.thumbnailUrl")
          .episodeListContainer
            c-episodeList(:episodeList="this.episodeList")
</template>

<script>
import videoPlayerComponent from "@/components/videoPlayer";
import episodeListComponent from "@/components/list";
import navigateComponent from "@/components/navigate";

export default {
  components: {
    "c-videoPlayer": videoPlayerComponent,
    "c-episodeList": episodeListComponent,
    "c-navigate": navigateComponent
  },
  data() {
    return {
      animeName: "no-name",
      videoURL: "no-video",
      episodeList: [],
      thumbnailUrl: "no-url"
    }
  },
  async created() {
    const urlData = this.$route.params.anime.split("-")
    this.animeName = urlData[0]


    this.thumbnailUrl = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/thumbnail`)).data;
    this.episodeList = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/episodeList`)).data;
    
    this.videoURL = await this.requestVideoUrl()
  },
  async beforeRouteUpdate (to, from, next) {
    this.videoURL = await this.requestVideoUrl()
    next()
  },
  computed: {
    currentEpisode() {
      return parseInt((this.$route.params.anime).split("-")[2]);
    }
  },
  methods: {
    async requestVideoUrl() {
      const urlData = this.$route.params.anime.split("-")
      this.animeName = urlData[0]
      const episodeNumber = `${urlData[1]}-${urlData[2]}`
      return (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/${episodeNumber}`)).data;
    }
  }
}
</script>

<style scoped>
  .contentEpisode {
    width: 859px;
  }

  .displayContentMiddle {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }

  .episode {
    height: 482px;
  }

  .episodeInformation {
    width: 100%;
    margin-top: 10px;
  }

  .episodeNavigation {
    margin: 5px 0px;
  }

  .episodeListContainer {
    width: calc(100% - 210px);
    float: right;
  }

  .thumbnail-container {
    width: 200px;
    position: relative;
    float: left;
    overflow: hidden;
    display: block;
    height: 285px;
  }

  .thumbnail-container img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
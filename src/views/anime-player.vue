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
          .episodeTitleContainer
            h2 {{ this.capitalize(((this.$route.params.anime).split("-").join(" "))) }}
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
      videoURL: "no-videoTest",
      episodeList: [],
      thumbnailUrl: "no-url"
    }
  },
  async created() {
    await this.requestDataFromServer(this.$route.params.anime)
  },
  async beforeRouteUpdate (to, from, next) {
    await this.requestDataFromServer(to.params.anime)
    next()
  },
  computed: {
    currentEpisode() {
      const urlSplit = (this.$route.params.anime).split("-");
      return parseInt(urlSplit[urlSplit.length-1]);
    }
  },
  methods: {
    async requestDataFromServer(params) {
      const urlData = params.split("-");

      this.animeName = `${urlData[0]}`;
      for (let index = 1; index < urlData.length-2; index++) {
        this.animeName += `-${urlData[index]}`;
      }

      this.thumbnailUrl = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/thumbnail`)).data;
      this.episodeList = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/episodeList`)).data;

      const episodeNumber = `${urlData[urlData.length-2]}-${urlData[urlData.length-1]}`
      this.videoURL = (await this.$axios.get(`${this.currentPageUrl()}/api/${this.animeName}/${episodeNumber}?t=test`)).data;
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

  .episodeTitleContainer {
    width: calc(100% - 210px);
    float: right;
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
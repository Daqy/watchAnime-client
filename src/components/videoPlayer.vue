<template lang="pug">
  video.video(controls :src="videoUrl")
    source(:src="videoUrl" type="video/mp4")
</template>

<script>
export default {
  props: {
    videoUrl: String
  }
};
</script>

<style>
  .video {
    width: 100%;
    height: 100%;
  }
</style>
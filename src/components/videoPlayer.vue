<template lang="pug">
  iframe(scrolling="no" width="100%" height="100%" allow="autoplay; fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" :src="videoUrl" frameborder="0")
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
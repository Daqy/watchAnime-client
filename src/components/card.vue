<template lang="pug">
  router-link.card(:to="{ name: 'anime-info', params: { name: (card.name).toLowerCase() }}" replace)
    .image-container
      img(:src="card.src")
    .text-container
      p {{ this.capitalize(card.name) }}
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>

<style>
  .image-container {
    position: relative;
    width: 100%;
    height: 95%;
    overflow: hidden;
    display: block;
  }

  .text-Container {
    height: 5%;
  }

  p {
    margin: 0px;
    text-align: center;
  }

  .card:hover {
    transform: scale(1.05);
    z-index: 1;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
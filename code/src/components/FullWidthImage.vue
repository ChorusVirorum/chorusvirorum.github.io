<template>
  <div class="CvFullWidthImage" :class="modifiers">
    <img class="CvFullWidthImage__image" :src="imgSrc" />
    <p class="CvFullWidthImage__imageText">{{text}}</p>
  </div>
</template>

<script>

export default {
  name: 'CvFullWidthImage',
  props: {
    imgSrc: String,
    text: String,
  },
  computed: {
    modifiers() {
      return {
      };
    }
  },
}
</script>

<style lang="scss">
.CvFullWidthImage {
  .CvFullWidthImage__image {
    width: 100%;
    height: auto;
  }

  .CvFullWidthImage__imageText {
    margin-top: .5rem;
    text-align: center;
    font-style: italic;
  }
}
</style>

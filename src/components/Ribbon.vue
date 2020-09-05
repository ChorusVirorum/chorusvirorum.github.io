<template>
  <div class="CvRibbon" :class="modifiers">
  </div>
</template>

<script>

export default {
  name: 'CvRibbon',
  computed: {
    modifiers() {
      return {
      };
    }
  }
}
</script>

<style lang="scss">
.CvRibbon {
  height: .25rem;
  background-color: white;
  border-top: .5rem solid var(--color-cv);
  border-bottom: .5rem solid black;
}
</style>

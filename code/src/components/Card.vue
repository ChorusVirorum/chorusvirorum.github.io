<template>
  <div class="CvCard" :class="modifiers">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CvCard',
  props: {
    wide: Boolean
  },
  computed: {
    modifiers() {
      return {
        'CvCard--wide': this.wide
      };
    }
  },
}
</script>

<style lang="scss">
.CvCard {
  width: 100%;
  background-color: var(--color-text-background);
  box-shadow: 0px 0px 15px #e5e5e5;
  border-radius: .25rem;
}
</style>

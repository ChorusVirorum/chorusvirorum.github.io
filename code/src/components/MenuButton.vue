<template>
  <button class="CvMenuButton" @click="onClick" :class="modifiers">
    <CvMenuIcon />
  </button>
</template>

<script>
import CvMenuIcon from './icons/MenuIcon.vue'

export default {
  name: 'CvMenuButton',
  components: {
    CvMenuIcon
  },
  props: {
    onClick: Function,
    focus: Boolean,
  },
  computed: {
    modifiers() {
      return {
        'CvMenuButton--focused': this.focus,
      };
    }
  }
}
</script>

<style lang="scss">
.CvMenuButton {
  outline: none;
  border: none;

  height: 4rem;
  width: 4rem;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 2rem;
  color: var(--color-cv);
  background-color: black;
  border-radius: 2rem;

  box-shadow: 0px 1px 2px grey;
}
</style>

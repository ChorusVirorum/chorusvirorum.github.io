<template>
  <div class="CvFooter" :class="modifiers">
    <img class="CvFooter__student" src="../assets/student.png"/>
    <p>&copy; 2020 - Chorus Virorum</p>
    <p>Kontakt: <a href="mailto:chorusvirorum@gmail.com">chorusvirorum@gmail.com</a></p>
  </div>
</template>

<script>
// import CvIcon from './icons/CvIcon.vue'
//import CvRibbon from './Ribbon.vue'

export default {
  name: 'CvFooter',
  components: {
    // CvIcon,
    //CvRibbon
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
.CvFooter {
  padding: 1rem;

  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: .5rem;

  .CvFooter__student {
    height: 3rem;
    width: auto;
  }

  p {
    margin: 0;
    padding: 0;
  }
}
</style>

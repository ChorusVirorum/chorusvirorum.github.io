<template>
  <div class="CvAbout">
    <CvCard>
      <div class="CvAbout__inner">
        <h1>Om kören</h1>
        <router-view />
      </div>
    </CvCard>
  </div>
</template>

<script>
import CvCard from '../components/Card';
export default {
  name: 'CvAbout',
  components: {
    CvCard
  }
}
</script>

<style lang="scss">
.CvAbout {
  max-width: var(--width-text);
  margin-left: auto;
  margin-right: auto;

  .CvAbout__inner {
    padding-top: 1px;
    padding-bottom: 1px;

    p {
      margin-left: 1rem;
      margin-right: 1rem;
      text-align: left;
    }
  }
}
</style>

<template>
  <div class="CvHome">
    <CvCard>
      <CvSplash />
    </CvCard>

    <div class="CvHome__thin">
      <CvCard>
        <div class="CvHome__text">
          <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
        </div>
      </CvCard>
    </div>
  </div>
</template>

<script>
import CvSplash from '../components/Splash';
import CvCard from '../components/Card';

export default {
  name: 'CvHome',
  components: {
    CvSplash,
    CvCard
  }
}
</script>

<style lang="scss">
.CvHome {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  justify-items: center;

  row-gap: 1rem;
}

.CvHome__thin {
  max-width: var(--width-text);
}

.CvHome__text {
  max-width: var(--width-text);
  text-align: left;
  
  p {
    padding: 1rem;
    margin: 0;
  }
}
</style>

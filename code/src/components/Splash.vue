<template>
  <div class="CvSplash">
    <h1 class="CvSplash__welcome">
      Välkommen till 
      <span class="CvSplash__cvName">
        Chorus Virorum
      </span>
      Nationis Norlandicae
    </h1>
    <div class="CvSplash__banner">
    </div>
    <p class="CvSplash__subheading">
      Uppsalas äldsta manskör <br/>
      <i>I nationens tjänst sedan 1853</i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CvSplash',
}
</script>

<style lang="scss">
.CvSplash {
  width: 100%;
  display: grid;
  justify-items: center;
}

.CvSplash__welcome {
  margin: 1rem;
  padding-top: 1px;
  font-size: 1.5rem;
  color: var(--color-text);
  font-style: italic;
  text-align: center;
  width: 100%;
}

.CvSplash__cvName {
  display: block;
  font-style: normal;
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-cv);
}

.CvSplash__banner {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 40vh;
  background-image: url('../assets/cv2020.jpg');
  background-position: right; 
  background-size: cover;
  background-repeat: no-repeat;
}

.CvSplash__subheading {
  margin: 0;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  font-family: var(--font-cv);
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

</style>

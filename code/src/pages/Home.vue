<template>
  <div class="CvHome">
    <h1 class="CvHome__welcome">
      Välkommen till 
      <span class="CvHome__cvName">
        Chorus Virorum
      </span>
      Nationis Norlandicae
    </h1>
    <div class="CvHome__banner">
    </div>

    <p class="CvHome__subheading">
      Uppsalas äldsta manskör <br/>
      <i>I nationens tjänst sedan 1853</i>
    </p>

    <div class="CvHome__text">
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
      <p>Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro dåligt hopkomna och af otillräckligt. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvHome',
}
</script>

<style scss>
.CvHome {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1px;
  padding-bottom: 1px;
  background-color: var(--color-text-background);
}

.CvHome__welcome {
  margin: 1rem;
  font-size: 1.5rem;
  color: var(--color-text);
  font-style: italic;
  text-align: center;
}

.CvHome__cvName {
  display: block;
  font-style: normal;
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-cv);
}

.CvHome__banner {
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

.CvHome__subheading {
  margin: 1rem;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
}

.CvHome__text {
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

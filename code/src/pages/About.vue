<template>
  <div class="CvAbout">
    <h1>Om kören</h1>

    <h2>Historia</h2>
    <CvFullWidthImage 
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/8/86/Cv-norrland.jpg"
      text="Sångarfärden till Norrland 1998. Hallen vid Storsjön, Jämtland"
    />
    <p>Kören har anor ända från nationens bildande, år 1827, eftersom det enligt 
      nationsannalerna redan då fanns en manskör som uppträdde vid större fester. 
      Den fick dock officiell status först den 28 januari 1853 då landskapet tillsatte 
      en sånganförare och en sångfiskal (notförvaltare) för Sångföreningen, som den då 
      hette. Intensiteten i verksamheten liksom körens namn har varierat under tidens lopp. 
      Åren 1882–1912 var en mycket aktiv period i körens historia då bland annat fem 
      omfattande sångarfärder till alla större städer i Norrland företogs i syfte att 
      samla in pengar till bygget av nationshuset. 1930-talet, då kören leddes av Torsten 
      Sundelin, var också en uppgångstid samt det tidiga 1950-talet med Folke Bohlin 
      som anförare. En nedgångsperiod började i slutet av 1950-talet då den nybildade 
      blandade kören, Norrlandskören, tilldrog sig större intresse, och en definitiv 
      svacka utgjorde 1970-talet. I svallvågorna efter 1968 fick gamla manskörstraditioner 
      allt svårare att hävda sig, och kören smalt ner till först en dubbelkvartett och 
      senare en kvartett. Med nationens officiella kvartett som återstående grund, under 
      sånganförarens ledning, började uppgången från mitten av 1980-talet och allt fler 
      ville sjunga manskör. 1990-talet blev en stor expansionsperiod, och kören blev åter 
      även rent formellt en förening vid nationen. </p>
    <CvFullWidthImage 
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/7/70/Norrlands_nation_Chorus_Virorum%2C_1908.jpg"
      text="Sångarfärden till Norrland 1908. Gustav Adolfs kyrka, Stenstan, Sundsvall, Medelpad"
    />
  </div>
</template>

<script>
import CvFullWidthImage from '../components/FullWidthImage';
export default {
  name: 'CvAbout',
  components: {
    CvFullWidthImage
  }
}
</script>

<style lang="scss">
.CvAbout {
  h1 {
    margin-left: 1rem;
    margin-right: 1rem;
    color: var(--color-heading);
    font-size: 2.5rem;
    text-align: center;
  }
  h2 {
    text-align: center;
    position: sticky;
    top: 1.25rem;
    background-color: var(--color-white);
    color: var(--color-heading);
  }
  p {
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
  }
}
</style>

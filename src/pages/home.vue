<template>
    <div>
      <HomeBanner />
      <Cards />
      <GlobalImpact />
      <About /> 
    </div>
  </template>
  
  <script>
  import HomeBanner from '../components/homeBanner.vue';
  import Cards from '../components/Cards.vue';
  import GlobalImpact from '../components/GlobalImpact.vue';
  import About from '../components/About.vue';
  
  export default {
    name: 'Home', // Assurez-vous d'exporter le composant
    components: {
      HomeBanner,
      Cards,
      GlobalImpact,
      About,
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour Home */
  </style>
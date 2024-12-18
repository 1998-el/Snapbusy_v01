<template>
    <div class="main-layout">
      <Navbar />
      <div class="content">
        <slot></slot>
      </div>
      <Footers />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  import Footers from './components/Footers.vue';
  
  export default {
    components: {
      Navbar,
      Footers,
    },
  };
  </script>
  
  <style scoped>
  .main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1; /* Permet au contenu de prendre tout l'espace disponible */
    padding: 0; /* Ajoute un espacement autour du contenu */
    background-color: #f9f9f9; /* Couleur de fond pour le contenu */
  }

  
  
  </style>
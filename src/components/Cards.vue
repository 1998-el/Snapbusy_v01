<template>
    <div :class="$style.container">
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 :class="$style.sectionTitle">Optimisez la gestion de vos données avec notre plateforme</h2>
        <p :class="$style.sectionDescription">
          Notre plateforme vous offre des outils puissants pour centraliser, analyser et visualiser vos données de manière efficace et sécurisée. Découvrez comment nos services peuvent vous aider à prendre des décisions éclairées et à améliorer vos performances.
        </p>
      </div>
  
      <div :class="$style.threeCards">
        <div :class="$style.card" data-aos="fade-up" data-aos-delay="200">
          <h3 :class="$style.cardTitle">Centraliser vos données</h3>
          <p :class="$style.cardDescription">
            Rassemblez toutes vos données dans un seul endroit sécurisé pour une meilleure gestion. Fini le stockage dispersé et les difficultés d'accès à l'information. Notre plateforme vous permet de centraliser vos données de manière organisée et accessible.
          </p>
        </div>
        <div :class="$style.card" data-aos="fade-up" data-aos-delay="400">
          <h3 :class="$style.cardTitle">Analyser vos données</h3>
          <p :class="$style.cardDescription">
            Exploitez vos données pour prendre des décisions éclairées et améliorer vos performances. Notre solution d'analyse de données vous offre des outils puissants pour extraire des insights pertinents et exploiter pleinement le potentiel de vos informations.
          </p>
        </div>
        <div :class="$style.card" data-aos="fade-up" data-aos-delay="600">
          <h3 :class="$style.cardTitle">Créer des tableaux de bord</h3>
          <p :class="$style.cardDescription">
            Visualisez vos données avec des tableaux de bord personnalisés et intuitifs. Transformez vos données brutes en informations exploitables grâce à des visualisations claires et dynamiques. Prenez des décisions éclairées en un coup d'œil.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Aos from 'aos';
  import 'aos/dist/aos.css';
  
  // Initialiser AOS lors du montage du composant
  onMounted(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  });
  </script>
  
  <style module>
 @import '../styles/cards.module.scss';
  </style>
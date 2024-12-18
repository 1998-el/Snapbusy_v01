<template>
  <div :class="$style.banner">
    <div :class="$style.content" data-aos="fade-up">
      <h1 :class="$style.title">Exploitez vos données pour prendre de meilleures décisions</h1>
      <p :class="$style.description">
        Notre plateforme de data analytics vous permet d'analyser en profondeur vos données pour
        identifier les tendances, les opportunités et les défis de votre entreprise.
      </p>
      <div :class="$style.actions">
        <button :class="[$style.btn, $style.btnPrimary]" aria-label="Découvrir nos solutions">
          Découvrir nos solutions
        </button>
        <button :class="[$style.btn, $style.btnSecondary]" aria-label="Contactez-nous">
          Contactez-nous
        </button>
      </div>
    </div>
    <div :class="$style.illustration" data-aos="zoom-in">
      <img :src="bg_baner" alt="Illustration de data analytics" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import bg_baner from '../assets/bg_baner.svg'; 
import Aos from 'aos'; // Assurez-vous d'importer AOS
import 'aos/dist/aos.css'; // Assurez-vous que ce chemin est correct


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
@import '../styles/home_baner.module.scss'; 
</style>
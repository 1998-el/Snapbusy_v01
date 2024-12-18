<template>
    <div :class="$style.container">
      <div :class="$style.content" data-aos="fade-up" data-aos-delay="100">
        <div :class="$style.textContent"> 
          <h2 :class="$style.title">Notre impact mondial</h2>
          <p :class="$style.description" data-aos="fade-up" data-aos-delay="200">
            Notre plateforme de gestion de données est utilisée par des milliers d'entreprises et de professionnels à travers le monde. Découvrez l'étendue de notre impact.
          </p>
          <div :class="$style.stats">
            <div :class="$style.stat">
              <h3 :class="$style.statNumber" ref="statNumberRef">{{ statNumber.toLocaleString() }}+</h3>
              <p :class="$style.statLabel" data-aos="fade-up" data-aos-delay="400">Entreprises utilisatrices</p>
            </div>
            <div :class="$style.stat">
              <h3 :class="$style.statNumber" ref="statNumberRef_">{{ statNumber_.toLocaleString() }}+</h3>
              <p :class="$style.statLabel" data-aos="fade-up" data-aos-delay="400">Utilisateurs dans le monde</p>
            </div>
          </div>
        </div>
        <div :class="$style.imageContent"> 
          <img :src="map" alt="Notre impact mondial" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import map from '../assets/map1_.png';
  
  export default {
    setup() {
      const statNumber = ref(0);
      const statNumber_ = ref(0);
      const statNumberRef = ref(null);
      const statNumberRef_ = ref(null);
  
      const incrementNumbers = () => {
        const targetNumber = 15000;
        const targetNumber_ = 20000;
        const incrementStep = 100;
  
        const incrementNumber = () => {
          if (statNumber.value < targetNumber || statNumber_.value < targetNumber_) {
            if (statNumber.value < targetNumber) {
              statNumber.value += incrementStep;
            }
            if (statNumber_.value < targetNumber_) {
              statNumber_.value += incrementStep;
            }
            requestAnimationFrame(incrementNumber);
          }
        };
  
        incrementNumber();
      };
  
      onMounted(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              incrementNumbers();
            }
          });
        }, { rootMargin: '0px', threshold: 0.5 });
  
        if (statNumberRef.value) {
          observer.observe(statNumberRef.value);
        }
  
        if (statNumberRef_.value) {
          observer.observe(statNumberRef_.value);
        }
  
        onBeforeUnmount(() => {
          if (statNumberRef.value) {
            observer.unobserve(statNumberRef.value);
          }
          if (statNumberRef_.value) {
            observer.unobserve(statNumberRef_.value);
          }
        });
      });
  
      return {
        statNumber,
        statNumber_,
        statNumberRef,
        statNumberRef_,
        map, // Ajout de la variable map pour l'accès dans le template
      };
    },
  };
  </script>
  
  <style module>
  @import '../styles/globalimpact.module.scss';
  </style>
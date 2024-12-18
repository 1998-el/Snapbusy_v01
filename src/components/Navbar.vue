<template>
  <div :class="$style.navbar">
    <div
      :class="[$style.menuburger, { [$style.open]: isMenuOpen }]"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="$style.brand">
      <router-link to="/home" :class="$style.navlink">
        <img :src="log_dark" alt="Logo de l'entreprise" :class="$style.logo" />
      </router-link>
      
    </div>
    <ul :class="[isMobile ? $style.mobile : $style.nav, { [$style.show]: isMenuOpen }]">
      <li :class="$style.navitem">
        <router-link to="/" :class="$style.navlink">Blog</router-link>
      </li>
      <li :class="$style.navitem">
        <router-link to="/" :class="$style.navlink">API</router-link>
      </li>
      <li :class="$style.navitem">
        <router-link to="/" :class="$style.navlink">Solutions</router-link>
      </li>
      <li :class="$style.navitem">
        <router-link to="/" :class="$style.navlink">Help</router-link>
      </li>
      <li :class="$style.navitem">
        <router-link to="/" :class="$style.navlink">Contact</router-link>
      </li>
    </ul>
    <div :class="$style.navbaractions">
      <router-link to="/" :class="$style.btnlogin">Login</router-link>
      <router-link to="/" :class="$style.btnsignup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import log_dark from '../assets/logo.png';

export default {
  setup() {
    const isMenuOpen = ref(false);
    const isMobile = ref(false);

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      log_dark,
      isMenuOpen,
      isMobile,
      toggleMenu,
    };
  },
};
</script>

<style module>
@import '../styles/header.module.scss';
</style>
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/styles/variables" as vars; @use "@/styles/mixins" as mixins;`
      }
    }
  },
  // Configuration pour les éléments personnalisés
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'Footers', // Remplacez 'footers' par le nom de votre élément personnalisé
    },
  },
});
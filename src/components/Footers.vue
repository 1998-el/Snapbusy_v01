<template>
    <footer :class="$style.footer">
      <div :class="$style.container">
        <div :class="$style.contactInfo">
          <h3>Nous contacter</h3>
          <p>123 Rue Ahidjo, 75000 Yaoundé</p>
          <p>Tél. : 01 23 45 67 89</p>
          <p>contact@monsite.com</p>
        </div>
        <div :class="$style.quickLinks">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Plan du site</a></li>
          </ul>
        </div>
        <div :class="$style.socialMedia">
          <h3>Suivez-nous</h3>
          <ul>
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div :class="$style.newsletter">
          <h3>Abonnez-vous à notre newsletter</h3>
          <form @submit.prevent="subscribe">
            <input type="email" placeholder="Votre adresse e-mail" v-model="email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      <hr :class="$style.separator" />
      <div :class="$style.copyright">
        <p>&copy; 2023 snapbusy. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  
  export default {
    name: 'Footers',
    data() {
      return {
        email: '', // Pour stocker l'email de l'utilisateur
      };
    },
    methods: {
      subscribe() {
        // Logique pour gérer l'inscription à la newsletter
        console.log(`Inscription avec l'email: ${this.email}`);
        // Vous pouvez ajouter ici une logique pour envoyer l'email à votre backend
      },
    },
    
    
  };
  </script>
  
  <style module>
  @import '../styles/footer.module.scss';
  </style>
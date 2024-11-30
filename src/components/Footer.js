import React from 'react';
import styles from '../styles/Footer/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Nous contacter</h3>
          <p>123 Rue Ahidjo, 75000 Yaounde</p>
          <p>Tél. : 01 23 45 67 89</p>
          <p>contact@monsite.com</p>
        </div>
        <div className={styles.quickLinks}>
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Plan du site</a></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h3>Suivez-nous</h3>
          <ul>
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h3>Abonnez-vous à notre newsletter</h3>
          <form>
            <input type="email" placeholder="Votre adresse e-mail" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      <hr className={styles.separator}></hr>
      <div className={styles.copyright}>
        <p>&copy; 2023 snapbusy. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
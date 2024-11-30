import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import styles from '../styles/Home/about.module.scss';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}  data-aos="fade-up" data-aos-delay="100">
        <h2 className={styles.sectionTitle}  data-aos="fade-up" data-aos-delay="100">À propos de notre entreprise</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutItem}>
            <h3 className={styles.aboutTitle}  data-aos="fade-up" data-aos-delay="200">Notre mission</h3>
            <p className={styles.aboutDescription}  data-aos="fade-up" data-aos-delay="200">
              Notre mission est de vous offrir des outils puissants pour gérer vos données de manière efficace et sécurisée. Nous sommes convaincus que la maîtrise de vos informations est essentielle pour prendre des décisions éclairées et améliorer vos performances.
            </p>
          </div>
          <div className={styles.aboutItem}>
            <h3 className={styles.aboutTitle}  data-aos="fade-up" data-aos-delay="300">Notre histoire</h3>
            <p className={styles.aboutDescription}  data-aos="fade-up" data-aos-delay="300">
              Fondée en 2022, notre entreprise a été créée dans le but de révolutionner la gestion des données pour les entreprises de toutes tailles. Grâce à l'expertise de notre équipe et à notre engagement envers l'innovation, nous avons pu développer une plateforme unique sur le marché.
            </p>
          </div>
          <div className={styles.aboutItem}>
            <h3 className={styles.aboutTitle}  data-aos="fade-up" data-aos-delay="400">Nos valeurs</h3>
            <p className={styles.aboutDescription} data-aos="fade-up" data-aos-delay="400">
              Chez nous, nous accordons une grande importance à l'excellence, à l'intégrité et à l'innovation. Nous mettons un point d'honneur à offrir à nos clients des solutions de qualité qui répondent à leurs besoins de manière durable et éthique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
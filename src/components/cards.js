import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/cards/card.module.scss';

function ThreeCards() {
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
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className={styles.sectionTitle}>Optimisez la gestion de vos données avec notre plateforme</h2>
        <p className={styles.sectionDescription}>
          Notre plateforme vous offre des outils puissants pour centraliser, analyser et visualiser vos données de manière efficace et sécurisée. Découvrez comment nos services peuvent vous aider à prendre des décisions éclairées et à améliorer vos performances.
        </p>
      </div>

      <div className={styles.threeCards}>
        <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
          <h3 className={styles.cardTitle}>Centraliser vos données</h3>
          <p className={styles.cardDescription}>
            Rassemblez toutes vos données dans un seul endroit sécurisé pour une meilleure gestion. Fini le stockage dispersé et les difficultés d'accès à l'information. Notre plateforme vous permet de centraliser vos données de manière organisée et accessible. [[1]]
          </p>
        </div>
        <div className={styles.card} data-aos="fade-up" data-aos-delay="400">
          <h3 className={styles.cardTitle}>Analyser vos données</h3>
          <p className={styles.cardDescription}>
            Exploitez vos données pour prendre des décisions éclairées et améliorer vos performances. Notre solution d'analyse de données vous offre des outils puissants pour extraire des insights pertinents et exploiter pleinement le potentiel de vos informations. [[2]]
          </p>
        </div>
        <div className={styles.card} data-aos="fade-up" data-aos-delay="600">
          <h3 className={styles.cardTitle}>Créer des tableaux de bord</h3>
          <p className={styles.cardDescription}>
            Visualisez vos données avec des tableaux de bord personnalisés et intuitifs. Transformez vos données brutes en informations exploitables grâce à des visualisations claires et dynamiques. Prenez des décisions éclairées en un coup d'œil. [[3]]
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeCards;
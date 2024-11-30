import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Home/home_banner.module.scss';
import home_banner from '../assets/Fond/bg_baner.svg';

function HomeBanner() {
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
    <div className={styles.banner}>
      <div className={styles.content} data-aos="fade-up">
        <h1 className={styles.title}>Exploitez vos données pour prendre de meilleures décisions</h1>
        <p className={styles.description}>
          Notre plateforme de data analytics vous permet d'analyser en profondeur vos données pour
          identifier les tendances, les opportunités et les défis de votre entreprise.
        </p>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Découvrir nos solutions
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            Contactez-nous
          </button>
        </div>
      </div>
      <div className={styles.illustration} data-aos="zoom-in">
        <img src={home_banner} alt="Illustration de data analytics" />
      </div>
    </div>
  );
}

export default HomeBanner;
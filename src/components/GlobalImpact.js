import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Home/globalimpact.module.scss';
import map from '../assets/Fond/map1_.png';

function GlobalImpact() {
  const [statNumber, setStatNumber] = useState(0);
  const [statNumber_, setStatNumber_] = useState(0);
  const statNumberRef = useRef(null);
  const statNumberRef_ = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumber = 15000;
            const targetNumber_ = 20000;
            const incrementStep = 100;
            const incrementInterval = 10;

            const incrementNumber = () => {
              if (statNumber < targetNumber || statNumber_ < targetNumber_) {
                setStatNumber((prevStatNumber) =>
                  prevStatNumber < targetNumber ? prevStatNumber + incrementStep : prevStatNumber
                );
                setStatNumber_((prevStatNumber_) =>
                  prevStatNumber_ < targetNumber_ ? prevStatNumber_ + incrementStep : prevStatNumber_
                );
                requestAnimationFrame(incrementNumber);
              }
            };

            incrementNumber();
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    if (statNumberRef.current) {
      observer.observe(statNumberRef.current);
    }

    if (statNumberRef_.current) {
      observer.observe(statNumberRef_.current);
    }

    return () => {
      if (statNumberRef.current) {
        observer.unobserve(statNumberRef.current);
      }
      if (statNumberRef_.current) {
        observer.unobserve(statNumberRef_.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} data-aos="fade-up" data-aos-delay="100">
        <div className={styles.textContent}>
          <h2 className={styles.title}>Notre impact mondial</h2>
          <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
            Notre plateforme de gestion de données est utilisée par des milliers d'entreprises et de professionnels à travers le monde. Découvrez l'étendue de notre impact.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber} ref={statNumberRef}>
                {statNumber.toLocaleString()}+
              </h3>
              <p className={styles.statLabel} data-aos="fade-up" data-aos-delay="400">
                Entreprises utilisatrices
              </p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber} ref={statNumberRef_}>
                {statNumber_.toLocaleString()}+
              </h3>
              <p className={styles.statLabel} data-aos="fade-up" data-aos-delay="400">
                Utilisateurs dans le monde
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img src={map} alt="Notre impact mondial" />
        </div>
      </div>
    </div>
  );
}

export default GlobalImpact;
import React from 'react';
import styles from './WorkWithUs.module.css';

const WorkWithUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Lavora con Noi</h2>
      </div>
      <div className={styles.section}>
        <h3>Chi Siamo</h3>
        <p>
          Siamo un'azienda leader nel settore, impegnata a fornire servizi di alta qualità. La nostra missione è creare valore per i nostri clienti e per la comunità.
        </p>
      </div>
      <div className={styles.section}>
        <h3>Posizioni Aperte</h3>
        <p>
          - Sviluppatore Frontend<br />
          - Sviluppatore Backend<br />
          - Project Manager<br />
          - Designer UX/UI
        </p>
      </div>
      <div className={styles.section}>
        <h3>Perché Lavorare con Noi</h3>
        <p>
          Offriamo un ambiente di lavoro stimolante, opportunità di crescita professionale e un pacchetto di benefici competitivo.
        </p>
      </div>
      <button className={styles.applyButton}>Candidati Ora</button>
    </div>
  );
};

export default WorkWithUs;

import React from 'react';
import styles from './PasswordSettings.module.css';

function EmailSettings() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Modifica Email</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Nuovo Indirizzo Email:</label>
              <input type="email" id="email" name="email" className={styles.input} />
            </div>
            <button type="submit" className={styles.button}>Salva</button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src="assets/IL BIM 6.jpg" alt="Email" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default EmailSettings;

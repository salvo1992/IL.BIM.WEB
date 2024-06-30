import React from 'react';
import Styles from './contatti.module.css';
const Contatti = () => {
    return (
        <div className={Styles.contattiPage}>
        <div className={Styles.container}>
            <h1>IL BIM NETWORK</h1>
          <h1>Contattaci</h1>
          <div className={Styles.contattiContent}>
            <div className={Styles.contattiInfo}>
              <h2>Informazioni di contatto</h2>
              <p>Se hai bisogno di assistenza o hai domande, non esitare a contattarci.</p>
              <ul>
                <li>Email: info@IL-BIM.com</li>
                <li>Telefono: +1234567890</li>
                <li>Indirizzo: Via delle Rose, 123, Città</li>
              </ul>
            </div>
            <div className={Styles.contattiImage}>
              <img src="assets/il bim5.avif"alt="Contatti" />
            </div>
          </div>
          <div className={Styles.contattiForm}>
            <h2>Invia un messaggio</h2>
            <form>
              <div className={Styles.formGroup}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={Styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={Styles.formGroup}>
                <label htmlFor="message">Messaggio:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button className={Styles.button} type="submit">Invia</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
export default Contatti;

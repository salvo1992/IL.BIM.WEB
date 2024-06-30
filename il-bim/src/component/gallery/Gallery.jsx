import React from 'react';
import styles from './Gallery.module.css';

const photos = [
  { id: 1, src: 'assets/il bim5.avif', title: 'Progetto 1', description: 'Descrizione del progetto 1' },
  { id: 2, src: 'assets/il bim5.avif', title: 'Progetto 2', description: 'Descrizione del progetto 2' },
  { id: 3, src: 'assets/il bim5.avif', title: 'Progetto 3', description: 'Descrizione del progetto 3' },
  { id: 4, src: 'assets/il bim5.avif', title: 'Progetto 4', description: 'Descrizione del progetto 4' },
  { id: 5, src: 'assets/il bim5.avif', title: 'Progetto 5', description: 'Descrizione del progetto 5' },
  { id: 6, src: 'assets/il bim5.avif', title: 'Progetto 6', description: 'Descrizione del progetto 6' },
  { id: 7, src: 'assets/il bim5.avif', title: 'Progetto 7', description: 'Descrizione del progetto 7' },
  { id: 8, src: 'assets/il bim5.avif', title: 'Progetto 8', description: 'Descrizione del progetto 8' },
  { id: 9, src: 'assets/il bim5.avif', title: 'Progetto 9', description: 'Descrizione del progetto 9' },
  { id: 10, src: 'assets/il bim5.avif', title: 'Progetto 10', description: 'Descrizione del progetto 10' },
];

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Galleria dei Progetti</h2>
        <p>
          Benvenuti nella nostra galleria! Qui troverete una selezione dei nostri progetti recenti,
          che mostrano la nostra esperienza e competenza nella gestione della costruzione edile e architettonica.
        </p>
      </div>
      <div className={styles.gallery}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.gallerys}>
            <img src={photo.src} alt={photo.title} />
            <div className={styles.caption}>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

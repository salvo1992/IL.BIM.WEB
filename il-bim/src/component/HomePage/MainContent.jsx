// src/components/MainContent.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainContent.module.css';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import ErrorAlert from '../alerts/errorAlert';
import useSession from '../hooks/useSession';
import { useRef, useState } from 'react';

const MainContent = () => {
    const isAuthenticated = useSession();
    const isLoadingRef = useRef(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <div className={`container pt-5 pb-5 ${styles.pageContainer}`}>
            <div className="row">
                <div className={styles.iconTray}>
                <Link to="/Userprofile"><span className="fas fa-user"></span></Link> {/* Icona utente */}
    <Link to="/progetti futuri "><span className="fas fa-project-diagram"></span></Link> {/* progetti futuri  */}
    <Link to="/lavora con noi "><span className="fas fa-briefcase"></span></Link> {/* lavora con noi  */}
    <Link to="/feedback"><span className="fas fa-comment-dots"></span></Link> {/* feedback */}
    <Link to="/settings"><span className="fas fa-cog"></span></Link> {/* Icona ingranaggio */}
    <Link to="/Home"><span className="fas fa-home"></span></Link> {/* Icona HOME */}
    <Link to="/notificationsSettings"><span className="fas fa-bell"></span></Link> {/* Icona campanello */}
    <Link to="/Galleria"><span className="fas fa-camera"></span></Link> {/* Icona galleria */}
    <Link to="/#"><span className="fas fa-door-open"></span></Link> {/* Icona porta */}
                </div>

                {isLoading && <LoadingIndicator />}
                {error && <ErrorAlert message="Oops! Qualcosa è andato storto durante il caricamento dei dati" />}
                
                <div className={styles.container}>
    <div className={styles.banner}>
        <img className={styles.bannerImages} src="/assets/BANNER BIM.webp" alt="Banner" />
    </div>
    <div className={styles.section}>
        <h2 className={styles.title}>Come i gemelli digitali possono rendere gli edifici più intelligenti</h2>
        <p className={styles.text}>
            Un gemello digitale è un modello virtuale di un bene fisico, prodotto o sistema. Questo rappresenta l'equivalente nel mondo virtuale di un bene nel mondo fisico. Questo può essere utilizzato per monitorare, analizzare e simulare il comportamento del bene fisico virtualmente.
        </p>
        <img className={styles.inlineImages} src="/assets/il bim5.avif" alt="Descrizione Immagine 1" />
        <p className={styles.text}>
            La creazione di un gemello digitale consente di usare le attuali tecnologie digitali dell’Internet delle Cose (IoT), intelligenza artificiale e analisi avanzate dei dati per raccogliere informazioni dal mondo reale e usarle in simulazioni, scenario e manutenzione predittiva. Uno degli obiettivi di un gemello digitale è migliorare le operazioni e la manutenzione dell’edificio, riducendo i costi e migliorando l’efficienza e la sicurezza. In questo contesto, le tecnologie emergenti come il 5G saranno fondamentali per abilitare le reti digitali più utili.
        </p>
        <img className={styles.inlineImage} src="/assets/il bim 3.jpeg" alt="Descrizione Immagine 2" />
    </div>
    <div className={styles.section}>
        <h2 className={styles.title}>Creazione di un gemello digitale di un edificio</h2>
        <p className={styles.text}>
            La prima fase per creare un gemello digitale di un edificio è la creazione di un modello BIM. L'edificio e i suoi sistemi sono modellati in 3D per una rappresentazione completa. Questo include non solo la struttura fisica dell'edificio ma anche i sistemi interni come gli impianti meccanici, elettrici e idraulici.
        </p>
        <img className={styles.inlineImage} src="/assets/bim 1.webp" alt="Descrizione Immagine 3" />
        <p className={styles.text}>
            Una volta creato il modello BIM, è possibile arricchirlo con sensori IoT. I dati raccolti dai sensori forniscono informazioni in tempo reale sulle condizioni dell'edificio, consentendo ai gestori di monitorare e controllare i sistemi in modo più efficiente.
        </p>
        <img className={styles.inlineImage} src="/assets/IL BIM 6.jpg" alt="Descrizione Immagine 4" />
    </div>
    <div className={styles.section}>
        <h2 className={styles.title}>Applicazioni dei gemelli digitali</h2>
        <p className={styles.text}>
            I gemelli digitali apportano numerosi vantaggi nelle operazioni e nella gestione degli edifici e dei sistemi energetici. Possono essere usati per ottimizzare l'uso delle risorse energetiche, monitorare le condizioni degli impianti e prevedere eventuali guasti.
        </p>
        <img className={styles.inlineImage} src="/assets/il bim coefficente energetico.jpeg" alt="Descrizione Immagine 5" />
        <p className={styles.text}>
            I gemelli digitali trovano applicazione non solo nella gestione degli edifici, ma anche in molti altri settori, come la gestione delle infrastrutture, l’industria manifatturiera, la sanità e i trasporti. Ad esempio, i gemelli digitali possono essere usati per simulare il comportamento di macchinari industriali, monitorare la condizione di ponti e strade e migliorare l'efficienza dei processi produttivi.
        </p>
        <img className={styles.inlineImages} src="/assets/il bim infrastrutture.jpg" alt="Descrizione Immagine 6" />
    </div>
    <div className={styles.section}>
        <h2 className={styles.title}>Conclusione</h2>
        <p className={styles.text}>
            Un gemello digitale offre vantaggi significativi nella gestione e manutenzione degli edifici. Permette di prendere decisioni informate basate su dati reali, migliorando l'efficienza, riducendo i costi e aumentando la sicurezza. Le tecnologie emergenti come il 5G e l'IoT sono fondamentali per il successo dei gemelli digitali, fornendo le reti digitali e i sensori necessari per raccogliere e analizzare i dati in tempo reale.
        </p>
        <img className={styles.inlineImages} src="/assets/il bim city.avif" alt="Descrizione Immagine 7" />
    </div>
</div>

            </div>
        </div>
    );
};

export default MainContent;








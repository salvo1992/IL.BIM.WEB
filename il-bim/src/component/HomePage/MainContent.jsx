import React, { useEffect, useState, useCallback, useRef } from 'react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import ErrorAlert from '../alerts/errorAlert';
import useSession from '../hooks/useSession';
import { nanoid } from '@reduxjs/toolkit';
import styles from './MainContent.module.css';
import useAuthToken from '../hooks/useAuthToken'; // Assicurati che il percorso sia corretto
import UserProfile from '../UserProfile/UserProfile';
import { Link } from 'react-router-dom';

const MainContent = () => {
    const token = useAuthToken(); // Recupera il token con il hook personalizzato
    const isAuthenticated = useSession();
    const isLoadingRef = useRef(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [newPosts, setNewPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [activeCardId, setActiveCardId] = useState(null);
    const [isCamelClicked, setIsCamelClicked] = useState(false);  // Nuovo stato per tracciare il clic sull'icona del cammello
    const [clicked, setClicked] = useState(false);
    const handleCamelClick = (e) => {
        e.stopPropagation();  // Previene la propagazione dell'evento al clic della card
        setIsCamelClicked(true);  // Imposta lo stato dell'icona del cammello come cliccato
    };



   // Funzione modificata per il clic della card
const handleCardClick = useCallback((id, event) => {
    if (!isCamelClicked) {  // Controlla se il clic non è sull'icona del cammello
        setActiveCardId(prevId => prevId === id ? null : id);
    }
}, [isCamelClicked]);
    

    const loadPosts = useCallback(async () => {
        if (!hasMore || isLoadingRef.current) return;
        isLoadingRef.current = true;
        setIsLoading(true);
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/newpost?page=${page}&pageSize=30`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        "authorization": `Bearer ${token}`, // Usa il token dal hook
                    },
                }
            );
            const data = await response.json();
            if (Array.isArray(data.newposts)) {
                console.log(data.newposts);  // Controlla i dati ricevuti
                const existingIds = new Set(newPosts.map(post => post.id));
                const filteredNewPosts = data.newposts.filter(post => !existingIds.has(post.id));
                setNewPosts(prev => [...prev, ...filteredNewPosts]);
                setHasMore(data.newposts.length === 30);
            } else {
                setError("Errore: newposts non è un array");
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
            isLoadingRef.current = false;
        }
    }, [hasMore, isLoadingRef, page, token, newPosts]); // Aggiunto token alle dipendenze

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight && !isLoadingRef.current) {
                setPage(prev => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoadingRef]);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);
    

    return (
        <div className={`container pt-5 pb-5 ${styles.pageContainer}`}>
        <div className="row">
        <div className={styles.iconTray}>
     <Link to="/Userprofile"><span className="fas fa-user"></span></Link> {/* Icona utente */}
    <Link to="/Camelfriend"><span className="fas fa-users"></span></Link> {/* Icona gruppo utenti */}
    <Link to="/Camelartist"><span className="fas fa-paint-brush"></span></Link> {/* Icona pittura */}
    <Link to="/Camelchat"><span className="fas fa-comments"></span></Link> {/* Icona chat */}
    <Link to="/settings"><span className="fas fa-cog"></span></Link> {/* Icona ingranaggio */}
    <Link to="/#"><span className="fas fa-door-open"></span></Link> {/* Icona porta */}
    <Link to="/walk"><span className="fas fa-walking"></span></Link> {/* Icona passi */}
    <Link to="/notificationsSettings"><span className="fas fa-bell"></span></Link> {/* Icona campanello */}
    <Link to="/CamelMusic"><span className="fas fa-music"></span></Link> {/* Icona matita */}
 
            </div>


            {isLoading && <LoadingIndicator />}
            {error && <ErrorAlert message="Oops! Qualcosa è andato storto durante il caricamento dei dati" />}
            {isAuthenticated && !isLoading && !error && newPosts.map((post) => {
                const formattedDate = new Date(post.createdAt).toLocaleDateString('it-IT');
                return (
                    <div key={nanoid()} className={`col-12 col-md-6 col-lg-4 col-xl-3 mb-3 ${styles.cardWrapper} ${post.id === activeCardId ? styles.cardActive : ''}`} onClick={() => handleCardClick(post.id)}>
                        <div className={`card ${styles.card}`}>
                            <img src={post.cover} className={`card-img-top ${styles.cardImage}`} alt="Cover" />
                            <div className={`card-body ${styles.cardBody}`}>
                                <h2 className={styles.title}>{post.title}</h2>
                                <p className={`card-text ${styles.description}`}>{post.description}</p>
                                <div className={styles.socialIcons}>
                                <img 
    src='/assets/icons8-camel-64 (1).png' 
    className={`${styles.iconCamel} ${isCamelClicked ? styles.cameClicked : ''}`} 
    alt="Camel Icon" 
    width="36" 
    height="36" 
      onClick={() => setClicked(!clicked)}
            style={{ cursor: 'pointer' }}
/>
                                    <i className="fas fa-comments"></i>
                                    <i className="fas fa-share-nodes"></i>
                                    <i className="fas fa-bookmark"></i>
                                </div>
                                <p className={`card-text ${styles.date}`}>Data di creazione: {formattedDate}</p>
                            </div>
                            
                            <div className={`card-footer ${styles.cardFooter}`}>
                                <p className={styles.username}>{post.firstName} {post.lastName || 'Non trovato'}</p>
                                
                            </div>
                        </div>
                    </div>
                   
                );
            })}
        </div>
    </div>
    )    
}

export default MainContent







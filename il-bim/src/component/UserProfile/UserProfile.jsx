import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import styles from './UserProfile.module.css';
import { Link } from 'react-router-dom';
//import {jwtDecode} from 'jwt-decode';
import Footer from '../footer/Footer';

const UserProfile = () => {
  


 return (
    <div className={styles.container}>
    <h1 className={styles.title}> User Profile</h1>
   
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

        
        <Footer/>
        </div>

    );

};

export default UserProfile;

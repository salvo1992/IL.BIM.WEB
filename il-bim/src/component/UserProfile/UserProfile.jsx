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
    <Link to="/progetti futuri "><span className="fas fa-project-diagram"></span></Link> {/* progetti futuri  */}
    <Link to="/lavora con noi "><span className="fas fa-briefcase"></span></Link> {/* lavora con noi  */}
    <Link to="/feedback"><span className="fas fa-comment-dots"></span></Link> {/* feedback */}
    <Link to="/settings"><span className="fas fa-cog"></span></Link> {/* Icona ingranaggio */}
    <Link to="/Home"><span className="fas fa-home"></span></Link> {/* Icona HOME */}
    <Link to="/notificationsSettings"><span className="fas fa-bell"></span></Link> {/* Icona campanello */}
    <Link to="/Galleria"><span className="fas fa-camera"></span></Link> {/* Icona galleria */}
    <Link to="/#"><span className="fas fa-door-open"></span></Link> {/* Icona porta */}
            </div>

        
        <Footer/>
        </div>

    );

};

export default UserProfile;

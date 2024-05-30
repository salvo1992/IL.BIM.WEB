import React from 'react';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';
import styles from './MainLayout.module.css';



const MainLayout = ({ children }) => {
    return (
        <>
        <div className={styles.body}>
            <NavigationBar />
           
            {children}
          
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
import React from 'react';

import Footer from '../component/footer/Footer';
import styles from './MainLayout.module.css';
import Sidebar from '../component/siderbar/Siderbar';



const MainLayoutUser = ({ children }) => {
    return (
        <>
        <div className={styles.body}>
            
            {children}
            
            </div>
            <Footer />
        </>
    )
}

export default MainLayoutUser
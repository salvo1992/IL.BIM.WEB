import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout'


const Success = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    useEffect(() => {
        if (token) {
            localStorage.setItem('auth', JSON.stringify(token));
        }
    }, [token]);

    return (
        <div>
           <MainLayout>
            
        </MainLayout>
        </div>
    );
};

export default Success;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const session = JSON.parse(localStorage.getItem('auth'));

    return session ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; 

const useSession = () => {
    const session = JSON.parse(localStorage.getItem('auth'));
    const decodedSession = session ? jwtDecode(session) : null;

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home', { replace: true });
        }
    }, [location, navigate]);

    return decodedSession;
};

export default useSession;



import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import { useNavigate } from 'react-router-dom';

export default function Game() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsUserSignedIn(!!token);

        // Simulating loading for demonstration purposes
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Set loading to false after 3 seconds
    }, []);

    useEffect(() => {
        if (!loading) {
            if (isUserSignedIn) {
                navigate('/map');
            } else {
                navigate('/welcome');
            }
        }
    }, [isUserSignedIn, loading, navigate]);

    return (
        <div>
            <SplashScreen loading={loading} isUserSignedIn={isUserSignedIn}/>
        </div>
    );
}

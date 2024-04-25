import React, { useState, useEffect } from 'react';
import logo from '../../_shared/assets/logo/white-logo.png';
import '../game.css';
import funFacts from '../../__constants/data'; // Import the fun facts data

function SplashScreen({ isUserSignedIn }) {

    const [randomFunFact, setRandomFunFact] = useState('');


    useEffect(() => {
        if (isUserSignedIn) {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            setRandomFunFact(funFacts[randomIndex]);
        }
    }, [isUserSignedIn]);

    
    return (
        <div>
            {isUserSignedIn ? (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary">
                    <div>
                        <h1 className="text-4xl font-secondary text-white mb-4">Fun Fact!</h1>
                        <p className="text-lg text-white">{randomFunFact}</p>
                    </div>
                </div>
            ) : (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary">
                    <img src={logo} className="h-20 w-14 bounce" alt="logo" />
                    <h1 className="text-4xl font-secondary text-white">uckwatsa</h1>
                </div>
            )}
        </div>
    );
}

export default SplashScreen;

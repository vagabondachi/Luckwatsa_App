import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './website/pages/Home';
import Solutions from './website/pages/Solutions';
import Features from './website/pages/Features';
import HowItWorks from './website/pages/How';
import Login from './game/screens/__Login';
import Register from './game/screens/__Register';
import Game from './game/Game';
import Map from './game/screens/_Map';
import Inventory from './game/screens/_Inventory';
import Leaderboards from './game/screens/_Leaderboards';
import Market from './game/screens/_Market';
import QrReader from './game/screens/_QrReader';
import Profile from './game/screens/Profile';
import Welcome from './game/screens/Welcome';
import GameCredits from './game/screens/GameCredits';

function App() {
    const isUserSignedIn = !!localStorage.getItem('token')
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/features" element={<Features />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/game" element={<Game />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome />} />

                {isUserSignedIn &&
                <>
                <Route path="/map" element={<Map />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/leaderboards" element={<Leaderboards />} />
                <Route path="/market" element={<Market />} />
                <Route path="/qr" element={<QrReader />} />
                <Route path="/profile" element={<Profile />} />    
                <Route path="/gamecredits" element={<GameCredits/>} />
                </>
                }                
            </Routes>
        </Router>
        </>
    );
}

export default App;

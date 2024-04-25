import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SettingsModal({ handleClose }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/welcome');
    };

    const handleGameCredits = () => {
        navigate('/gamecredits'); // Navigate to GameCredits component
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-bold mb-4">Settings</h2>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600" onClick={handleLogout}>
                    Logout
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-400" onClick={handleGameCredits}>
                    Game Credits
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-400" onClick={handleClose}>   
                    Close
                </button>
            </div>
        </div>
    );
}

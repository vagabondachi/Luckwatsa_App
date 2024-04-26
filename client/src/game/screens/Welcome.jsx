import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../_shared/assets/logo/logo.png'
export default function PlayerSelection() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-8 rounded-lg w-full max-w-[580px]">
                <img src={logo} alt="Company Logo" className="w-70 h-20 mx-auto mb-8" />
                <div className="flex flex-col space-y-4">
                    <Link to="/login" className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition duration-300 text-center">
                        Returning Player
                    </Link>
                    <Link to="/register" className="w-full border border-primary text-primary py-3 rounded-md hover:border-primary transition duration-300 text-center">
                        New Player
                    </Link>
                </div>
            </div>
        </div>
    );
}

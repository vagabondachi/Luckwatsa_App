import React, { useEffect, useState } from 'react';
import googleLogo from '../../_shared/assets/logo/google.png';
import facebookLogo from '../../_shared/assets/logo/fb.png';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [user, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = () => {
        axios
        .get('https://luckwatsa.vercel.app/register')
        .then((res) =>{
            // console.log(res.data)
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        axios
        .post('https://luckwatsa.vercel.app/register', { email, username, password})
        .then(() => {
            alert('Registration Successful');
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers('')
            navigate('/login')
        })
        .catch((error)=>{
            console.log('Registration fail')
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="p-8 rounded-lg w-full max-w-[580px]">
        <Link to="/welcome" className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md"><h1 className="w-6 h-6 text-gray-600">back</h1></Link>
            <h1 className="text-3xl font-bold mb-4 text-center font-primary">Create Your Profile</h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div className="relative">
                    <input type="text" id="username" name="username" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">username</label>
                </div>
                <div className="relative">
                    <input type="text" id="email" name="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email</label>
                </div>
                <div className="relative">
                    <input type="password" id="password" name="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                </div>
                {/* {success &&
                <span>You've successfully created an account.</span>
                }
                {error &&
                <span>Sorry, something went wrong. Please try again later.</span>
                } */}
                <button type="submit" className="w-full bg-accentLightBlue text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 font-secondaryRegular">Create Account</button>
            </form>
            <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="bg-white px-2">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                    <button className="flex items-center border border-accentGray text-accentBlue px-4 py-2 rounded-md hover:bg-accentWhiteGray transition duration-300 font-primary">
                        <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                        Google
                    </button>
                    <button className="flex items-center border border-accentGray text-accentBlue px-4 py-2 rounded-md hover:bg-accentWhiteGray transition duration-300 font-primary">
                        <img src={facebookLogo} alt="Facebook Logo" className="w-6 h-6 mr-2" />
                        Facebook
                    </button>
                </div>
                <div className="mt-4 text-sm text-center text-gray-500 font-secondaryRegular">
                    Already have an account? <Link to ="/login">Login</Link>
                </div>
        </div>
    </div>
    )
}

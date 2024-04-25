import React from 'react'
import HUD from '../components/HUD'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
export default function _Leaderboards() {
    return (
        <div className="bg-primary w-full max-w-[1280px] h-full mx-auto">
        <HUD></HUD>
        <Link to ="/map"><FaArrowLeft></FaArrowLeft></Link>
        <div>Leader boards</div>
        </div>

    )
}

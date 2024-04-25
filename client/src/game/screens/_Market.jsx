import React from 'react'
import HUD from '../components/HUD'
import { Link } from 'react-router-dom'

export default function _Market() {
    return (
        <div className="bg-primary w-full max-w-[1280px] h-full mx-auto">
            <HUD></HUD>
            <Link to ="/map"></Link>
            <div>Market</div>
        </div>
    )
}

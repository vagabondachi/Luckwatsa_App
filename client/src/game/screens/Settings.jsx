import React from 'react'
import { Link } from 'react-router-dom'
export default function Settings() {
    return (
        <div className="bg-primary w-full max-w-[1280px] h-full mx-auto">
        <Link to ="/map"><FaArrowLeft></FaArrowLeft></Link>
        <div>settings</div>
        </div>
    )
}

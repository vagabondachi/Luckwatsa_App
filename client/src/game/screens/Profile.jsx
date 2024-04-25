import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
export default function Profile() {
  
  return (
    <div className="bg-primary w-full max-w-[1280px] h-full mx-auto">
    <Link to ="/map"><FaArrowLeft></FaArrowLeft></Link>
    <div>userProfile</div>
    </div>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
    <>
    <Navbar></Navbar>
    <div className="realtive isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-textMain sm:text-6xl">Make The World Your Treasure Map!</h1>
                <p className="mt-6 text-lg leading-8 text-textLight">
                Luckwatsa unlocks a global treasure hunt adventure, bringing together family, friends, and a vibrant community of fellow treasure seekers!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/game" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:big-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Started</Link>
                    <a href="" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

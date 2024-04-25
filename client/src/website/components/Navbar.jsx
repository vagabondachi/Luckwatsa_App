import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between p-6 lg:px-8" arial-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Luckwatsa</span>
                        <img src="src/_shared/assets/logo/logo.png" alt="logo-luckwatsa" className="h-12 w-auto" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 font-secondaryRegular">
                        <Link to="/solutions" className="text-sm font-semibold leading-12 text-textMain">Solutions</Link>
                        <Link to="/features" className="text-sm font-semibold leading-6 text-textMain">Features</Link>
                        <Link to="/howitworks" className="text-sm font-semibold leading-6 text-textMain">How It Works</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/game" className="bg-primary text-textwhite px-6 py-2 text-sm font-semibold leading-6 text-textMain font-secondaryRegular">Get Started</Link>
                    </div>
                </nav>
            </div>
            {/* Mobile View */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Lukwatsa</span>
                            <img src="src/assets/logo/logo.png" alt="logo-luckwatsa" className="h-12 w-auto" />
                        </a>
                        <button className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:bg-gray-50">Solutions</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:bg-gray-50">Features</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:bg-gray-50">How it works</a>
                            </div>
                            <div className="py-6">
                            <Link to="/game" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray hover:bg-gray-50">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </div>
  )
}

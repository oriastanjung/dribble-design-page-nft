import React from 'react'

function Header() {
    return (
        <header className="flex justify-between items-center my-8">
            <div >
                <h1 className="text-gray-200 text-4xl font-light cursor-pointer">
                    nft.
                </h1>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li>
                        <a className="text-gray-200 text-2xl font-thin cursor-pointer ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-2xl font-thin cursor-pointer">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-2xl font-thin cursor-pointer">
                            Categories
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-2xl font-thin cursor-pointer">
                            How it Works
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex gap-1">
                <button className="text-gray-200 text-2xl font-thin py-4 px-8 ">
                    Login
                </button>
                <button className="text-gray-200 text-2xl font-thin py-4 px-8 border border-gray-600">
                    Sign up
                </button>
            </div>
        </header>
    )
}

export default Header

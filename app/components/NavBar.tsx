import React from 'react'

const NavBar = () => {
  return (
    <div>
       <header className="bg-blue-900 border-b border-gray-200 py-4 h-[8vh]">
        <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Scoop Schools</h1>
            <nav>
                <ul className="flex space-x-20 text-md">
                    <li><a href="aboutus" className="hover:underline">About us</a></li>
                    <li><a href="/listings" className="hover:underline">Search for schools</a></li>
                    <li><a href="/profile" className="hover:underline">Your profile</a></li>
                    <li>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default NavBar

"use client"

import React from "react";
import Card from "./../components/Card"; // Import the reusable Card component

export default function Listings() {
  const schools = [
    {
      name: "School Name 1",
      location: "City 1, State 1",
      description: "A brief description of School 1 and its features.",
    },
    {
      name: "School Name 2",
      location: "City 2, State 2",
      description: "A brief description of School 2 and its features.",
    },
    {
      name: "School Name 3",
      location: "City 3, State 3",
      description: "A brief description of School 3 and its features.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-900 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-white">Scoop Schools</h1>
          <nav>
            <ul className="flex space-x-8 text-sm text-white">
              <li><a href="/hehe" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/listings" className="hover:underline">Listings</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">School Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <Card
                key={index}
                schoolName={school.name}
                location={school.location}
                description={school.description}
                onDetailsClick={() => alert(`View details for ${school.name}`)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p className="text-sm">&copy; 2025 Scoop Schools. All rights reserved.</p>
          <p className="text-sm">
            Follow us on <a href="#" className="text-blue-500 hover:underline">Social Media</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

'use client'
import Image from 'next/image';
import NavBar from './components/NavBar';


export default function Home() {
  return (
    
<body className="bg-white text-gray-800 h-screen">
    {/* Header */}
    <NavBar />


    {/* Hero Section */}
    <section className='flex'>
        <div className='bg-white w-1/2 pt-30'>
            <Image src="/logo.jpeg" alt="Logo" height={400} width={400} className='w-full' />
        </div>
        <div className="bg-white py-12 h-[84vh] flex flex-col justify-center items-center w-1/2 ">
            <div className="container mx-auto px-4 flex flex-col justify-center items-end pr-40">
                <div className='flex items-start flex-col'>
                    <h2 className="text-4xl font-bold mb-4 text-blue-800">Welcome to Scoop Schools</h2>
                    <p className="text-lg text-gray-600 mb-6 items-start">Discover the best school for your little one!</p>
                    <a href="/listings" className="hover:underline">
                    <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900">
                        Explore Now
                    </button>
                    </a>
                </div>
            </div>
        </div>
        
    </section>

   

    {/* Footer */}
    <footer className="bg-blue-800 border-t border-blue-200  h-[8vh] flex justify-between items-center">
        <div className="container mx-auto text-center text-sm text-white flex justify-center items-center ">
            <p className='pr-6'>© 2025 Scoop Schools. All rights reserved.</p>
            <p>|</p>
            <p className="pl-6">Contact us on <a href="#" className="text-blue-500 hover:underline">xxxxxxxxx</a></p>
        </div>
    </footer>
    </body>


  );
}

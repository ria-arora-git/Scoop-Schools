export default function Home() {
  return (
    
<body className="bg-white text-gray-800 h-screen">
    {/* Header */}
    <header className="bg-blue-900 border-b border-gray-200 py-4 h-[8vh]">
        <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Scoop Schools</h1>
            <nav>
                <ul className="flex space-x-20 text-md">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About us</a></li>
                    <li><a href="#" className="hover:underline">Listings</a></li>
                    <li><a href="#" className="hover:underline">Sign In</a></li>
                </ul>
            </nav>
        </div>
    </header>

    {/* Hero Section */}
    <section className="bg-gray-50 py-12 h-[84vh] flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Welcome to Scoop Schools</h2>
            <p className="text-lg text-gray-600 mb-6">Discover the best school for your little one!</p>
            <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900">
                Explore Now
            </button>
        </div>
    </section>

   

    {/* Footer */}
    <footer className="bg-blue-800 border-t border-blue-200 py-3 h-[8vh]">
        <div className="container mx-auto text-center text-sm text-white flex justify-center items-center flex-col pb-2">
            <p>© 2025 Scoop Schools. All rights reserved.</p>
            <p className="pb-2">Follow us on <a href="#" className="text-blue-500 hover:underline">Social Media</a></p>
        </div>
    </footer>
    </body>


  );
}

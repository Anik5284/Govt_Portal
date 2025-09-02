import type { NextPage } from 'next';
import Image from 'next/image';
import { Search, LogIn, ChevronDown, Rocket } from 'lucide-react';

const HomePage: NextPage = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen text-white font-sans">
      {/* Header / Navbar */}
      <header className="container mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wider">PGIP</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li>
              <a href="#" className="text-white font-semibold border-b-2 border-blue-500 pb-1">
                Home
              </a>
            </li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Statistics</a></li>
            <li>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                More <ChevronDown size={16} />
              </a>
            </li>
          </ul>

          {/* Search and Login */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1e2a47] border border-gray-600 rounded-md py-1.5 px-4 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-md">
              <LogIn size={18} />
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Personalized Government Info Portal
            </h1>
            <p className="text-lg text-gray-300">
              Access personalized government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.
            </p>
            {/* Main Search Bar */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search for schemes, services, or documents..."
                className="w-full bg-[#1e2a47] border border-gray-600 rounded-full py-4 pl-6 pr-16 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">
                Explore Services
              </button>
              <button className="border-2 border-gray-500 hover:bg-gray-700 hover:border-gray-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            {/* Replace this with your actual image */}
            <Image
              src="/futuristic-tunnel.png" // IMPORTANT: Add your image to the `public` folder
              alt="Futuristic neon tunnel"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl shadow-blue-500/20"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
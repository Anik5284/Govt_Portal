import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Search, LogIn, ChevronDown, Rocket, Users, Building, TrendingUp, Star,
  GraduationCap, Briefcase, Home, HeartPulse, ArrowRight, Megaphone,
  BookOpenCheck, Landmark, UserCheck, Bell, ClipboardCheck
} from 'lucide-react';

const HomePage: NextPage = () => {
  return (
    // Changed main background to a slightly lighter shade to make feature cards pop
    <div className="bg-[#112240] min-h-screen text-white font-sans">
      {/* Header / Navbar */}
      <header className="container mx-auto px-8 py-4 bg-[#112240]/80 backdrop-blur-sm sticky top-0 z-50">
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
            <li><a href="#" className="text-white font-semibold border-b-2 border-blue-500 pb-1">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Statistics</a></li>
            <li><a href="#" className="flex items-center gap-1 hover:text-white transition-colors">More <ChevronDown size={16} /></a></li>
          </ul>

          {/* Search and Login */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative"><input type="text" placeholder="Search" className="bg-[#1e2a47] border border-gray-600 rounded-md py-1.5 px-4 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500" /><Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-md"><LogIn size={18} />Login</button>
          </div>
        </nav>
      </header>
      
      <div className="bg-[#0a192f]">
        {/* Hero Section */}
        <main className="container mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6"><h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Personalized Government Info Portal</h1><p className="text-lg text-gray-300">Access personalized government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.</p><div className="relative mt-4"><input type="text" placeholder="Search for schemes, services, or documents..." className="w-full bg-[#1e2a47] border border-gray-600 rounded-full py-4 pl-6 pr-16 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" /><button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"><Search className="w-6 h-6 text-white" /></button></div><div className="flex items-center gap-4 mt-4"><button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Explore Services</button><button className="border-2 border-gray-500 hover:bg-gray-700 hover:border-gray-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Learn More</button></div></div>
            {/* Right Image */}
            <div className="flex justify-center items-center"><Image src="/futuristic-tunnel.png" alt="Futuristic neon tunnel" width={500} height={500} className="rounded-lg shadow-2xl shadow-blue-500/20" priority /></div>
          </div>
        </main>

        {/* Statistics Section */}
        <section className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center"><div className="bg-blue-600/20 p-6 rounded-full"><Users className="w-12 h-12 text-blue-400" /></div><h3 className="text-4xl font-bold mt-4">1.2M+</h3><p className="text-gray-400 mt-1">Active Users</p></div>
            <div className="flex flex-col items-center"><div className="bg-green-600/20 p-6 rounded-full"><Building className="w-12 h-12 text-green-400" /></div><h3 className="text-4xl font-bold mt-4">500+</h3><p className="text-gray-400 mt-1">Government Services</p></div>
            <div className="flex flex-col items-center"><div className="bg-yellow-600/20 p-6 rounded-full"><TrendingUp className="w-12 h-12 text-yellow-400" /></div><h3 className="text-4xl font-bold mt-4">95%</h3><p className="text-gray-400 mt-1">Success Rate</p></div>
            <div className="flex flex-col items-center"><div className="bg-purple-600/20 p-6 rounded-full"><Star className="w-12 h-12 text-purple-400" /></div><h3 className="text-4xl font-bold mt-4">4.8</h3><p className="text-gray-400 mt-1">Satisfaction Score</p></div>
          </div>
        </section>
      </div>

      {/* Light background for the following sections */}
      <div className="bg-slate-100 dark:bg-slate-900">
        {/* Government Services Section */}
        <section className="container mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Government Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300"><div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full w-fit mb-4"><GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" /></div><h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3><p className="text-gray-600 dark:text-gray-400 mt-1">25 services available</p><a href="#" className="flex items-center gap-2 text-blue-600 hover:underline mt-4">Explore <ArrowRight size={18} /></a></div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300"><div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full w-fit mb-4"><Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" /></div><h3 className="text-xl font-semibold text-slate-900 dark:text-white">Employment</h3><p className="text-gray-600 dark:text-gray-400 mt-1">18 services available</p><a href="#" className="flex items-center gap-2 text-blue-600 hover:underline mt-4">Explore <ArrowRight size={18} /></a></div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300"><div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-full w-fit mb-4"><Home className="w-8 h-8 text-orange-600 dark:text-orange-400" /></div><h3 className="text-xl font-semibold text-slate-900 dark:text-white">Housing</h3><p className="text-gray-600 dark:text-gray-400 mt-1">12 services available</p><a href="#" className="flex items-center gap-2 text-blue-600 hover:underline mt-4">Explore <ArrowRight size={18} /></a></div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300"><div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-full w-fit mb-4"><HeartPulse className="w-8 h-8 text-red-600 dark:text-red-400" /></div><h3 className="text-xl font-semibold text-slate-900 dark:text-white">Healthcare</h3><p className="text-gray-600 dark:text-gray-400 mt-1">15 services available</p><a href="#" className="flex items-center gap-2 text-blue-600 hover:underline mt-4">Explore <ArrowRight size={18} /></a></div>
          </div>
        </section>
      </div>
      
      {/* Back to dark background for the final sections */}
      <div className="bg-[#0a192f]">
        {/* Highlights of Services Section */}
        <section className="container mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Highlights of Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Schemes */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-red-500/40 transition-shadow duration-300">
              <Megaphone className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Schemes</h3>
              <p>Find schemes relevant to your profile.</p>
              <a href="#" className="mt-auto bg-white/90 text-red-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">
                Explore <ArrowRight size={18} />
              </a>
            </div>
            {/* Card 2: Exams */}
            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300">
              <BookOpenCheck className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Exams</h3>
              <p>Get notifications for competitive exams.</p>
              <a href="#" className="mt-auto bg-white/90 text-teal-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">
                Explore <ArrowRight size={18} />
              </a>
            </div>
            {/* Card 3: Tax Updates */}
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300">
              <Landmark className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Tax Updates</h3>
              <p>Stay informed about tax-related updates.</p>
              <a href="#" className="mt-auto bg-white/90 text-blue-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">
                Explore <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-8 pb-20 pt-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Feature 1: Personalization */}
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-8 backdrop-blur-sm">
              <UserCheck className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold">Personalization</h3>
              <p className="text-gray-300 mt-2">Content tailored to your profile.</p>
            </div>
            {/* Feature 2: Alerts */}
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-8 backdrop-blur-sm">
              <Bell className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold">Alerts</h3>
              <p className="text-gray-300 mt-2">Get timely alerts for updates.</p>
            </div>
            {/* Feature 3: Document Checklist */}
            <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-8 backdrop-blur-sm">
              <ClipboardCheck className="w-10 h-10 text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold">Document Checklist</h3>
              <p className="text-gray-300 mt-2">Stay prepared with required documents.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
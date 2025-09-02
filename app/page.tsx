import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Search, LogIn, ChevronDown, Rocket, Users, Building, TrendingUp, Star,
  GraduationCap, Briefcase, Home, HeartPulse, ArrowRight, Megaphone,
  BookOpenCheck, Landmark, UserCheck, Bell, ClipboardCheck
} from 'lucide-react';

// Data for the schemes to avoid repeating JSX
const schemesData = [
  {
    title: 'PM Kisan Samman Nidhi',
    category: 'Finance',
    priority: 'High Priority',
    description: 'Direct income support to farmers',
    eligibility: 'Small and marginal farmers',
  },
  {
    title: 'PM Awas Yojana',
    category: 'Housing',
    priority: 'High Priority',
    description: 'Housing for all by 2022',
    eligibility: 'Economically weaker sections',
  },
  {
    title: 'Ayushman Bharat',
    category: 'Healthcare',
    priority: 'High Priority',
    description: 'Health insurance for poor families',
    eligibility: 'Families below poverty line',
  },
  {
    title: 'PM Fasal Bima Yojana',
    category: 'Finance',
    priority: 'Medium Priority',
    description: 'Crop insurance scheme',
    eligibility: 'All farmers',
  },
  {
    title: 'Skill India Mission',
    category: 'Employment',
    priority: 'Medium Priority',
    description: 'Skill development training',
    eligibility: 'Youth aged 15-45 years',
  },
  {
    title: 'Beti Bachao Beti Padhao',
    category: 'Education',
    priority: 'Medium Priority',
    description: 'Girl child education and protection',
    eligibility: 'Families with girl children',
  },
];

// Helper to get colors for tags
const getTagColors = (text: string) => {
  switch (text.toLowerCase()) {
    case 'finance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'housing': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300';
    case 'healthcare': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    case 'employment': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'education': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'high priority': return 'bg-red-200 text-red-900 dark:bg-red-900/60 dark:text-red-200';
    case 'medium priority': return 'bg-yellow-200 text-yellow-900 dark:bg-yellow-900/60 dark:text-yellow-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};


const HomePage: NextPage = () => {
  return (
    <div className="bg-[#112240] min-h-screen text-white font-sans">
      {/* Header / Navbar */}
      <header className="container mx-auto px-8 py-4 bg-[#112240]/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="bg-blue-500 p-2 rounded-full"><Rocket className="w-6 h-6 text-white" /></div><span className="text-2xl font-bold tracking-wider">PGIP</span></div>
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li><a href="#" className="text-white font-semibold border-b-2 border-blue-500 pb-1">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Statistics</a></li>
            <li><a href="#" className="flex items-center gap-1 hover:text-white transition-colors">More <ChevronDown size={16} /></a></li>
          </ul>
          <div className="hidden md:flex items-center gap-4"><div className="relative"><input type="text" placeholder="Search" className="bg-[#1e2a47] border border-gray-600 rounded-md py-1.5 px-4 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500" /><Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div><button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-md"><LogIn size={18} />Login</button></div>
        </nav>
      </header>

      <div className="bg-[#0a192f]">
        {/* Hero Section */}
        <main className="container mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6"><h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Personalized Government Info Portal</h1><p className="text-lg text-gray-300">Access personalized government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.</p><div className="relative mt-4"><input type="text" placeholder="Search for schemes, services, or documents..." className="w-full bg-[#1e2a47] border border-gray-600 rounded-full py-4 pl-6 pr-16 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" /><button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"><Search className="w-6 h-6 text-white" /></button></div><div className="flex items-center gap-4 mt-4"><button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Explore Services</button><button className="border-2 border-gray-500 hover:bg-gray-700 hover:border-gray-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Learn More</button></div></div>
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
        {/* Popular Government Schemes Section */}
        <section className="container mx-auto px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Popular Government Schemes</h2>
            <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemesData.map((scheme, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white pr-4">{scheme.title}</h3>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTagColors(scheme.category)}`}>{scheme.category}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTagColors(scheme.priority)}`}>{scheme.priority}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{scheme.description}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6"><strong className="text-slate-700 dark:text-slate-300">Eligibility:</strong> {scheme.eligibility}</p>
                <div className="mt-auto flex items-center gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md transition-colors">Learn More</button>
                  <button className="border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2 px-5 rounded-md transition-colors">Check Eligibility</button>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-red-500/40 transition-shadow duration-300"><Megaphone className="w-12 h-12" /><h3 className="text-2xl font-bold">Schemes</h3><p>Find schemes relevant to your profile.</p><a href="#" className="mt-auto bg-white/90 text-red-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">Explore <ArrowRight size={18} /></a></div>
            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300"><BookOpenCheck className="w-12 h-12" /><h3 className="text-2xl font-bold">Exams</h3><p>Get notifications for competitive exams.</p><a href="#" className="mt-auto bg-white/90 text-teal-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">Explore <ArrowRight size={18} /></a></div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300"><Landmark className="w-12 h-12" /><h3 className="text-2xl font-bold">Tax Updates</h3><p>Stay informed about tax-related updates.</p><a href="#" className="mt-auto bg-white/90 text-blue-600 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-white transition-colors">Explore <ArrowRight size={18} /></a></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-8 pb-20 pt-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-8 backdrop-blur-sm"><UserCheck className="w-10 h-10 text-pink-400 mb-4" /><h3 className="text-2xl font-bold">Personalization</h3><p className="text-gray-300 mt-2">Content tailored to your profile.</p></div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-8 backdrop-blur-sm"><Bell className="w-10 h-10 text-indigo-400 mb-4" /><h3 className="text-2xl font-bold">Alerts</h3><p className="text-gray-300 mt-2">Get timely alerts for updates.</p></div>
            <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-8 backdrop-blur-sm"><ClipboardCheck className="w-10 h-10 text-gray-400 mb-4" /><h3 className="text-2xl font-bold">Document Checklist</h3><p className="text-gray-300 mt-2">Stay prepared with required documents.</p></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
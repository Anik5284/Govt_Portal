"use client";
import type { NextPage } from "next";
import Link from "next/link";
import {
  Search, Rocket, Users, Building, TrendingUp, Star,
  GraduationCap, Briefcase, Home, HeartPulse, ArrowRight, Megaphone,
  BookOpenCheck, Landmark, UserCheck, Bell, ClipboardCheck, Shield,
  Banknote, ClipboardList, MapPin, Users as UsersIcon,
  Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Clock
} from "lucide-react";

// Data for the schemes to avoid repeating JSX
const schemesData = [
  { title: "PM Kisan Samman Nidhi", category: "Finance", priority: "High Priority", description: "Direct income support to farmers", eligibility: "Small and marginal farmers", link: "https://pmkisan.gov.in/" },
  { title: "PM Awas Yojana", category: "Housing", priority: "High Priority", description: "Housing for all by 2022", eligibility: "Economically weaker sections", link: "https://pmaymis.gov.in/" },
  { title: "Ayushman Bharat", category: "Healthcare", priority: "High Priority", description: "Health insurance for poor families", eligibility: "Families below poverty line", link: "https://pmjay.gov.in/" },
  { title: "PM Fasal Bima Yojana", category: "Finance", priority: "Medium Priority", description: "Crop insurance scheme", eligibility: "All farmers", link: "https://pmfby.gov.in/" },
  { title: "Skill India Mission", category: "Employment", priority: "Medium Priority", description: "Skill development training", eligibility: "Youth aged 15-45 years", link: "https://www.skillindia.gov.in/" },
  { title: "Beti Bachao Beti Padhao", category: "Education", priority: "Medium Priority", description: "Girl child education and protection", eligibility: "Families with girl children", link: "https://wcd.nic.in/bbbp-schemes" },
];

// Data for the Government Services section
const servicesData = [
  { title: "Education", description: "25 services available", Icon: GraduationCap, color: "green", link: "/education" },
  { title: "Employment", description: "18 services available", Icon: Briefcase, color: "blue", link: "/employement" },
  { title: "Housing", description: "12 services available", Icon: Home, color: "orange", link: "/housing" },
  { title: "Healthcare", description: "15 services available", Icon: HeartPulse, color: "red", link: "/healthcare" },
  { title: "Security", description: "8 services available", Icon: Shield, color: "purple", link: "/security" },
  { title: "Finance", description: "22 services available", Icon: Banknote, color: "teal", link: "/finance" },
];

// Data for Highlights section
const highlightsData = [
  { title: "Schemes", description: "Find schemes relevant to your profile.", Icon: Megaphone, gradient: "from-orange-500 to-red-500", link: "/schemes" },
  { title: "Exams", description: "Get notifications for competitive exams.", Icon: BookOpenCheck, gradient: "from-green-400 to-teal-500", link: "/exams" },
  { title: "Tax Updates", description: "Stay informed about tax-related updates.", Icon: Landmark, gradient: "from-cyan-400 to-blue-500", link: "/tax-updates" },
];

// Helper to get colors for scheme tags
const getTagColors = (text: string) => {
  switch (text.toLowerCase()) {
    case "finance": return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300";
    case "housing": return "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300";
    case "healthcare": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
    case "employment": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
    case "education": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    case "high priority": return "bg-red-200 text-red-900 dark:bg-red-900/60 dark:text-red-200";
    case "medium priority": return "bg-yellow-200 text-yellow-900 dark:bg-yellow-900/60 dark:text-yellow-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

// Helper to get colors for service cards
const getServiceCardColors = (color: string) => {
  const colors: { [key: string]: { bg: string; text: string } } = {
    green: { bg: "bg-green-100 dark:bg-green-900/50", text: "text-green-600 dark:text-green-400" },
    blue: { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-600 dark:text-blue-400" },
    orange: { bg: "bg-orange-100 dark:bg-orange-900/50", text: "text-orange-600 dark:text-orange-400" },
    red: { bg: "bg-red-100 dark:bg-red-900/50", text: "text-red-600 dark:text-red-400" },
    purple: { bg: "bg-purple-100 dark:bg-purple-900/50", text: "text-purple-600 dark:text-purple-400" },
    teal: { bg: "bg-teal-100 dark:bg-teal-900/50", text: "text-teal-600 dark:text-teal-400" },
    indigo: { bg: "bg-indigo-100 dark:bg-indigo-900/50", text: "text-indigo-600 dark:text-indigo-400" },
  };
  return colors[color] || colors["green"];
};

const HomePage: NextPage = () => {
  return (
    <div className="bg-[#112240] min-h-screen text-white font-sans">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>

      {/* Header / Navbar */}
      <header className="container mx-auto px-8 py-4 bg-[#112240]/80 backdrop-blur-sm sticky top-0 z-40">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wider">PGIP</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li><a href="#" className="text-white font-semibold border-b-2 border-blue-500 pb-1">Home</a></li>
            <li><a href="/myprofile" className="hover:text-white transition-colors">My Profile</a></li>
            <li><a href="/myrecommendations" className="hover:text-white transition-colors">My Recommendations</a></li>
            <li><a href="/timetable" className="hover:text-white transition-colors">Timetable</a></li>
            <li><a href="/aboutus" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
          <div className="hidden md:flex items-center">
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
              Login
            </a>
          </div>
        </nav>
      </header>

      <div className="bg-[#0a192f]">
        {/* Hero Section */}
        <main className="container mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Personalized Government Info Portal</h1>
              <p className="text-lg text-gray-300">Access personalized government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.</p>
              <div className="relative mt-4">
                <input type="text" placeholder="Search for schemes, services, or documents..." className="w-full bg-[#1e2a47] border border-gray-600 rounded-full py-4 pl-6 pr-16 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                  <Search className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="/login" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Explore Services</a>
                <button className="border-2 border-gray-500 hover:bg-gray-700 hover:border-gray-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">Learn More</button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src="https://placehold.co/500x500/0a192f/60a5fa?text=PGIP" alt="Futuristic neon tunnel" width="500" height="500" className="rounded-lg shadow-2xl shadow-blue-500/20" />
            </div>
          </div>
        </main>

        {/* Statistics Row Section */}
        <section className="container mx-auto px-8 pt-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600/20 p-6 rounded-full"><Users className="w-12 h-12 text-blue-400" /></div>
              <h3 className="text-4xl font-bold mt-4">1.2M+</h3>
              <p className="text-gray-400 mt-1">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600/20 p-6 rounded-full"><Building className="w-12 h-12 text-green-400" /></div>
              <h3 className="text-4xl font-bold mt-4">500+</h3>
              <p className="text-gray-400 mt-1">Government Services</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-600/20 p-6 rounded-full"><TrendingUp className="w-12 h-12 text-yellow-400" /></div>
              <h3 className="text-4xl font-bold mt-4">95%</h3>
              <p className="text-gray-400 mt-1">Success Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 p-6 rounded-full"><Star className="w-12 h-12 text-purple-400" /></div>
              <h3 className="text-4xl font-bold mt-4">4.8</h3>
              <p className="text-gray-400 mt-1">Satisfaction Score</p>
            </div>
          </div>
        </section>
      </div>

      {/* Government Services Section */}
      <section id="services" className="bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-20 scroll-mt-24">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Government Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const { bg, text } = getServiceCardColors(service.color);
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block group"
                >
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 shadow-md border border-transparent dark:border-slate-700/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className={`${bg} p-4 rounded-full w-fit mb-4`}>
                      <service.Icon className={`w-8 h-8 ${text}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{service.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Government Schemes Section */}
      <section className="bg-gradient-to-b from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Popular Government Schemes</h2>
            <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemesData.map((scheme) => (
              <a
                key={scheme.title}
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex flex-col h-full transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:border-blue-500/50 group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{scheme.title}</h3>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTagColors(scheme.category)}`}>{scheme.category}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTagColors(scheme.priority)}`}>{scheme.priority}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 flex-grow">{scheme.description}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4"><strong className="text-slate-700 dark:text-slate-300">Eligibility:</strong> {scheme.eligibility}</p>
                   <div className="mt-auto pt-4 text-right">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dark background sections */}
      <div className="bg-[#0a192f]">
        {/* Highlights of Services Section */}
        <section className="container mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Highlights of Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightsData.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="block group"
              >
                <div className={`bg-gradient-to-br ${item.gradient} rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                  <item.Icon className="w-12 h-12" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="mt-auto bg-white/90 text-black font-bold py-2 px-5 rounded-full flex items-center gap-2 group-hover:bg-white transition-colors">
                    Open <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-8 pb-20 pt-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-8 backdrop-blur-sm">
              <UserCheck className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Personalized Recommendations</h3>
              <p className="text-gray-300">Receive tailored suggestions for schemes, services, and opportunities that match your profile.</p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm">
              <Bell className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Real-time Notifications</h3>
              <p className="text-gray-300">Stay updated with instant notifications about new schemes, deadlines, and important announcements.</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 backdrop-blur-sm">
              <ClipboardCheck className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Easy Application Process</h3>
              <p className="text-gray-300">Apply seamlessly to government schemes with step-by-step guidance and simplified forms.</p>
            </div>
          </div>
        </section>

        {/* Statistics Banner Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
          <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <ClipboardList className="w-12 h-12 text-white/80" />
              <p className="text-5xl font-bold">120</p>
              <p className="text-lg text-white/90">Schemes Covered</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-12 h-12 text-white/80" />
              <p className="text-5xl font-bold">28</p>
              <p className="text-lg text-white/90">States Supported</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UsersIcon className="w-12 h-12 text-white/80" />
              <p className="text-5xl font-bold">10,000</p>
              <p className="text-lg text-white/90">Users Served</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Personalized Government Info Portal</h3>
            <p className="text-sm">Your one-stop destination for personalized government schemes, services, and information.</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white hover:underline">Home</a></li>
              <li><a href="#services" className="hover:text-white hover:underline">Services</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Schemes</a></li>
              <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Government Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Government Services</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center"><span>Aadhaar Services</span> <a href="#" className="text-xs border px-2 py-0.5 rounded hover:bg-white hover:text-black transition-colors">Explore</a></li>
              <li className="flex justify-between items-center"><span>PAN Card</span> <a href="#" className="text-xs border px-2 py-0.5 rounded hover:bg-white hover:text-black transition-colors">Explore</a></li>
              <li className="flex justify-between items-center"><span>Passport Services</span> <a href="#" className="text-xs border px-2 py-0.5 rounded hover:bg-white hover:text-black transition-colors">Explore</a></li>
              <li className="flex justify-between items-center"><span>Driving License</span> <a href="#" className="text-xs border px-2 py-0.5 rounded hover:bg-white hover:text-black transition-colors">Explore</a></li>
              <li className="flex justify-between items-center"><span>Birth Certificate</span> <a href="#" className="text-xs border px-2 py-0.5 rounded hover:bg-white hover:text-black transition-colors">Explore</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin size={24} className="flex-shrink-0 mt-1" /><span>Government Complex, New Delhi, India</span></li>
              <li className="flex items-center gap-3"><Phone size={18} /><span>+91 1800-XXX-XXXX</span></li>
              <li className="flex items-center gap-3"><Mail size={18} /><span>info@pgip.gov.in</span></li>
              <li className="flex items-center gap-3"><Clock size={18} /><span>Mon-Fri: 9:00 AM - 6:00 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-4">
          <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} PGIP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
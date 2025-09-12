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

// --- DATA (No changes needed here) ---
const schemesData = [
  { title: "PM Kisan Samman Nidhi", category: "Finance", priority: "High Priority", description: "Direct income support to farmers", eligibility: "Small and marginal farmers", link: "https://pmkisan.gov.in/" },
  { title: "PM Awas Yojana", category: "Housing", priority: "High Priority", description: "Housing for all", eligibility: "Economically weaker sections", link: "https://pmaymis.gov.in/" },
  { title: "Ayushman Bharat", category: "Healthcare", priority: "High Priority", description: "Health insurance for poor families", eligibility: "Families below poverty line", link: "https://pmjay.gov.in/" },
  { title: "PM Fasal Bima Yojana", category: "Finance", priority: "Medium Priority", description: "Crop insurance scheme", eligibility: "All farmers", link: "https://pmfby.gov.in/" },
  { title: "Skill India Mission", category: "Employment", priority: "Medium Priority", description: "Skill development training", eligibility: "Youth aged 15-45 years", link: "https://www.skillindia.gov.in/" },
  { title: "Beti Bachao Beti Padhao", category: "Education", priority: "Medium Priority", description: "Girl child education and protection", eligibility: "Families with girl children", link: "https://wcd.nic.in/bbbp-schemes" },
];

const servicesData = [
  { title: "Education", description: "25 services available", Icon: GraduationCap, color: "green", link: "/education" },
  { title: "Employment", description: "18 services available", Icon: Briefcase, color: "blue", link: "/employement" },
  { title: "Housing", description: "12 services available", Icon: Home, color: "orange", link: "/housing" },
  { title: "Healthcare", description: "15 services available", Icon: HeartPulse, color: "red", link: "/healthcare" },
  { title: "Security", description: "8 services available", Icon: Shield, color: "purple", link: "/security" },
  { title: "Finance", description: "22 services available", Icon: Banknote, color: "teal", link: "/finance" },
];

const highlightsData = [
  { title: "Schemes", description: "Find schemes relevant to your profile.", Icon: Megaphone, gradient: "from-amber-500 to-orange-600", link: "/schemes" },
  { title: "Exams", description: "Get notifications for competitive exams.", Icon: BookOpenCheck, gradient: "from-lime-500 to-green-600", link: "/exams" },
  { title: "Tax Updates", description: "Stay informed about tax-related updates.", Icon: Landmark, gradient: "from-sky-500 to-cyan-600", link: "/tax-updates" },
];

// --- UPDATED HELPER FUNCTIONS for a vibrant, colorful palette ---

const getTagColors = (text: string) => {
  switch (text.toLowerCase()) {
    case "finance": return "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300";
    case "housing": return "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300";
    case "healthcare": return "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300";
    case "employment": return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300";
    case "education": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300";
    case "high priority": return "bg-red-200 text-red-900 dark:bg-red-800/60 dark:text-red-200 font-bold";
    case "medium priority": return "bg-yellow-200 text-yellow-900 dark:bg-yellow-800/60 dark:text-yellow-200 font-bold";
    default: return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300";
  }
};

const getServiceCardColors = (color: string) => {
  const colors: { [key: string]: { bg: string; text: string; border: string } } = {
    green: { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500" },
    blue: { bg: "bg-sky-100 dark:bg-sky-900/40", text: "text-sky-600 dark:text-sky-400", border: "border-sky-500" },
    orange: { bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500" },
    red: { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500" },
    purple: { bg: "bg-purple-100 dark:bg-purple-900/40", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500" },
    teal: { bg: "bg-teal-100 dark:bg-teal-900/40", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500" },
  };
  return colors[color] || colors["blue"];
};


const HomePage: NextPage = () => {
  return (
    // --- UPDATED: Main background to a warmer, more colorful theme ---
    <div className="bg-amber-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300 min-h-screen font-sans">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* --- UPDATED: Header with colorful logo and active link --- */}
      <header className="sticky top-0 z-50 bg-amber-50/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-amber-200 dark:border-slate-800">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg shadow-md">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide text-slate-900 dark:text-white">PGIP</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
            <li><a href="#" className="text-orange-600 dark:text-orange-400 font-semibold">Home</a></li>
            <li><a href="/myprofile" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">My Profile</a></li>
            <li><a href="/myrecommendations" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Recommendations</a></li>
            <li><a href="/aboutus" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About Us</a></li>
          </ul>
          <div className="hidden md:flex items-center">
            <Link href="/login" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors shadow-sm hover:shadow-md">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* --- UPDATED: Hero Section with colorful headings and buttons --- */}
        <section className="py-24 sm:py-32 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                  Personalized Government Info Portal
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Access government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.
                </p>
                <div className="relative mt-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search for schemes, services..."
                    className="w-full bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-full py-3 pl-12 pr-16 text-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="/login" className="bg-sky-600 hover:bg-sky-700 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg shadow hover:shadow-lg">Explore Services</a>
                  <a href="#features" className="bg-amber-100 dark:bg-slate-800 border border-amber-300 dark:border-slate-600 hover:bg-amber-200 dark:hover:bg-slate-700 transition-colors text-amber-800 dark:text-slate-200 font-bold py-3 px-8 rounded-full text-lg">Learn More</a>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <img src="https://placehold.co/500x500/f3f4f6/fb923c?text=PGIP" alt="PGIP placeholder illustration" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* --- UPDATED: Statistics Section with more colorful icons --- */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full w-fit mx-auto mb-3">
                        <Users className="w-8 h-8 text-sky-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1.2M+</h3>
                    <p className="text-slate-500 dark:text-slate-400">Active Users</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full w-fit mx-auto mb-3">
                        <Building className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">500+</h3>
                    <p className="text-slate-500 dark:text-slate-400">Govt. Services</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full w-fit mx-auto mb-3">
                        <TrendingUp className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">95%</h3>
                    <p className="text-slate-500 dark:text-slate-400">Success Rate</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="bg-rose-100 dark:bg-rose-900/50 p-3 rounded-full w-fit mx-auto mb-3">
                        <Star className="w-8 h-8 text-rose-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">4.8</h3>
                    <p className="text-slate-500 dark:text-slate-400">User Rating</p>
                </div>
            </div>
          </div>
        </section>

        {/* --- UPDATED: Services Section with a tinted background and colorful cards --- */}
        <section id="services" className="py-20 bg-sky-50 dark:bg-sky-900/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Explore Government Services</h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">Find all the essential services categorized for your convenience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => {
                const { bg, text, border } = getServiceCardColors(service.color);
                return (
                  <Link key={service.title} href={service.link} className="block group">
                    <div className={`bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl border-2 border-transparent hover:${border} transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className={`${bg} p-3 rounded-full w-fit mb-4`}>
                        <service.Icon className={`w-8 h-8 ${text}`} />
                      </div>
                      <h3 className={`text-xl font-semibold text-slate-900 dark:text-white group-hover:${text} transition-colors`}>{service.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">{service.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- UPDATED: Schemes Section with more vibrant card styles --- */}
        <section className="py-20 bg-amber-50 dark:bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Popular Government Schemes</h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">Discover top schemes that can benefit you and your family.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schemesData.map((scheme) => (
                <a key={scheme.title} href={scheme.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-800 flex flex-col h-full transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:border-orange-500/50 group-hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white pr-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{scheme.title}</h3>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTagColors(scheme.category)}`}>{scheme.category}</span>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTagColors(scheme.priority)}`}>{scheme.priority}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-2 flex-grow">{scheme.description}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-4"><strong className="font-semibold text-slate-700 dark:text-slate-300">Eligibility:</strong> {scheme.eligibility}</p>
                    <div className="mt-auto pt-4 text-right">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- UPDATED: Highlights Section with brighter gradient cards --- */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Portal Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlightsData.map((item) => (
                <Link key={item.title} href={item.link} className="block group">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-xl p-8 text-white flex flex-col items-start gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                    <item.Icon className="w-12 h-12" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="opacity-90">{item.description}</p>
                    <div className="mt-auto bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-5 rounded-full flex items-center gap-2 transition-colors">
                      Open <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- UPDATED: Key Features Section with colorful accents --- */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Key Features</h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">Everything you need in a single, unified platform.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 border-t-4 border-orange-500 rounded-xl p-8 text-center shadow-lg">
                <UserCheck className="w-10 h-10 text-orange-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Personalized Recommendations</h3>
                <p className="text-slate-600 dark:text-slate-400">Receive tailored suggestions for schemes and services that match your profile.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border-t-4 border-sky-500 rounded-xl p-8 text-center shadow-lg">
                <Bell className="w-10 h-10 text-sky-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Real-time Notifications</h3>
                <p className="text-slate-600 dark:text-slate-400">Stay updated with instant alerts about new schemes, deadlines, and announcements.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border-t-4 border-emerald-500 rounded-xl p-8 text-center shadow-lg">
                <ClipboardCheck className="w-10 h-10 text-emerald-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Easy Application Process</h3>
                <p className="text-slate-600 dark:text-slate-400">Apply to schemes with step-by-step guidance and simplified forms.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- UPDATED: Footer with a colorful, modern dark theme --- */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">PGIP</h3>
            <p className="text-sm text-slate-400">Your one-stop portal for personalized government schemes, services, and information.</p>
            <div className="flex gap-4 mt-2 text-slate-400">
              <a href="#" className="hover:text-orange-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-400"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white hover:underline">Home</a></li>
              <li><a href="#services" className="hover:text-white hover:underline">Services</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Schemes</a></li>
              <li><a href="/aboutus" className="hover:text-white hover:underline">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-sky-400 mb-4">Popular Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html" className="hover:text-white hover:underline">Aadhaar Services</a></li>
              <li><a href="https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" className="hover:text-white hover:underline">PAN Card</a></li>
              <li><a href="https://www.passportindia.gov.in/psp" className="hover:text-white hover:underline">Passport Services</a></li>
              <li><a href="https://staging.parivahan.gov.in/parivahan//en/content/driving-licence-0" className="hover:text-white hover:underline">Driving License</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3"><MapPin size={20} className="flex-shrink-0 mt-0.5 text-slate-500" /><span>Government Complex, New Delhi, India</span></li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-slate-500"/><span>+91 1800-XXX-XXXX</span></li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-slate-500"/><span>info@pgip.gov.in</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-6">
          <p className="text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} PGIP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
"use client";

import { useState } from "react";
import { Rocket, Menu, X, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define links outside the component to prevent re-creation on each render
const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Profile", href: "/myprofile" },
  { name: "Recommendations", href: "/myrecommendations" }, // Shortened for better fit
  { name: "Timetable", href: "/timetable" },
  { name: "About Us", href: "/aboutus" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // --- UPDATED: Header with colorful theme ---
    <header className="sticky top-0 z-50 bg-amber-50/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-amber-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* --- UPDATED: Logo background with orange gradient --- */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg shadow-md">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide text-slate-900 dark:text-white">PGIP</span>
        </Link>

        {/* Desktop Links */}
        {/* --- UPDATED: Link colors to match the new theme --- */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300 hover:text-orange-600 dark:hover:text-orange-400 ${
                    isActive ? "text-orange-600 dark:text-orange-400 font-semibold" : ""
                  }`}
                >
                  {link.name}
                  {/* Animated underline for active link with updated color */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-2 block h-0.5 w-full bg-orange-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Right side Actions: Login Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
            {/* --- UPDATED: Login button with sky blue color --- */}
            <div className="hidden md:block">
                <Link href="/login" className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
                    <LogIn size={18} />
                    Login
                </Link>
            </div>
            {/* Hamburger Menu Button */}
            <div className="md:hidden text-slate-800 dark:text-slate-200">
                <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {/* --- UPDATED: Mobile menu styling to match the theme --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-amber-50 dark:bg-slate-950 px-6 pt-2 pb-6 border-t border-amber-200 dark:border-slate-800">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                            className={`block py-2 text-lg transition-colors duration-300 ${
                                isActive 
                                ? 'text-orange-600 dark:text-orange-400 font-bold' 
                                : 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400'
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
            {/* Divider */}
            <li className="w-full border-t border-amber-200 dark:border-slate-800 my-2"></li>
            {/* Mobile Login Button */}
            <li>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-8 rounded-lg transition-colors duration-300">
                    <LogIn size={18} />
                    Login
                </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
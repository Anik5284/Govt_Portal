"use client";

import { useState } from "react";
import { Rocket, Menu, X, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define links outside the component to prevent re-creation on each render
const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Profile", href: "/myprofile" },
  { name: "My Recommendations", href: "/myrecommendations" },
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
    <header className="sticky top-0 z-50 bg-[#0f2347]/90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-full shadow-md">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">PGIP</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                   {/* Animated underline for active link */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-2 block h-0.5 w-full bg-blue-500 transform transition-transform" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Right side Actions: Login Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
            {/* Desktop Login Button */}
            <div className="hidden md:block">
                 <Link href="/login" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    <LogIn size={18} />
                    Login
                </Link>
            </div>
            {/* Hamburger Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f2347]/95 px-6 pt-2 pb-6">
          <ul className="flex flex-col items-center gap-4 text-gray-300">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                            className={`block py-2 text-lg ${isActive ? 'text-blue-400 font-bold' : 'hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
            {/* Divider */}
            <li className="w-full border-t border-gray-700 my-2"></li>
            {/* Mobile Login Button */}
            <li>
                 <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition-colors duration-300">
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
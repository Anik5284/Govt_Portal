"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "My Profile", href: "/myprofile" },
    { name: "My Recommendations", href: "/myrecommendations" },
    { name: "Timetable", href: "/timetable" },
    { name: "About Us", href: "/aboutus" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f2347]/90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-full shadow-md">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">PGIP</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300 ${
                    isActive
                      ? "text-white font-semibold border-b-2 border-blue-500 pb-1"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right section (optional for login / search) */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1e2a47] border border-gray-600 rounded-md py-1.5 px-4 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-medium shadow">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

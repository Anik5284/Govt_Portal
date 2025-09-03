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
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-[#0f2347] text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-full">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg">PGIP</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

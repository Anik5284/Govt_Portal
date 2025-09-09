"use client";
import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const HEALTHCARE_SCHEMES = [
  { id: 1, title: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)", url: "https://pmjay.gov.in/" },
  { id: 2, title: "Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)", url: "https://pmssy-mohfw.nic.in/" },
  { id: 3, title: "National Health Mission (NHM)", url: "https://nhm.gov.in/" },
  { id: 4, title: "Rashtriya Swasthya Bima Yojana (RSBY)", url: "https://labour.gov.in/rsby" },
  { id: 5, title: "Mission Indradhanush", url: "https://nhm.gov.in/index1.php?lang=1&level=1&sublinkid=824&lid=220" },
  { id: 6, title: "Janani Suraksha Yojana (JSY)", url: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309" },
  { id: 7, title: "National Digital Health Mission (NDHM)", url: "https://abdm.gov.in/" },
  { id: 8, title: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)", url: "https://pmsma.nhp.gov.in/" },
  { id: 9, title: "National AIDS Control Programme (NACP)", url: "https://www.naco.gov.in/" },
  { id: 10, title: "National Tuberculosis Elimination Programme (NTEP)", url: "https://tbcindia.gov.in/" },
  { id: 11, title: "Kayakalp – Clean Hospital Initiative", url: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=665&lid=404" },
  { id: 12, title: "National Programme for Prevention of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS)", url: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1041&lid=610" },
  { id: 13, title: "Free Drugs & Diagnostics Service Initiative", url: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=820&lid=218" },
  { id: 14, title: "Ayushman Bharat Health & Wellness Centres (AB-HWC)", url: "https://ab-hwc.nhp.gov.in/" },
  { id: 15, title: "Central Government Health Scheme (CGHS)", url: "https://cghs.gov.in/" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
          Government Healthcare Schemes (India)
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore 15 key healthcare initiatives that provide affordable, accessible, and equitable health services across India.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {HEALTHCARE_SCHEMES.map((s) => (
          <article
            key={s.id}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h2>

            <div className="flex items-center justify-between">
              <Link
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
              >
                Explore
                <ExternalLink className="w-4 h-4" />
              </Link>
              <span className="text-xs text-gray-400 font-mono">#{s.id}</span>
            </div>
          </article>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto mt-16 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <p>
          Note: All links point to official government health portals for accuracy and reliability. 
        </p>
      </footer>
    </main>
  );
}

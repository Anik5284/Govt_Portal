"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Sarva Shiksha Abhiyan (SSA)",
    desc: "Flagship program for universal elementary education (ages 6–14).",
    url: "https://www.education.gov.in/en/sarva-shiksha-abhiyan",
  },
  {
    id: 2,
    title: "National Education Mission",
    desc: "Umbrella initiative incorporating SSA and other education schemes.",
    url: "https://www.education.gov.in/en/schemes",
  },
  {
    id: 3,
    title: "Midday Meal Scheme",
    desc: "School nutrition program to improve attendance and learning outcomes.",
    url: "https://middaymeal-education.gov.in/",
  },
  {
    id: 4,
    title: "Integrated Child Development Services (ICDS)",
    desc: "Preschool education, nutrition and health services via Anganwadis.",
    url: "https://icds-wcd.nic.in/",
  },
  {
    id: 5,
    title: "National Digital Library of India (NDLI)",
    desc: "A massive digital repository offering free, multi-language educational resources.",
    url: "https://ndl.iitkgp.ac.in/",
  },
  {
    id: 6,
    title: "National Academic Depository (NAD)",
    desc: "Secure digital storage and retrieval of academic credentials (DigiLocker).",
    url: "https://nad.gov.in/",
  },
  {
    id: 7,
    title: "SWAYAM",
    desc: "India's MOOCs platform offering free online courses across levels.",
    url: "https://swayam.gov.in/",
  },
  {
    id: 8,
    title: "National Institutes & Education Bodies",
    desc: "CBSE, CIET and others providing standardization and support across schools.",
    url: "https://www.education.gov.in/en/institutions",
  },
  {
    id: 9,
    title: "Higher Education Schemes (RUSA, UGC grants)",
    desc: "Funding and development programmes for higher education institutions.",
    url: "https://www.education.gov.in/en/schemes",
  },
  {
    id: 10,
    title: "Institutions of National Importance",
    desc: "Premier centrally supported institutes like IITs, IIMs, NITs.",
    url: "https://www.education.gov.in/en/institutions-national-importance",
  },
  {
    id: 11,
    title: "Ministry of Education (India)",
    desc: "Central authority governing policy, budgets and implementation for education.",
    url: "https://www.education.gov.in/",
  },
  {
    id: 12,
    title: "National Education Policy (NEP) 2020",
    desc: "Transformative policy framework shaping the future of Indian education.",
    url: "https://www.education.gov.in/nep-new",
  },
  {
    id: 13,
    title: "National Government Services Portal – Education",
    desc: "One-stop platform offering admissions, scholarships and educational services.",
    url: "https://services.india.gov.in/service/listing?cat_id=1&ln=en",
  },
  {
    id: 14,
    title: "Scholarships & Student Finance Services",
    desc: "Online access to scholarships, fellowships and financial aid schemes.",
    url: "https://scholarships.gov.in/",
  },
  {
    id: 15,
    title: "Essentiality Certificates for Nursing & Dental Colleges",
    desc: "State-issued regulatory certificates for professional education institutions.",
    url: "https://services.india.gov.in/service/listing?cat_id=68&ln=en",
  },
  {
    id: 16,
    title: "Common Service Centres (CSCs) – Education Services",
    desc: "Local access points for online courses, skill training and scholarship help.",
    url: "https://csc.gov.in/",
  },
  {
    id: 17,
    title: "UGC (University Grants Commission)",
    desc: "Regulates university-level education and allocates grants.",
    url: "https://www.ugc.gov.in/",
  },
  {
    id: 18,
    title: "Open Schooling & Distance Education (NIOS, IGNOU)",
    desc: "Flexible education pathways for out-of-school learners and working adults.",
    url: "https://nios.ac.in/",
  },
  {
    id: 19,
    title: "Teacher Training Programs (NITTTR etc.)",
    desc: "Programs and institutes focused on improving teacher quality and skills.",
    url: "https://www.nitttrc.edu.in/",
  },
  {
    id: 20,
    title: "National Research Professorship (NRP)",
    desc: "Recognition and support for eminent researchers to boost higher education research.",
    url: "https://www.education.gov.in/en/schemes",
  },
  {
    id: 21,
    title: "Degree Colleges in Backward Districts",
    desc: "Scheme to set up and support colleges in underserved regions.",
    url: "https://www.education.gov.in/en/schemes",
  },
  {
    id: 22,
    title: "Mid‑Secondary Education Programs (RMSA, KGBV)",
    desc: "Support programmes for strengthening secondary education and girls' education.",
    url: "https://www.education.gov.in/en/schemes",
  },
  {
    id: 23,
    title: "National Child Labour Project (NCLP)",
    desc: "Rehabilitation and education for child labourers to mainstream them into schools.",
    url: "https://labour.gov.in/childlabour/national-child-labour-project-nclp",
  },
  {
    id: 24,
    title: "Open Resources & Research (NCERT, IES)",
    desc: "Open academic and research resources to support teaching and learning.",
    url: "https://ncert.nic.in/",
  },
  {
    id: 25,
    title: "International & Exchange Programs",
    desc: "International exchange and scholarship programs facilitating global exposure.",
    url: "https://www.education.gov.in/international-cooperation",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            Government Educational Services (India)
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          A curated list with authoritative references to India’s educational services and schemes.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>

            <div className="flex items-center justify-between">
              <Link
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Visit source
                <ExternalLink className="w-4 h-4" />
              </Link>

              <span className="text-xs text-gray-400 font-mono">#{s.id}</span>
            </div>
          </article>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto mt-16 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <p>
          Note: Links point to authoritative sources (official government portals and verified institutions).
        </p>
      </footer>
    </main>
  );
}

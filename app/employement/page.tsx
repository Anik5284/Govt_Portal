import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const EMPLOYMENT_SCHEMES = [
  { id: 1, title: "Atmanirbhar Bharat Rojgar Yojana (ABRY)", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 2, title: "Pradhan Mantri Rojgar Protsahan Yojana (PMRPY)", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 3, title: "National Career Service (NCS)", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 4, title: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 5, title: "Pradhan Mantri Garib Kalyan Rojgar Abhiyaan (PMGKRA)", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 6, title: "Deen Dayal Antyodaya Yojana – NRLM", url: "https://dge.gov.in/dge/schemes_programmes?utm_source=chatgpt.com" },
  { id: 7, title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", url: "https://en.wikipedia.org/wiki/Pradhan_Mantri_Kaushal_Vikas_Yojana?utm_source=chatgpt.com" },
  { id: 8, title: "National Apprenticeship Promotion Scheme (NAPS)", url: "https://clearias.com/employment-generation-schemes?utm_source=chatgpt.com" },
  { id: 9, title: "Startup India & Stand-Up India", url: "https://clearias.com/employment-generation-schemes?utm_source=chatgpt.com" },
  { id: 10, title: "Skill India Mission", url: "https://clearias.com/employment-generation-schemes?utm_source=chatgpt.com" },
  { id: 11, title: "Prime Minister’s Employment Generation Programme (PMEGP)", url: "https://www.jansamarth.in/prime-minister-employment-generation-program-scheme?utm_source=chatgpt.com" },
  { id: 12, title: "PM-SVANidhi", url: "https://eshram.gov.in/employment-schemes?utm_source=chatgpt.com" },
  { id: 13, title: "Aajeevika – National Rural Livelihoods Mission (NRLM)", url: "https://clearias.com/employment-generation-schemes?utm_source=chatgpt.com" },
  { id: 14, title: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)", url: "https://eshram.gov.in/employment-schemes?utm_source=chatgpt.com" },
  { id: 15, title: "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM)", url: "https://labour.gov.in/pm-sym?utm_source=chatgpt.com" },
  { id: 16, title: "Deen Dayal Upadhyaya Antyodaya Yojana (DAY-NULM)", url: "https://en.wikipedia.org/wiki/Deen_Dayal_Upadhyaya_Antyodaya_Yojana?utm_source=chatgpt.com" },
  { id: 17, title: "Atal Beemit Vyakti Kalyan Yojana (ABVKY)", url: "https://en.wikipedia.org/wiki/Atal_Beemit_Vyakti_Kalyan_Yojana?utm_source=chatgpt.com" },
  { id: 18, title: "National Food for Work Programme (NFWP)", url: "https://en.wikipedia.org/wiki/National_Food_For_Work_Programme?utm_source=chatgpt.com" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Government Employment & Skill Schemes (India)
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore key initiatives aimed at job creation, skilling, and livelihood support across India.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EMPLOYMENT_SCHEMES.map((s) => (
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
                className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
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
          Note: Links point to official government portals, Wikipedia, or verified resources. This page is styled for clarity, readability, and professionalism.
        </p>
      </footer>
    </main>
  );
}

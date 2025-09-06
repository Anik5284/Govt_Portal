import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Sarva Shiksha Abhiyan (SSA)",
    desc: "Flagship program for universal elementary education (ages 6–14).",
    url: "https://en.wikipedia.org/wiki/Sarva_Shiksha_Abhiyan?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title: "National Education Mission",
    desc: "Umbrella initiative incorporating SSA and other education schemes.",
    url: "https://en.wikipedia.org/wiki/Education_in_India?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Midday Meal Scheme",
    desc: "School nutrition program to improve attendance and learning outcomes.",
    url: "https://en.wikipedia.org/wiki/Education_in_India?utm_source=chatgpt.com",
  },
  {
    id: 4,
    title: "Integrated Child Development Services (ICDS)",
    desc: "Preschool education, nutrition and health services via Anganwadis.",
    url: "https://en.wikipedia.org/wiki/Integrated_Child_Development_Services?utm_source=chatgpt.com",
  },
  {
    id: 5,
    title: "National Digital Library of India (NDLI)",
    desc: "A massive digital repository offering free, multi-language educational resources.",
    url: "https://en.wikipedia.org/wiki/National_Digital_Library_of_India?utm_source=chatgpt.com",
  },
  {
    id: 6,
    title: "National Academic Depository (NAD)",
    desc: "Secure digital storage and retrieval of academic credentials (DigiLocker).",
    url: "https://en.wikipedia.org/wiki/National_Academic_Depository?utm_source=chatgpt.com",
  },
  {
    id: 7,
    title: "SWAYAM",
    desc: "India's MOOCs platform offering free online courses across levels.",
    url: "https://en.wikipedia.org/wiki/SWAYAM?utm_source=chatgpt.com",
  },
  {
    id: 8,
    title: "National Institutes & Education Bodies",
    desc: "CBSE, CIET and others providing standardization and support across schools.",
    url: "https://www.education.gov.in/institutions?utm_source=chatgpt.com",
  },
  {
    id: 9,
    title: "Higher Education Schemes (RUSA, UGC grants)",
    desc: "Funding and development programmes for higher education institutions.",
    url: "https://www.education.gov.in/en/schemes?utm_source=chatgpt.com",
  },
  {
    id: 10,
    title: "Institutions of National Importance",
    desc: "Premier centrally supported institutes like IITs, IIMs, NITs.",
    url: "https://en.wikipedia.org/wiki/Institutes_of_National_Importance?utm_source=chatgpt.com",
  },
  {
    id: 11,
    title: "Ministry of Education (India)",
    desc: "Central authority governing policy, budgets and implementation for education.",
    url: "https://en.wikipedia.org/wiki/Ministry_of_Education_(India)?utm_source=chatgpt.com",
  },
  {
    id: 12,
    title: "National Education Policy (NEP) 2020",
    desc: "Transformative policy framework shaping the future of Indian education.",
    url: "https://en.wikipedia.org/wiki/Ministry_of_Education_(India)?utm_source=chatgpt.com",
  },
  {
    id: 13,
    title: "National Government Services Portal – Education",
    desc: "One-stop platform offering admissions, scholarships and educational services.",
    url: "https://services.india.gov.in/service/listing?cat_id=1&ln=en&utm_source=chatgpt.com",
  },
  {
    id: 14,
    title: "Scholarships & Student Finance Services",
    desc: "Online access to scholarships, fellowships and financial aid schemes.",
    url: "https://services.india.gov.in/service/ministry_services?cmd_id=1642&ln=en&utm_source=chatgpt.com",
  },
  {
    id: 15,
    title: "Essentiality Certificates for Nursing & Dental Colleges",
    desc: "State-issued regulatory certificates for professional education institutions.",
    url: "https://services.india.gov.in/service/listing?cat_id=68&ln=en&utm_source=chatgpt.com",
  },
  {
    id: 16,
    title: "Common Service Centres (CSCs) – Education Services",
    desc: "Local access points for online courses, skill training and scholarship help.",
    url: "https://en.wikipedia.org/wiki/Common_Service_Centres?utm_source=chatgpt.com",
  },
  {
    id: 17,
    title: "UGC (University Grants Commission)",
    desc: "Regulates university-level education and allocates grants.",
    url: "https://en.wikipedia.org/wiki/Ministry_of_Education_(India)?utm_source=chatgpt.com",
  },
  {
    id: 18,
    title: "Open Schooling & Distance Education (NIOS, IGNOU)",
    desc: "Flexible education pathways for out-of-school learners and working adults.",
    url: "https://en.wikipedia.org/wiki/SWAYAM?utm_source=chatgpt.com",
  },
  {
    id: 19,
    title: "Teacher Training Programs (NITTTR etc.)",
    desc: "Programs and institutes focused on improving teacher quality and skills.",
    url: "https://en.wikipedia.org/wiki/SWAYAM?utm_source=chatgpt.com",
  },
  {
    id: 20,
    title: "National Research Professorship (NRP)",
    desc: "Recognition and support for eminent researchers to boost higher education research.",
    url: "https://www.education.gov.in/en/schemes?utm_source=chatgpt.com",
  },
  {
    id: 21,
    title: "Degree Colleges in Backward Districts",
    desc: "Scheme to set up and support colleges in underserved regions.",
    url: "https://www.education.gov.in/en/schemes?utm_source=chatgpt.com",
  },
  {
    id: 22,
    title: "Mid‑Secondary Education Programs (RMSA, KGBV)",
    desc: "Support programmes for strengthening secondary education and girls' education.",
    url: "https://testbook.com/ias-preparation/education-schemes-in-india?utm_source=chatgpt.com",
  },
  {
    id: 23,
    title: "National Child Labour Project (NCLP)",
    desc: "Rehabilitation and education for child labourers to mainstream them into schools.",
    url: "https://testbook.com/ias-preparation/education-schemes-in-india?utm_source=chatgpt.com",
  },
  {
    id: 24,
    title: "Open Resources & Research (NCERT, IES)",
    desc: "Open academic and research resources to support teaching and learning.",
    url: "https://ies.ed.gov/?utm_source=chatgpt.com",
  },
  {
    id: 25,
    title: "International & Exchange Programs",
    desc: "International exchange and scholarship programs facilitating global exposure.",
    url: "https://exchanges.state.gov/non-us/alphabetical-list-programs?utm_source=chatgpt.com",
  },
];
export default function Page() {
return (
<main className="min-h-screen bg-gray-50 p-8 font-sans">
<header className="max-w-6xl mx-auto mb-12 text-center">
<h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
25 Government Educational Services (India)
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
Note: Links point to authoritative sources (government portals, Wikipedia, or research repositories). This page is styled for clarity, readability, and professionalism.
</p>
</footer>
</main>
);
}
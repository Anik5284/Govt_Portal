"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const HOUSING_SERVICES = [
  { id: 1, title: "Pradhan Mantri Awas Yojana – Urban (PMAY-U)", desc: "Affordable housing for the urban poor; subsidy & mission implementation.", url: "https://pmay-urban.gov.in/" },
  { id: 2, title: "Pradhan Mantri Awas Yojana – Gramin (PMAY-G)", desc: "Rural housing scheme focused on providing pucca houses to rural poor.", url: "https://pmayg.nic.in/" },
  { id: 3, title: "Rajiv Awas Yojana (RAY)", desc: "Slum-free city initiative (phased out / merged into PMAY).", url: "https://mohua.gov.in/" },
  { id: 4, title: "Credit Linked Subsidy Scheme (CLSS)", desc: "Interest subsidy on home loans for EWS/LIG and middle-income groups.", url: "https://nhb.org.in/" },
  { id: 5, title: "Golden Jubilee Rural Housing Finance Scheme", desc: "Rural housing finance products for BPL families via NHB and banks.", url: "https://nhb.org.in/" },
  { id: 6, title: "Indira Awaas Yojana (IAY)", desc: "Earlier BPL housing scheme now subsumed under PMAY-G.", url: "https://pmayg.nic.in/" },
  { id: 7, title: "Affordable Rental Housing Complexes (ARHCs)", desc: "Rental housing for urban migrants and workers under PMAY-U.", url: "https://mohua.gov.in/" },
  { id: 8, title: "Jawaharlal Nehru National Urban Renewal Mission (JNNURM)", desc: "Large-scale urban infrastructure and housing development programme.", url: "https://mohua.gov.in/" },
  { id: 9, title: "State Housing Boards (DDA, MHADA, TNHB, WBHB etc.)", desc: "State-level boards offering housing projects, allotments and lotteries.", url: "https://dda.gov.in/" },
  { id: 10, title: "Smart Cities Mission (Housing Component)", desc: "Housing & urban renewal activities as part of Smart Cities projects.", url: "https://smartcities.gov.in/" },
  { id: 11, title: "Basic Services to the Urban Poor (BSUP)", desc: "Housing & infrastructure support for slum dwellers under JNNURM.", url: "https://mohua.gov.in/" },
  { id: 12, title: "EWS/LIG Housing Schemes (State & ULB level)", desc: "Economically Weaker Section and Low-Income Group housing programs run by states and ULBs.", url: "https://mohua.gov.in/" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-teal-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Government Housing Services & Schemes
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">A curated list of central and state-level housing programmes with official links and short descriptions.</p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HOUSING_SERVICES.map((s) => (
          <article key={s.id} className="group relative rounded-lg bg-white p-5 shadow-sm border border-gray-200 hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{s.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
              <span className="ml-4 inline-flex items-center justify-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">#{s.id}</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-800">
                Visit source
                <ExternalLink className="w-4 h-4" />
              </Link>

              <button
                onClick={() => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(s.url);
                  }
                }}
                className="text-xs text-gray-400 hover:text-gray-600"
                aria-label={`Copy link for ${s.title}`}
              >
                Copy link
              </button>
            </div>
          </article>
        ))}
      </section>

      <footer className="max-w-5xl mx-auto mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <p>Links point to official portals where available. Replace or localize state/ULB links as needed.</p>
      </footer>
    </main>
  );
}

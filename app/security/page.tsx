"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Search,
  ShieldCheck,
  Lock,
  Key,
  Server,
  Wifi,
  Bug,
  UserCheck,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    id: "vulnerability-scans",
    title: "Vulnerability Scans",
    description: "Automated network & host vulnerability discovery and reporting.",
    href: "/security/vulnerability-scans",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    id: "managed-firewall",
    title: "Managed Firewall",
    description: "24/7 firewall policy management and monitoring.",
    href: "/security/managed-firewall",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    id: "identity-management",
    title: "Identity & Access",
    description: "SAML/SSO, MFA, role-based access and lifecycle automation.",
    href: "/security/identity-access",
    icon: <UserCheck className="h-6 w-6" />,
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Periodic manual and automated pentests against your attack surface.",
    href: "/security/penetration-testing",
    icon: <Bug className="h-6 w-6" />,
  },
  {
    id: "key-management",
    title: "Key Management",
    description: "Secure key storage, rotation and audit trails for secrets and keys.",
    href: "/security/key-management",
    icon: <Key className="h-6 w-6" />,
  },
  {
    id: "siem",
    title: "SIEM & Analytics",
    description: "Centralised log collection, correlation and alerting.",
    href: "/security/siem-analytics",
    icon: <Server className="h-6 w-6" />,
  },
  {
    id: "wireless-security",
    title: "Wireless Security",
    description: "Secure Wi‑Fi design, monitoring and rogue AP detection.",
    href: "/security/wireless-security",
    icon: <Wifi className="h-6 w-6" />,
  },
  {
    id: "secure-code-review",
    title: "Secure Code Review",
    description: "Static & manual code reviews to find critical flaws early.",
    href: "/security/secure-code-review",
    icon: <ExternalLink className="h-6 w-6" />,
  },
];

export default function SecurityPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter(
      (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
  }, [query]);

  function copyLink(href: string) {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${href}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        const el = document.createElement("div");
        el.textContent = "Link copied to clipboard";
        el.className =
          "fixed bottom-6 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow-lg animate-fade-in";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2000);
      })
      .catch(() => {
        alert("Could not copy link — please copy manually: " + url);
      });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Security Services
            </h1>
            <p className="mt-2 text-base text-slate-600">
              8 professional-grade services available — explore each to learn more.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative block w-72">
              <span className="sr-only">Search services</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 pr-10 text-sm shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-400"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-slate-400" />
              </span>
            </label>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-sky-700 md:inline-flex"
            >
              <Lock className="h-4 w-4" /> Contact Sales
            </a>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <article
                key={s.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl hover:border-sky-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 shadow-sm">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href={s.href}
                          className="inline-flex items-center gap-1 hover:text-sky-600"
                        >
                          {s.title}
                          <span className="text-slate-400 transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <button
                      onClick={() => copyLink(s.href)}
                      aria-label={`Copy link for ${s.title}`}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600 transition hover:bg-slate-100"
                    >
                      Copy
                    </button>
                    <Link
                      href={s.href}
                      aria-label={`Open ${s.title}`}
                      className="inline-flex items-center gap-1 rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 transition hover:bg-sky-100"
                    >
                      Open <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <p className="text-base text-slate-600">
                  No services match your search.
                </p>
              </div>
            )}
          </div>
        </section>

        <footer
          id="contact"
          className="mt-16 rounded-2xl bg-white p-8 shadow-md"
        >
          <p className="text-sm text-slate-700">
            Need a custom security plan? {" "}
            <a
              href="/contact"
              className="font-medium text-sky-600 hover:underline"
            >
              Contact our security team
            </a>{" "}
            — we’ll tailor a solution.
          </p>
        </footer>
      </div>
    </main>
  );
}

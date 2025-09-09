"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Search,
  DollarSign,
  Briefcase,
  CreditCard,
  BarChart2,
  TrendingUp,
  Globe,
  FileText,
  ShieldCheck,
  Database,
  Zap,
  Layers,
  UserPlus,
  CheckSquare,
  Calendar,
  Key,
  Clock,
  PieChart,
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
    id: "treasury-management",
    title: "Treasury Management",
    description: "Optimize liquidity, accounts and short-term investments across entities.",
    href: "/finance/treasury-management",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    id: "corporate-banking",
    title: "Corporate Banking",
    description: "Enterprise banking relationships, credit lines and corporate accounts.",
    href: "/finance/corporate-banking",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: "payments-ach",
    title: "Payments & ACH",
    description: "Domestic and cross-border payment rails, batch processing and ACH.",
    href: "/finance/payments-ach",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: "fx-currency",
    title: "FX & Currency",
    description: "Spot, forward and hedging strategies to manage currency exposure.",
    href: "/finance/fx-currency",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: "trade-finance",
    title: "Trade Finance",
    description: "Letters of credit, documentary collections and export financing.",
    href: "/finance/trade-finance",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "cash-forecasting",
    title: "Cash Forecasting",
    description: "Short- and long-range cash projections with scenario modelling.",
    href: "/finance/cash-forecasting",
    icon: <BarChart2 className="h-6 w-6" />,
  },
  {
    id: "investment-advisory",
    title: "Investment Advisory",
    description: "Portfolio construction, asset allocation and manager selection.",
    href: "/finance/investment-advisory",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    id: "wealth-management",
    title: "Wealth Management",
    description: "Personalised wealth strategies for executives and stakeholders.",
    href: "/finance/wealth-management",
    icon: <UserPlus className="h-6 w-6" />,
  },
  {
    id: "expense-management",
    title: "Expense Management",
    description: "Automate expense workflows, approvals and policy enforcement.",
    href: "/finance/expense-management",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: "card-issuing",
    title: "Card Issuing",
    description: "Physical and virtual card programs with controls and reconciliation.",
    href: "/finance/card-issuing",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: "merchant-services",
    title: "Merchant Services",
    description: "Payment acceptance, POS integrations and settlement optimization.",
    href: "/finance/merchant-services",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    id: "accounting-integration",
    title: "Accounting Integration",
    description: "Connect systems for automated GL posting, reconciliation, and close.",
    href: "/finance/accounting-integration",
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: "payroll-services",
    title: "Payroll Services",
    description: "Payroll processing, tax filing and multi-jurisdiction support.",
    href: "/finance/payroll-services",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    id: "regulatory-reporting",
    title: "Regulatory Reporting",
    description: "Automate statutory, tax and regulatory filings with audit trails.",
    href: "/finance/regulatory-reporting",
    icon: <CheckSquare className="h-6 w-6" />,
  },
  {
    id: "risk-compliance",
    title: "Risk & Compliance",
    description: "Enterprise risk frameworks, KYC/AML and compliance monitoring.",
    href: "/finance/risk-compliance",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    description: "Budgeting, forecasting and multi-scenario planning for finance leaders.",
    href: "/finance/financial-planning",
    icon: <PieChart className="h-6 w-6" />,
  },
  {
    id: "treasury-analytics",
    title: "Treasury Analytics",
    description: "Dashboards, KPIs and cash-performance analytics.",
    href: "/finance/treasury-analytics",
    icon: <BarChart2 className="h-6 w-6" />,
  },
  {
    id: "credit-facilities",
    title: "Credit Facilities",
    description: "Structuring and managing working capital and term facilities.",
    href: "/finance/credit-facilities",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: "loan-servicing",
    title: "Loan Servicing",
    description: "Origination, servicing and reporting for bilateral and syndicated loans.",
    href: "/finance/loan-servicing",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description: "Tax planning, filing and cross-border structuring support.",
    href: "/finance/tax-services",
    icon: <Key className="h-6 w-6" />,
  },
  {
    id: "banking-apis",
    title: "Banking APIs",
    description: "Open banking, payouts and programmable account APIs.",
    href: "/finance/banking-apis",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "asset-management",
    title: "Asset Management",
    description: "Custody, fund administration and performance reporting.",
    href: "/finance/asset-management",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

export default function FinancePage() {
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
          "fixed bottom-6 left-1/2 -translate-x-1/2 rounded-lg bg-emerald-900 text-white px-4 py-2 text-sm shadow-lg animate-fade-in";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2000);
      })
      .catch(() => {
        alert("Could not copy link — please copy manually: " + url);
      });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-slate-100 p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Finance Services</h1>
            <p className="mt-2 text-base text-slate-600">22 services available — discover products and solutions tailored for finance.</p>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative block w-72">
              <span className="sr-only">Search services</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 pr-10 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-slate-400" />
              </span>
            </label>

            <a
              href="/finance/explore"
              className="hidden items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-emerald-700 md:inline-flex"
            >
              <DollarSign className="h-4 w-4" /> Explore
            </a>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <article
                key={s.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl hover:border-emerald-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-sm">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link href={s.href} className="inline-flex items-center gap-1 hover:text-emerald-600">
                          {s.title}
                          <span className="text-slate-400 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{s.description}</p>
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
                      className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100"
                    >
                      Open <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                <p className="text-base text-slate-600">No services match your search.</p>
              </div>
            )}
          </div>
        </section>

        <footer id="explore" className="mt-16 rounded-2xl bg-white p-8 shadow-md">
          <p className="text-sm text-slate-700">
            Want a walkthrough of our finance services? {" "}
            <Link href="/finance/explore" className="font-medium text-emerald-600 hover:underline">
              Explore all finance offerings
            </Link>
            {" "}— schedule a demo or request a tailored proposal.
          </p>
        </footer>
      </div>
    </main>
  );
}

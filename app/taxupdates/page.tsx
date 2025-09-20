// app/tax-updates/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TaxUpdate {
  title: string;
  description: string;
  date: string;
  sourceUrl: string;
}

const updates: TaxUpdate[] = [
  {
    title: "New Income Tax Act, 2025 Enacted",
    description:
      "The Income-Tax (No. 2) Bill, 2025 has been passed and received President’s assent. It replaces many provisions of the old law, simplifying language, removing obsolete sections, and introducing a unified “Tax Year” concept replacing the earlier “Assessment Year / Previous Year” terms. :contentReference[oaicite:0]{index=0}",
    date: "Aug 21, 2025",
    sourceUrl: "https://pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=155137"
  },
  {
    title: "Revised Income Tax Slabs from FY 2025-26 (New Regime)",
    description:
      "New tax slabs under the new/default regime have been adjusted. Basic exemption limit raised. Zero tax for incomes up to ₹12 lakh under new regime. :contentReference[oaicite:1]{index=1}",
    date: "From Apr 1, 2025",
    sourceUrl: "https://economictimes.indiatimes.com/wealth/income-tax-slabs"
  },
  {
    title: "Major Changes To Form 3CD for Income Tax Audit (AY 2025-26)",
    description:
      "Five key new disclosures mandated: e.g. payments to MSMEs (adherence to payment timelines), share buybacks under clause 36B, expenses for legal proceedings, and stricter reporting of loans/deposits & presumptive income under Section 44BBC. :contentReference[oaicite:2]{index=2}",
    date: "2025",
    sourceUrl: "https://economictimes.indiatimes.com/wealth/tax/top-five-changes-in-income-tax-audit-form-3cd"
  },
  {
    title: "False Exemption Claims Scrutiny & Refund Delays",
    description:
      "IT Dept. has detected ~₹700 crore in false exemption claims (many under old tax regime) for FY 2024-25; refunds may be slower. :contentReference[oaicite:3]{index=3}",
    date: "Sep 2025",
    sourceUrl: "https://timesofindia.indiatimes.com/business/financial-literacy/taxation/slower-tax-refunds-after-itr-filing"
  },
  {
    title: "GST 2.0 Reforms: Slab Reductions & Simplification",
    description:
      "GST slabs being simplified: from four main slabs to two (5% & 8%), effective Sep 22, 2025. Many goods in higher slabs moved down. :contentReference[oaicite:4]{index=4}",
    date: "From Sep 22, 2025",
    sourceUrl: "https://timesofindia.indiatimes.com/city/madurai/gabbar-singh-tax-registrations-wouldnt-have-grown-132-nirmala/articleshow/124004187.cms"
  },
  {
    title: "Haryana OTS Scheme for Small Taxpayers",
    description:
      "One-Time Settlement scheme for small taxpayers in Haryana to settle outstanding dues under various tax acts (VAT, CST, etc.). Interest & penalties waived; final deadline Sep 27, 2025. :contentReference[oaicite:5]{index=5}",
    date: "Until Sep 27, 2025",
    sourceUrl: "https://timesofindia.indiatimes.com/city/chandigarh/haryana-govt-launches-ots-scheme-for-small-taxpayers/articleshow/123983922.cms"
  }
];

export default function TaxUpdatesPage() {
  return (
    <main className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Latest Indian Government Tax Updates</h1>
      {updates.map((upd, idx) => (
        <Card key={idx} className="shadow-lg rounded-lg border">
          <CardHeader className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-semibold">{upd.title}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">{upd.date}</p>
            </div>
            <Badge
              variant="outline"
              asChild
            >
              <a
                href={upd.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xs"
              >
                Source
              </a>
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{upd.description}</p>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}

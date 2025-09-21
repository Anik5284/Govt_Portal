"use client";

import React, { useMemo, useState } from "react";

type Exam = {
  id: string;
  title: string;
  subject?: string;
  date: string; // ISO
  level?: string;
  location?: string;
  registrationDeadline?: string; // ISO
};

// Helper: format date nicely
const fmtDate = (iso?: string) => {
  if (!iso) return "-";
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
};

// Generate some sample exams (these are examples; replace with real data as needed)
const SAMPLE_EXAMS: Exam[] = [
  {
    id: "cbe-2026",
    title: "Common Board Entrance Exam",
    subject: "General",
    date: new Date(new Date().getFullYear(), 10, 15).toISOString(),
    level: "Undergraduate",
    location: "Multiple centres",
    registrationDeadline: new Date(new Date().getFullYear(), 9, 30).toISOString(),
  },
  {
    id: "gmat-2026",
    title: "GMAT",
    subject: "Business",
    date: new Date(new Date().getFullYear() + 1, 2, 12).toISOString(),
    level: "Postgraduate",
    location: "Test centres / Online",
    registrationDeadline: new Date(new Date().getFullYear() + 1, 1, 25).toISOString(),
  },
  {
    id: "sat-2025",
    title: "SAT",
    subject: "College Admissions",
    date: new Date(new Date().getFullYear(), 6, 6).toISOString(),
    level: "Undergraduate",
    location: "Worldwide",
    registrationDeadline: new Date(new Date().getFullYear(), 5, 15).toISOString(),
  },
  {
    id: "ssc-2026",
    title: "SSC Combined Exam",
    subject: "General",
    date: new Date(new Date().getFullYear() + 2, 0, 25).toISOString(),
    level: "Government",
    location: "Countrywide",
    registrationDeadline: new Date(new Date().getFullYear() + 1, 11, 31).toISOString(),
  },
];

export default function Page() {
  const now = new Date();
  const twoYearsLater = new Date(now.getFullYear() + 2, now.getMonth(), now.getDate());

  const [exams] = useState<Exam[]>(SAMPLE_EXAMS);

  // derived: exams within next 2 years
  const upcoming = useMemo(() => {
    return exams
      .filter((e) => {
        const d = new Date(e.date);
        return d >= now && d <= twoYearsLater;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [exams, now, twoYearsLater]);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upcoming exams (next 2 years)</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Registration deadline</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No exams scheduled within the next two years.
                </td>
              </tr>
            )}

            {upcoming.map((x) => (
              <tr key={x.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{x.title}</td>
                <td className="px-4 py-3">{x.subject ?? "-"}</td>
                <td className="px-4 py-3">{fmtDate(x.date)}</td>
                <td className="px-4 py-3">{fmtDate(x.registrationDeadline)}</td>
                <td className="px-4 py-3">{x.level ?? "-"}</td>
                <td className="px-4 py-3">{x.location ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

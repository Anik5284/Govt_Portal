"use client";

import React, { useMemo, useState } from "react";

type Exam = {
  id: string;
  title: string;
  subject?: string;
  date: string;
  level?: string;
  location?: string;
  registrationDeadline?: string;
};

const fmtDate = (iso?: string) => {
  if (!iso) return "-";
  try { return new Date(iso).toLocaleDateString(); } catch { return iso; }
};

const SAMPLE_EXAMS: Exam[] = [
  { id: "cbe-2026", title: "Common Board Entrance Exam", subject: "General", date: new Date(new Date().getFullYear(), 10, 15).toISOString(), level: "Undergraduate", location: "Multiple centres", registrationDeadline: new Date(new Date().getFullYear(), 9, 30).toISOString() },
  { id: "gmat-2026", title: "GMAT", subject: "Business", date: new Date(new Date().getFullYear() + 1, 2, 12).toISOString(), level: "Postgraduate", location: "Test centres / Online", registrationDeadline: new Date(new Date().getFullYear() + 1, 1, 25).toISOString() },
  { id: "sat-2025", title: "SAT", subject: "College Admissions", date: new Date(new Date().getFullYear(), 6, 6).toISOString(), level: "Undergraduate", location: "Worldwide", registrationDeadline: new Date(new Date().getFullYear(), 5, 15).toISOString() },
  { id: "ssc-2026", title: "SSC Combined Exam", subject: "General", date: new Date(new Date().getFullYear() + 2, 0, 25).toISOString(), level: "Government", location: "Countrywide", registrationDeadline: new Date(new Date().getFullYear() + 1, 11, 31).toISOString() }
];

export default function Page() {
  const now = new Date();
  const twoYearsLater = new Date(now.getFullYear() + 2, now.getMonth(), now.getDate());
  const [exams] = useState<Exam[]>(SAMPLE_EXAMS);

  const upcoming = useMemo(() => exams.filter(e => { const d = new Date(e.date); return d >= now && d <= twoYearsLater; }).sort((a,b)=>new Date(a.date).getTime()-new Date(b.date).getTime()), [exams, now, twoYearsLater]);

  return (
    <main>
      <div className="container">
        <h1>Upcoming Exams</h1>
        <p className="lead">Showing all exams scheduled within the next two years.</p>

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Registration Deadline</th>
                <th>Level</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.length === 0 ? (
                <tr>
                  <td colSpan={6} className="empty">No exams scheduled within the next two years.</td>
                </tr>
              ) : (
                upcoming.map((x, idx) => (
                  <tr key={x.id} className={idx % 2 === 0 ? 'bg-even' : 'bg-odd'}>
                    <td className="titleCell">{x.title}</td>
                    <td>{x.subject ?? '-'}</td>
                    <td>{fmtDate(x.date)}</td>
                    <td>{fmtDate(x.registrationDeadline)}</td>
                    <td>{x.level ?? '-'}</td>
                    <td>{x.location ?? '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <footer>© {new Date().getFullYear()} Exam Schedule Board. All rights reserved.</footer>
      </div>

      <style jsx>{`
        :root {
          --bg: #f0f4f8;
          --card: #ffffff;
          --text: #1f2937;
          --muted: #6b7280;
          --accent-1: #3b82f6;
          --accent-2: #6366f1;
          --accent-3: #ec4899;
          --accent-4: #f97316;
          --border: #e5e7eb;
          --radius: 12px;
          --shadow-md: 0 8px 24px rgba(0,0,0,0.08);
        }

        main { background: var(--bg); min-height: 100vh; padding: 40px 20px; font-family: 'Inter', sans-serif; color: var(--text); }
        .container { max-width: 1100px; margin: 0 auto; }
        h1 { font-size: 2.25rem; margin-bottom: 4px; }
        .lead { color: var(--muted); font-size: 14px; margin-bottom: 24px; }
        .card { background: var(--card); border-radius: var(--radius); box-shadow: var(--shadow-md); overflow: hidden; }
        .table { width: 100%; border-collapse: collapse; }
        .table thead th { text-align: left; padding: 14px; font-weight: 600; background: linear-gradient(to right, var(--accent-1), var(--accent-2)); color: #fff; }
        .table tbody td { padding: 14px; border-bottom: 1px solid var(--border); }
        .table tbody tr.bg-even { background-color: #f9fafb; }
        .table tbody tr.bg-odd { background-color: #ffffff; }
        .table tbody tr:hover { background-color: var(--accent-1); color: #fff; transition: 0.3s; }
        .titleCell { font-weight: 600; }
        .empty { text-align: center; padding: 28px; color: var(--muted); }
        footer { text-align: center; font-size: 13px; color: var(--muted); margin-top: 32px; }

        @media (max-width: 820px) {
          .table thead { display: none; }
          .table tbody td { display: block; width: 100%; padding-left: 50%; position: relative; }
          .table tbody td::before { content: attr(data-label) ": "; position: absolute; left: 14px; font-weight: 600; }
          .table tbody tr { margin-bottom: 16px; display: block; border-radius: var(--radius); overflow: hidden; }
        }
      `}</style>
    </main>
  );
}

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

  const [exams, setExams] = useState<Exam[]>(SAMPLE_EXAMS);

  // derived: exams within next 2 years
  const upcoming = useMemo(() => {
    return exams
      .filter((e) => {
        const d = new Date(e.date);
        return d >= now && d <= twoYearsLater;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [exams, now, twoYearsLater]);

  // Add exam form state
  const [form, setForm] = useState<Partial<Exam>>({
    title: "",
    subject: "",
    date: "",
    level: "",
    location: "",
    registrationDeadline: "",
  });

  function addExam(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.date) {
      alert("Please provide at least a title and date.");
      return;
    }
    const newExam: Exam = {
      id: `${form.title?.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      title: form.title!,
      subject: form.subject,
      date: new Date(form.date!).toISOString(),
      level: form.level,
      location: form.location,
      registrationDeadline: form.registrationDeadline
        ? new Date(form.registrationDeadline).toISOString()
        : undefined,
    };
    setExams((s) => [...s, newExam]);
    setForm({ title: "", subject: "", date: "", level: "", location: "", registrationDeadline: "" });
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add Exam</h1>

      <form onSubmit={addExam} className="mb-6 border rounded p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            required
            placeholder="Title (e.g. JEE Advanced)"
            className="border rounded px-3 py-2"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />

          <input
            placeholder="Subject"
            className="border rounded px-3 py-2"
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          />

          <select
            className="border rounded px-3 py-2"
            value={form.level}
            onChange={(e) => setForm((f) => ({ ...f, level: e.target.value }))}
          >
            <option value="">Select level</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Government</option>
            <option>Professional</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm">Exam date</label>
            <input
              required
              type="date"
              className="border rounded px-3 py-2 w-full"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm">Registration deadline</label>
            <input
              type="date"
              className="border rounded px-3 py-2 w-full"
              value={form.registrationDeadline}
              onChange={(e) => setForm((f) => ({ ...f, registrationDeadline: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm">Location</label>
            <input
              placeholder="Location"
              className="border rounded px-3 py-2 w-full"
              value={form.location}
              onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-green-600 text-white" type="submit">
            Save exam
          </button>
        </div>
      </form>

      <section>
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
      </section>
    </main>
  );
}

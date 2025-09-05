import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Navbar at top */}
      <Navbar />

      {/* ✅ Main content */}
      <main className="flex-grow bg-slate-50 text-slate-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <header className="mb-4">
            <h1 className="text-3xl font-bold text-indigo-700">About Us</h1>
            <p className="text-slate-600 mt-2">
              Government Personalized Portal — Citizen-centric digital access
            </p>
          </header>

          {/* Content Sections */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 space-y-6">
            <article>
              <p className="text-slate-700 leading-relaxed">
                The <strong>Government Personalized Portal</strong> is an initiative
                to simplify citizen–government interaction by providing a <strong>single, unified, and personalized digital experience</strong>.
                Citizens can access schemes, services, and updates tailored to their
                needs in one secure place.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-slate-700">
                To empower every Indian citizen with <strong>easy, transparent, and secure access</strong> to government
                services through technology-driven governance.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Provide a personalized portal that adapts to each user’s profile.</li>
                <li>Integrate multiple government services and schemes under one roof.</li>
                <li>Enable seamless communication between citizens and departments.</li>
                <li>Promote inclusivity, accessibility, and efficiency aligned with <strong>Digital India</strong>.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Personalized Dashboard with relevant schemes & updates</li>
                <li>One-stop access to government forms and services</li>
                <li>Real-time tracking of applications and requests</li>
                <li>Secure, compliant platform ensuring data privacy & safety</li>
              </ul>
            </article>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Government Personalized Portal — An Indian Government initiative (project).
      </footer>
    </div>
  );
}

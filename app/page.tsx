"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">
          Personalized Government Info Portal
        </h1>
        <p className="max-w-2xl mb-6">
          Access personalized government schemes, services, and information tailored to your profile. Stay updated with relevant opportunities and benefits.
        </p>
        <div className="flex gap-2 w-full max-w-xl">
          <Input placeholder="Search for schemes, services, or documents..." />
          <Button>
            <Search className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
        <div className="mt-6 flex gap-4">
          <Button variant="secondary">Explore Services</Button>
          <Button variant="outline" className="text-white border-white">
            Learn More
          </Button>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-100 py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h2 className="text-2xl font-bold">1.2M+</h2>
          <p>Active Users</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">500+</h2>
          <p>Government Services</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">95%</h2>
          <p>Success Rate</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">4.8</h2>
          <p>Rating</p>
        </div>
      </section>

      {/* Government Services */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Government Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[ 
            { name: "Education", count: 25 },
            { name: "Employment", count: 18 },
            { name: "Housing", count: 12 },
            { name: "Healthcare", count: 15 },
            { name: "Security", count: 8 },
            { name: "Finance", count: 22 },
            { name: "Documents", count: 30 }
          ].map((s) => (
            <Card key={s.name}>
              <CardHeader>
                <CardTitle>{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{s.count} services available</p>
                <Button variant="outline">Explore →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Schemes */}
      <section className="bg-gray-50 py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { name: "PM Kisan Samman Nidhi", cat: "Finance", desc: "Direct income support to farmers" },
            { name: "PM Awas Yojana", cat: "Housing", desc: "Housing for all by 2022" },
            { name: "Ayushman Bharat", cat: "Healthcare", desc: "Health insurance for poor families" },
            { name: "PM Fasal Bima Yojana", cat: "Finance", desc: "Crop insurance scheme" },
            { name: "Skill India Mission", cat: "Employment", desc: "Skill development training" },
            { name: "Beti Bachao Beti Padhao", cat: "Education", desc: "Girl child education and protection" }
          ].map((scheme) => (
            <Card key={scheme.name}>
              <CardHeader>
                <CardTitle>{scheme.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">{scheme.desc}</p>
                <div className="flex gap-2">
                  <Button size="sm">Learn More</Button>
                  <Button size="sm" variant="outline">Check Eligibility</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlights & Features */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Highlights of Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {["Schemes", "Exams", "Tax Updates"].map((h) => (
            <Card key={h}>
              <CardHeader>
                <CardTitle>{h}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Explore →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-center mb-6">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Personalization", "Alerts", "Document Checklist"].map((f) => (
            <Card key={f}>
              <CardHeader>
                <CardTitle>{f}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Personalized Government Info Portal</h3>
          <p className="text-sm">
            Your one-stop destination for personalized government schemes, services, and information.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Schemes</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p className="text-sm">Government Complex, New Delhi, India</p>
          <p className="text-sm">+91 1800-XXX-XXXX</p>
          <p className="text-sm">info@pgip.gov.in</p>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";

export default function OpportunitiesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [location, setLocation] = useState("All Locations");
  const [sort, setSort] = useState("Newest");
  const [filtered, setFiltered] = useState<any[]>([]);

  const opportunities = [
    {
      id: 1,
      title: "Senior Software Engineer",
      org: "TechCorp Inc.",
      location: "San Francisco, CA",
      date: "Dec 15, 2024",
      type: "Job",
      color: "bg-blue-100 text-blue-700",
      description:
        "Join our innovative team to build cutting-edge software solutions...",
    },
    {
      id: 2,
      title: "Data Science",
      org: "Analytics",
      location: "Remote",
      date: "Jan 10, 2025",
      type: "Job",
      color: "bg-green-100 text-green-700",
      description: "6-month paid internship  & PPO",
    },
    {
      id: 3,
      title: "Data Science Intern",
      org: "DataFlow Analytics",
      location: "Remote",
      date: "Jan 10, 2025",
      type: "Internship",
      color: "bg-green-100 text-green-700",
      description:
        "6-month paid internship working with real-world datasets...",
    },
    {
      id: 4,
      title: "Merit Scholarship Program",
      org: "Global Education Foundation",
      location: "Worldwide",
      date: "Feb 28, 2025",
      type: "Scholarship",
      color: "bg-purple-100 text-purple-700",
      description:
        "Full tuition scholarship for outstanding students pursuing STEM degrees...",
    },
    {
      id: 5,
      title: "Startup Incubator Program",
      org: "Innovation Hub",
      location: "New York, NY",
      date: "Mar 15, 2025",
      type: "Scheme",
      color: "bg-orange-100 text-orange-700",
      description:
        "12-week accelerator program for early-stage startups with funding opportunities...",
    },
  ];

  // ---------- Filter Logic ----------
  const applyFilters = () => {
    let result = [...opportunities];

    if (selectedCategories.length > 0) {
      result = result.filter((o) =>
        selectedCategories.some(
          (c) => o.type.toLowerCase() === c.toLowerCase().replace(/s$/, "")
        )
      );
    }

    if (location !== "All Locations") {
      result = result.filter((o) => o.location === location);
    }

    if (sort === "Newest") {
      result.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sort === "Oldest") {
      result.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    setFiltered(result);
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const displayed = filtered.length > 0 ? filtered : opportunities;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-72 bg-white border-r p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Opportunities
          </h2>
          <p className="text-gray-500 mb-6">Find your next opportunity</p>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
            <div className="space-y-3">
              {[
                "Jobs",
                "Internships",
                "Scholarships",
                "Schemes",
                "Exams",
                "Tax Updates",
                "Alerts",
              ].map((cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className="text-gray-700">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Advanced Filters</h3>

            <label className="block mb-3">
              <span className="text-sm text-gray-600">Location</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border rounded-md p-2 text-sm"
              >
                <option>All Locations</option>
                <option>San Francisco, CA</option>
                <option>Remote</option>
                <option>New York, NY</option>
              </select>
            </label>
          </div>

          <button
            onClick={applyFilters}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Available Opportunities
            </h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded-md p-2 text-sm"
            >
              <option value="Newest">Sort by: Newest</option>
              <option value="Oldest">Sort by: Oldest</option>
            </select>
          </div>

          {displayed.length === 0 ? (
            <p className="text-gray-500">No opportunities found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {displayed.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white rounded-lg shadow-sm border p-5 flex flex-col"
                >
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded ${opp.color} w-fit mb-3`}
                  >
                    {opp.type}
                  </span>
                  <h3 className="font-semibold text-gray-800">{opp.title}</h3>
                  <p className="text-gray-600">{opp.org}</p>

                  <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" /> <span>{opp.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" /> <span>{opp.date}</span>
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 flex-1">
                    {opp.description}
                  </p>

                  <button className="mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

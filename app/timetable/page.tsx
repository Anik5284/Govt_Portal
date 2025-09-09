// app/timetable/page.tsx

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Navbar
import Navbar from "../components/Navbar";

export default function TimetablePage() {
  const [activeTab, setActiveTab] = React.useState("Daily");
  const [month, setMonth] = React.useState(new Date("2024-12-01"));

  const events = [
    {
      title: "Software Engineer",
      org: "Google Inc.",
      type: "Job",
      color: "bg-blue-50 border-l-4 border-blue-400",
      tagColor: "bg-blue-500 text-white",
    },
    {
      title: "Data Science Internship",
      org: "Microsoft",
      type: "Internship",
      color: "bg-green-50 border-l-4 border-green-400",
      tagColor: "bg-green-500 text-white",
    },
    {
      title: "Merit Scholarship",
      org: "Stanford University",
      type: "Scholarship",
      color: "bg-yellow-50 border-l-4 border-yellow-400",
      tagColor: "bg-yellow-500 text-white",
    },
  ];

  const formattedMonth = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const changeMonth = (direction: "prev" | "next") => {
    setMonth(
      new Date(
        month.getFullYear(),
        month.getMonth() + (direction === "prev" ? -1 : 1),
        1
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800">Timetable</h1>
        <p className="text-gray-500 mb-6">
          Track all your deadlines and opportunities
        </p>

        {/* Tabs & Month Navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-lg border p-3 mb-6">
          {/* Tabs */}
          <div className="flex space-x-2 mb-3 md:mb-0">
            {["Daily", "Weekly", "Monthly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md font-medium ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Month Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeMonth("prev")}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <span className="font-medium text-gray-700">{formattedMonth}</span>
            <button
              onClick={() => changeMonth("next")}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-lg border p-4 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Today - December 15, 2024
          </h2>

          {events.map((event, idx) => (
            <div
              key={idx}
              className={`${event.color} rounded-lg p-4 flex justify-between items-center`}
            >
              <div>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600">{event.org}</p>
                <p className="text-sm text-gray-400">Application Deadline</p>
              </div>
              <span
                className={`${event.tagColor} px-3 py-1 rounded-md text-sm font-medium`}
              >
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

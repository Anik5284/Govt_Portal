// app/profile/page.tsx

"use client";

import * as React from "react";
import {
  User,
  GraduationCap,
  Calendar as CalendarIcon,
  Users,
  FileText,
  Heart,
  Briefcase,
  GraduationCap as ScholarshipIcon,
  Landmark,
  RefreshCw,
  Save,
  UserCheck,
  X,
} from "lucide-react";

// Import Navbar
import Navbar from "../components/Navbar";

export default function MyProfilePage() {
  const [date, setDate] = React.useState<string>("");
  const [resumeFile, setResumeFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSelectFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
    }
  };

  // Reusable card classes
  const cardClass =
    "bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 " +
    "hover:shadow-md hover:border-blue-300 transition-all duration-200";

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-500 mt-1">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* --- Basic Details --- */}
          <section className={cardClass}>
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Basic Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <input
                    type="date"
                    id="dob"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  placeholder="+91 12345 67890"
                  type="tel"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  placeholder="your.email@example.com"
                  type="email"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  placeholder="Enter your complete address"
                  className="w-full rounded-md border border-gray-300 p-2 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* --- Academic Details --- */}
          <section className={cardClass}>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Academic Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-700"
                >
                  Highest Qualification
                </label>
                <select
                  id="qualification"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Qualification</option>
                  <option value="highschool">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor’s</option>
                  <option value="masters">Master’s</option>
                  <option value="phd">Ph.D</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Course
                </label>
                <input
                  id="course"
                  placeholder="e.g., B.Tech Computer Science"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-gray-700"
                >
                  Institution
                </label>
                <input
                  id="institution"
                  placeholder="Institution name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year of Passing
                </label>
                <select
                  id="year"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 50 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills
                </label>
                <textarea
                  id="skills"
                  placeholder="List your skills (e.g., Programming, Data Analysis, Communication)"
                  className="w-full rounded-md border border-gray-300 p-2 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* --- Caste & Family Income --- */}
          <section className={cardClass}>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Caste & Family Income
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="caste"
                  className="block text-sm font-medium text-gray-700"
                >
                  Caste Category
                </label>
                <select
                  id="caste"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="income"
                  className="block text-sm font-medium text-gray-700"
                >
                  Annual Family Income
                </label>
                <select
                  id="income"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Income Range</option>
                  <option value="<1">Less than ₹1 Lakh</option>
                  <option value="1-5">₹1 Lakh - ₹5 Lakhs</option>
                  <option value="5-10">₹5 Lakhs - ₹10 Lakhs</option>
                  <option value="10-20">₹10 Lakhs - ₹20 Lakhs</option>
                  <option value=">20">Above ₹20 Lakhs</option>
                </select>
              </div>
            </div>
          </section>

          {/* --- Additional Details --- */}
          <section className={cardClass}>
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Additional Details
              </h2>
            </div>

            <div className="space-y-6">
              {/* Resume Upload */}
              <div className="space-y-2">
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resume Upload
                </label>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      readOnly
                      value={resumeFile ? resumeFile.name : ""}
                      placeholder="No file selected..."
                      className="w-full rounded-md border border-gray-300 p-2 bg-gray-50 cursor-default text-sm"
                    />
                    {resumeFile && (
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-red-600"
                        aria-label="Remove file"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <input
                    type="file"
                    id="resume"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={handleSelectFileClick}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Browse...
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  PDF, DOC, DOCX up to 5MB
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="github"
                    className="block text-sm font-medium text-gray-700"
                  >
                    GitHub Profile
                  </label>
                  <input
                    id="github"
                    placeholder="https://github.com/yourusername"
                    className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Job Location
                </label>
                <input
                  id="location"
                  placeholder="e.g., Mumbai, Delhi, Remote"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* --- Interests Selection & Actions --- */}
          <section className={cardClass}>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Interests Selection
              </h2>
            </div>
            <p className="text-gray-500 mb-6">
              Select areas of interest for personalized recommendations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <Briefcase className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Jobs</span>
              </label>

              <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <UserCheck className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Internships</span>
              </label>

              <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <ScholarshipIcon className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Scholarships</span>
              </label>

              <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <Landmark className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-700">Schemes</span>
              </label>
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 w-full md:w-auto">
                <Save className="h-5 w-5 mr-2" /> Save Changes
              </button>
              <button className="flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-md shadow hover:bg-gray-300 w-full md:w-auto">
                <RefreshCw className="h-5 w-5 mr-2" /> Reset
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// app/profile/page.tsx

"use client";

import * as React from "react";
import { User, GraduationCap, Calendar as CalendarIcon } from "lucide-react";

export default function MyProfilePage() {
  const [date, setDate] = React.useState<string>("");

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-500 mt-1">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* --- Basic Details Card --- */}
          <section className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Basic Details
              </h2>
            </div>

            {/* Form Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <input
                    type="date"
                    id="dob"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  placeholder="+91 12345 67890"
                  type="tel"
                  className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
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

          {/* --- Academic Details Card --- */}
          <section className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-700">
                Academic Details
              </h2>
            </div>
            {/* Additional academic form fields would be placed here */}
          </section>
        </div>
      </div>
    </div>
  );
}

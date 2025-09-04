'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import { Users, Star, Calendar, Edit, Trash2 } from 'lucide-react';

// A type for the active section state for better type-safety
type AdminSection = 'details' | 'recommendations' | 'timetable';

// ====================================================================
// SECTION 1: USER DETAILS COMPONENT
// ====================================================================
const UserDetailsSection = () => {
  // Mock data for user details
  const users = [
    { id: 'usr_001', name: 'Aarav Sharma', email: 'aarav.sharma@example.com', joined: '2025-08-15' },
    { id: 'usr_002', name: 'Priya Patel', email: 'priya.patel@example.com', joined: '2025-08-12' },
    { id: 'usr_003', name: 'Rohan Das', email: 'rohan.das@example.com', joined: '2025-08-10' },
    { id: 'usr_004', name: 'Ananya Gupta', email: 'ananya.gupta@example.com', joined: '2025-08-05' },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white">User Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-slate-300">
          <thead className="bg-slate-700/50 text-slate-200">
            <tr>
              <th className="p-4 rounded-tl-lg">User ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Date Joined</th>
              <th className="p-4 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                <td className="p-4 font-mono text-sm">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.joined}</td>
                <td className="p-4 flex gap-4">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors"><Edit size={18} /></button>
                  <button className="text-red-400 hover:text-red-300 transition-colors"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ====================================================================
// SECTION 2: USER RECOMMENDATIONS COMPONENT
// ====================================================================
const UserRecommendationsSection = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white">Manage User Recommendations</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-slate-300 mb-1">User ID</label>
          <input type="text" id="userId" placeholder="e.g., usr_001" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="recommendationType" className="block text-sm font-medium text-slate-300 mb-1">Recommendation Type</label>
          <select id="recommendationType" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>New Scheme</option>
            <option>Job Opportunity</option>
            <option>Exam Notification</option>
            <option>Document Reminder</option>
          </select>
        </div>
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-slate-300 mb-1">Details / Message</label>
          <textarea id="details" rows={4} placeholder="Enter the recommendation details here..." className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div className="text-right">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">
            Send Recommendation
          </button>
        </div>
      </form>
    </div>
  );
};

// ====================================================================
// SECTION 3: UPDATE TIMETABLE COMPONENT
// ====================================================================
const UpdateTimetableSection = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white">Update Timetable</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="timetableType" className="block text-sm font-medium text-slate-300 mb-1">Timetable for</label>
          <select id="timetableType" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>UPSC Civil Services Exam</option>
            <option>SSC CGL Schedule</option>
            <option>PM-Kisan Last Date</option>
            <option>Aadhaar Update Camp</option>
          </select>
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-slate-300 mb-1">Date</label>
          <input type="date" id="eventDate" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="detailsFile" className="block text-sm font-medium text-slate-300 mb-1">Upload Details (PDF)</label>
          <input type="file" id="detailsFile" accept=".pdf" className="w-full text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
        </div>
        <div className="text-right">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">
            Update Timetable
          </button>
        </div>
      </form>
    </div>
  );
};

// ====================================================================
// MAIN ADMIN PAGE COMPONENT
// ====================================================================
const AdminPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('details');

  const renderSection = () => {
    switch (activeSection) {
      case 'details':
        return <UserDetailsSection />;
      case 'recommendations':
        return <UserRecommendationsSection />;
      case 'timetable':
        return <UpdateTimetableSection />;
      default:
        return <UserDetailsSection />;
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
      
      <header className="bg-slate-800/50 backdrop-blur-sm p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold tracking-wider">Admin Dashboard</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-8 grid md:grid-cols-[250px_1fr] gap-8">
        {/* --- Navigation Sidebar --- */}
        <aside>
          <nav className="flex md:flex-col gap-2">
            <button
              onClick={() => setActiveSection('details')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'details' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Users size={20} /> User Details
            </button>
            <button
              onClick={() => setActiveSection('recommendations')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'recommendations' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Star size={20} /> User Recommendations
            </button>
            <button
              onClick={() => setActiveSection('timetable')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'timetable' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Calendar size={20} /> Update Timetable
            </button>
          </nav>
        </aside>

        {/* --- Main Content Area --- */}
        <main>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
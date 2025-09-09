'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation'; 
import {
  Users, Star, Calendar, Megaphone,
  BookOpenCheck, Landmark, UserCheck, Bell, ClipboardCheck,
  LogOut, PlusCircle, Trash2
} from 'lucide-react';

// A type for the active section state
type AdminSection =
  | 'details'
  | 'recommendations'
  | 'timetable'
  | 'schemes'
  | 'exams'
  | 'taxUpdates'
  | 'personalization'
  | 'alerts'
  | 'documentChecklist';

// ==========================================================
// Reusable Generic Section Component
// ==========================================================
const GenericAdminSection = ({ title }: { title: string }) => {
  const [items, setItems] = useState<{ id: number; title: string; content: string }[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim() || !newContent.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTitle,
      content: newContent,
    };
    setItems([newItem, ...items]);
    setNewTitle("");
    setNewContent("");
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {/* Add Form */}
      <div className="bg-slate-800 p-4 rounded-lg space-y-3 shadow-md">
        <input
          type="text"
          placeholder={`Enter ${title} title`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 rounded-md bg-slate-700 text-white placeholder-gray-400"
        />
        <textarea
          placeholder={`Enter ${title} details`}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 rounded-md bg-slate-700 text-white placeholder-gray-400"
          rows={4}
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
        >
          <PlusCircle size={18} /> Add {title}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {items.length === 0 && (
          <p className="text-gray-400">No {title.toLowerCase()} added yet.</p>
        )}
        {items.map(item => (
          <div key={item.id} className="bg-slate-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-300 mt-1">{item.content}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================================
// MAIN ADMIN PAGE
// ==========================================================
const AdminPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('details');
  const router = useRouter(); 

  const renderSection = () => {
    switch (activeSection) {
      case 'details': return <GenericAdminSection title="User Details" />;
      case 'recommendations': return <GenericAdminSection title="User Recommendations" />;
      case 'timetable': return <GenericAdminSection title="Update Timetable" />;
      case 'schemes': return <GenericAdminSection title="Manage Schemes" />;
      case 'exams': return <GenericAdminSection title="Manage Exams" />;
      case 'taxUpdates': return <GenericAdminSection title="Tax Updates" />;
      case 'personalization': return <GenericAdminSection title="Personalization" />;
      case 'alerts': return <GenericAdminSection title="Alerts" />;
      case 'documentChecklist': return <GenericAdminSection title="Document Checklist" />;
      default: return <GenericAdminSection title="User Details" />;
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    router.push("/login"); 
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
      
      <header className="bg-slate-800/50 backdrop-blur-sm p-4 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wider">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-8 grid md:grid-cols-[250px_1fr] gap-8">
        {/* --- Sidebar --- */}
        <aside>
          <nav className="flex flex-col gap-2">
            <button onClick={() => setActiveSection('details')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'details' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Users size={20} /> User Details
            </button>
            <button onClick={() => setActiveSection('recommendations')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'recommendations' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Star size={20} /> User Recommendations
            </button>
            <button onClick={() => setActiveSection('timetable')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'timetable' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Calendar size={20} /> Update Timetable
            </button>
            <button onClick={() => setActiveSection('schemes')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'schemes' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Megaphone size={20} /> Manage Schemes
            </button>
            <button onClick={() => setActiveSection('exams')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'exams' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <BookOpenCheck size={20} /> Manage Exams
            </button>
            <button onClick={() => setActiveSection('taxUpdates')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'taxUpdates' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Landmark size={20} /> Tax Updates
            </button>
            <button onClick={() => setActiveSection('personalization')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'personalization' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <UserCheck size={20} /> Personalization
            </button>
            <button onClick={() => setActiveSection('alerts')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'alerts' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <Bell size={20} /> Alerts
            </button>
            <button onClick={() => setActiveSection('documentChecklist')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'documentChecklist' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}>
              <ClipboardCheck size={20} /> Document Checklist
            </button>
          </nav>
        </aside>

        {/* --- Main Content --- */}
        <main>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;

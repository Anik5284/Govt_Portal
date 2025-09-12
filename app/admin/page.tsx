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
// Reusable Generic Section Component (with updated professional styles)
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
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>

      {/* --- UPDATED: Add Form with cleaner styling --- */}
      <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
        <input
          type="text"
          placeholder={`Enter new ${title.toLowerCase()} title...`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder={`Enter details...`}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
        >
          <PlusCircle size={18} /> Add
        </button>
      </div>

      {/* --- UPDATED: List with professional card styling --- */}
      <div className="space-y-4">
        {items.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg">
             <p className="text-slate-500 dark:text-slate-400">No {title.toLowerCase()} added yet.</p>
          </div>
        )}
        {items.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">{item.content}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-slate-500 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/40 dark:hover:text-red-400 rounded-full transition-colors"
                aria-label="Delete item"
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

// Reusable Sidebar Button Component for cleaner code
const SidebarButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => {
    const baseClasses = "flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors font-medium";
    const activeClasses = "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300";
    const inactiveClasses = "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50";

    return (
        <button onClick={onClick} className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
            {children}
        </button>
    );
}

// ==========================================================
// MAIN ADMIN PAGE (with updated professional styles)
// ==========================================================
const AdminPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('details');
  const router = useRouter(); 

  const sections = [
    { id: 'details', label: 'User Details', icon: Users },
    { id: 'recommendations', label: 'Recommendations', icon: Star },
    { id: 'timetable', label: 'Update Timetable', icon: Calendar },
    { id: 'schemes', label: 'Manage Schemes', icon: Megaphone },
    { id: 'exams', label: 'Manage Exams', icon: BookOpenCheck },
    { id: 'taxUpdates', label: 'Tax Updates', icon: Landmark },
    { id: 'personalization', label: 'Personalization', icon: UserCheck },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'documentChecklist', label: 'Document Checklist', icon: ClipboardCheck },
  ];

  const renderSection = () => {
    const currentSection = sections.find(s => s.id === activeSection) || sections[0];
    return <GenericAdminSection title={currentSection.label} />;
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    router.push("/login"); 
  };

  return (
    // --- UPDATED: Page background for light/dark modes ---
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200 font-sans">
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
      
      {/* --- UPDATED: Header with cleaner style --- */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg p-4 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-100 hover:bg-red-100 dark:bg-slate-800 dark:hover:bg-red-900/40 text-slate-700 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-8 grid md:grid-cols-[280px_1fr] gap-8">
        {/* --- UPDATED: Sidebar using the new reusable component --- */}
        <aside>
          <nav className="flex flex-col gap-2">
            {sections.map(section => (
                <SidebarButton 
                    key={section.id}
                    active={activeSection === section.id}
                    onClick={() => setActiveSection(section.id as AdminSection)}
                >
                    <section.icon size={20} /> {section.label}
                </SidebarButton>
            ))}
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
'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import {
  Users, Star, Calendar, Edit, Trash2, Megaphone,
  BookOpenCheck, Landmark, UserCheck, Bell, ClipboardCheck
} from 'lucide-react';

// A type for the active section state for better type-safety
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
// SECTION 4: MANAGE SCHEMES COMPONENT
// ====================================================================
const SchemesSection = () => {
    const schemes = [
        { id: 'sch_001', name: 'PM Kisan Samman Nidhi', category: 'Agriculture' },
        { id: 'sch_002', name: 'Ayushman Bharat', category: 'Healthcare' },
        { id: 'sch_003', name: 'Skill India Mission', category: 'Employment' },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Add New Scheme</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="schemeName" className="block text-sm font-medium text-slate-300 mb-1">Scheme Name</label>
                        <input type="text" id="schemeName" placeholder="e.g., Pradhan Mantri Awas Yojana" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="schemeCategory" className="block text-sm font-medium text-slate-300 mb-1">Category</label>
                        <input type="text" id="schemeCategory" placeholder="e.g., Housing" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                     <div>
                        <label htmlFor="schemeDetails" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                        <textarea id="schemeDetails" rows={4} placeholder="Describe the scheme and its benefits..." className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Add Scheme</button>
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                 <h2 className="text-2xl font-bold mb-6 text-white">Existing Schemes</h2>
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Scheme ID</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schemes.map(scheme => (
                            <tr key={scheme.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4 font-mono text-sm">{scheme.id}</td>
                                <td className="p-4">{scheme.name}</td>
                                <td className="p-4">{scheme.category}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-blue-400 hover:text-blue-300"><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// SECTION 5: MANAGE EXAMS COMPONENT
// ====================================================================
const ExamsSection = () => {
    const exams = [
        { id: 'exm_001', name: 'UPSC Civil Services 2026', deadline: '2026-02-15', examDate: '2026-06-05' },
        { id: 'exm_002', name: 'SSC CGL 2025', deadline: '2025-10-20', examDate: '2025-12-12' },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Add New Exam</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="examName" className="block text-sm font-medium text-slate-300 mb-1">Exam Name</label>
                        <input type="text" id="examName" placeholder="e.g., IBPS PO 2025" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="appDeadline" className="block text-sm font-medium text-slate-300 mb-1">Application Deadline</label>
                            <input type="date" id="appDeadline" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="examDate" className="block text-sm font-medium text-slate-300 mb-1">Exam Date</label>
                            <input type="date" id="examDate" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Add Exam</button>
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Upcoming Exams</h2>
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Exam Name</th>
                            <th className="p-4">Application Deadline</th>
                            <th className="p-4">Exam Date</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map(exam => (
                            <tr key={exam.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4">{exam.name}</td>
                                <td className="p-4">{exam.deadline}</td>
                                <td className="p-4">{exam.examDate}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-blue-400 hover:text-blue-300"><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// SECTION 6: MANAGE TAX UPDATES COMPONENT
// ====================================================================
const TaxUpdatesSection = () => {
    const updates = [
        { id: 'tax_001', title: 'New GST Slabs for Electronics', effectiveDate: '2025-10-01' },
        { id: 'tax_002', title: 'Income Tax Return Filing Deadline Extended', effectiveDate: '2025-08-31' },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Add New Tax Update</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="updateTitle" className="block text-sm font-medium text-slate-300 mb-1">Update Title</label>
                        <input type="text" id="updateTitle" placeholder="A brief title for the update" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                     <div>
                        <label htmlFor="updateDetails" className="block text-sm font-medium text-slate-300 mb-1">Details</label>
                        <textarea id="updateDetails" rows={4} placeholder="Full details of the tax update..." className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                     <div>
                        <label htmlFor="effectiveDate" className="block text-sm font-medium text-slate-300 mb-1">Effective Date</label>
                        <input type="date" id="effectiveDate" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Publish Update</button>
                    </div>
                </form>
            </div>
             <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Recent Tax Updates</h2>
                 <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Title</th>
                            <th className="p-4">Effective Date</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updates.map(update => (
                            <tr key={update.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4">{update.title}</td>
                                <td className="p-4">{update.effectiveDate}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-blue-400 hover:text-blue-300"><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// SECTION 7: PERSONALIZATION COMPONENT (New)
// ====================================================================
const PersonalizationSection = () => {
    const rules = [
        { id: 'per_001', name: 'Farmers in West Bengal', content: 'PM Fasal Bima Yojana' },
        { id: 'per_002', name: 'Students preparing for UPSC', content: 'UPSC Civil Services Exam Timetable' },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Create Personalization Rule</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="ruleName" className="block text-sm font-medium text-slate-300 mb-1">Rule Name</label>
                        <input type="text" id="ruleName" placeholder="e.g., Senior Citizens - Health Schemes" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="ruleContent" className="block text-sm font-medium text-slate-300 mb-1">Tailored Content</label>
                        <textarea id="ruleContent" rows={3} placeholder="Content to show for this profile, e.g., Ayushman Bharat" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Save Rule</button>
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Active Rules</h2>
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Rule Name</th>
                            <th className="p-4">Tailored Content</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rules.map(rule => (
                            <tr key={rule.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4">{rule.name}</td>
                                <td className="p-4">{rule.content}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-blue-400 hover:text-blue-300"><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// SECTION 8: ALERTS COMPONENT (New)
// ====================================================================
const AlertsSection = () => {
    const alerts = [
        { id: 'alrt_001', title: 'PAN-Aadhaar Linking Deadline', sent: '2025-09-01' },
        { id: 'alrt_002', title: 'New Vaccination Drive', sent: '2025-08-25' },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Send an Alert</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="alertTitle" className="block text-sm font-medium text-slate-300 mb-1">Alert Title</label>
                        <input type="text" id="alertTitle" placeholder="Brief title for the notification" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="alertMessage" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                        <textarea id="alertMessage" rows={4} placeholder="The full alert message to be sent to users..." className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Send Alert Now</button>
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Sent Alerts</h2>
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Title</th>
                            <th className="p-4">Date Sent</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map(alert => (
                            <tr key={alert.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4">{alert.title}</td>
                                <td className="p-4">{alert.sent}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// SECTION 9: DOCUMENT CHECKLIST COMPONENT (New)
// ====================================================================
const DocumentChecklistSection = () => {
    const checklists = [
        { id: 'doc_001', name: 'Passport Application', count: 5 },
        { id: 'doc_002', name: 'Aadhaar Card Update', count: 2 },
    ];
    return (
        <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Create Document Checklist</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="serviceName" className="block text-sm font-medium text-slate-300 mb-1">Service / Scheme Name</label>
                        <input type="text" id="serviceName" placeholder="e.g., Driving License Application" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="requiredDocs" className="block text-sm font-medium text-slate-300 mb-1">Required Documents</label>
                        <textarea id="requiredDocs" rows={5} placeholder="List each document on a new line..." className="w-full bg-slate-700 border border-slate-600 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Save Checklist</button>
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-white">Existing Checklists</h2>
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700/50 text-slate-200">
                        <tr>
                            <th className="p-4 rounded-tl-lg">Service / Scheme Name</th>
                            <th className="p-4">Documents Required</th>
                            <th className="p-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checklists.map(item => (
                            <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-700/40">
                                <td className="p-4">{item.name}</td>
                                <td className="p-4">{item.count}</td>
                                <td className="p-4 flex gap-4">
                                    <button className="text-blue-400 hover:text-blue-300"><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
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
// MAIN ADMIN PAGE COMPONENT
// ====================================================================
const AdminPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('details');

  const renderSection = () => {
    switch (activeSection) {
      case 'details': return <UserDetailsSection />;
      case 'recommendations': return <UserRecommendationsSection />;
      case 'timetable': return <UpdateTimetableSection />;
      case 'schemes': return <SchemesSection />;
      case 'exams': return <ExamsSection />;
      case 'taxUpdates': return <TaxUpdatesSection />;
      case 'personalization': return <PersonalizationSection />;
      case 'alerts': return <AlertsSection />;
      case 'documentChecklist': return <DocumentChecklistSection />;
      default: return <UserDetailsSection />;
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
             <button
              onClick={() => setActiveSection('schemes')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'schemes' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Megaphone size={20} /> Manage Schemes
            </button>
             <button
              onClick={() => setActiveSection('exams')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'exams' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <BookOpenCheck size={20} /> Manage Exams
            </button>
             <button
              onClick={() => setActiveSection('taxUpdates')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'taxUpdates' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Landmark size={20} /> Tax Updates
            </button>
             <button
              onClick={() => setActiveSection('personalization')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'personalization' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <UserCheck size={20} /> Personalization
            </button>
             <button
              onClick={() => setActiveSection('alerts')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'alerts' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <Bell size={20} /> Alerts
            </button>
             <button
              onClick={() => setActiveSection('documentChecklist')}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left transition-colors ${activeSection === 'documentChecklist' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700/50'}`}
            >
              <ClipboardCheck size={20} /> Document Checklist
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
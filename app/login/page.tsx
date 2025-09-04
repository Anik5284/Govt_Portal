// app/page.tsx  (Corrected Code)

'use client';

import { useState } from 'react';
// 1. Import the correct LoginModal component
import LoginModal from '../components/loginModal';

export default function HomePage() {
  // 2. Add state to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-[#0a192f] p-4">
      
      <div className="text-center">
        {/* Red Zone Warning */}
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Warning: You are entering a secure area. Unauthorized access is prohibited.
        </div>
        {/* 3. Add a button to open the modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Login / Sign Up
        </button>
      </div>

      {/* 4. Render the modal and give it the state it needs to work */}
      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
}
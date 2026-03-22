'use client';
import { useState } from 'react';

export default function JSFundamentals() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">JS Fundamentals</span>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#variables" className="hover:text-yellow-400 transition-colors">Variables</a>
            <a href="#functions" className="hover:text-yellow-400 transition-colors">Functions</a>
            <a href="#arrays" className="hover:text-yellow-400 transition-colors">Arrays</a>
            <a href="#async" className="hover:text-yellow-400 transition-colors">Async</a>
            <a href="#dom" className="hover:text-yellow-400 transition-colors">DOM</a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden max-w-4xl mx-auto flex flex-col gap-4 pt-4 mt-4 border-t border-gray-700 text-sm font-medium">
            <a href="#variables" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Variables</a>
            <a href="#functions" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Functions</a>
            <a href="#arrays" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Arrays</a>
            <a href="#async" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Async</a>
            <a href="#dom" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>DOM</a>
          </div>
        )}
      </nav>

      {/* Page content — we'll fill these in as we go */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-32">

        <section id="variables" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Variables & Types</h2>
          <p className="text-gray-500">Coming soon...</p>
        </section>

        <section id="functions" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Functions</h2>
          <p className="text-gray-500">Coming soon...</p>
        </section>

        <section id="arrays" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Array Methods</h2>
          <p className="text-gray-500">Coming soon...</p>
        </section>

        <section id="async" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Async & Await</h2>
          <p className="text-gray-500">Coming soon...</p>
        </section>

        <section id="dom" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The DOM</h2>
          <p className="text-gray-500">Coming soon...</p>
        </section>

      </main>
    </div>
  );
}

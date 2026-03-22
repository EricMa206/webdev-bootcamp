'use client';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-8">

      {/* Section 1 — Fluid Container */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Fluid Container</h2>
        <div className="w-full max-w-4xl mx-auto bg-blue-100 p-8 rounded-xl text-center text-blue-800 font-medium">
          I'm fluid up to 896px, then I stop growing and stay centered.
          Try resizing the window.
        </div>
      </section>

      {/* Section 2 — Responsive Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Responsive Grid</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'].map(card => (
            <div key={card} className="bg-white rounded-xl shadow-md p-6 text-center font-medium text-gray-700">
              {card}
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-4">
        {['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'].map(card => (
            <div key={card} className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white rounded-xl shadow-md p-6 text-center font-medium text-gray-700">
            {card}
            </div>
        ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">1 col on mobile → 2 on tablet → 3 on desktop</p>
      </section>

      {/* Section 3 — Flexbox Wrap */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Flexbox Wrap</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Item A', 'Item B', 'Item C', 'Item D', 'Item E'].map(item => (
            <div key={item} className="flex-1 basis-48 bg-purple-100 text-purple-800 rounded-lg p-4 text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Items wrap naturally when they run out of space — no breakpoints needed</p>
      </section>

      {/* Section 4 — Sidebar Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Sidebar Layout</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <main className="flex-1 bg-green-100 rounded-xl p-8 text-green-800 font-medium text-center">
            Main Content — takes all space on mobile, shares on desktop
          </main>
          <aside className="w-full lg:w-64 bg-green-200 rounded-xl p-8 text-green-900 font-medium text-center">
            Sidebar — stacks below on mobile
          </aside>
        </div>
      </section>

      {/* Section 5 — Responsive Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Responsive Typography</h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            I scale with screen size
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            This paragraph also adjusts — small on mobile, comfortable on desktop.
          </p>
        </div>
      </section>

      {/* Section 6 — Navbar Collapse + JS menu intro*/}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Navbar Collapse</h2>
        <nav className="bg-gray-800 text-white rounded-xl px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">MyApp</span>

            {/* Desktop links */}
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-300 transition-colors">About</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile dropdown — conditionally rendered */}
          {isOpen && (
            <div className="md:hidden flex flex-col gap-4 pt-4 border-t border-gray-600 mt-4 text-sm">
              <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-300 transition-colors">About</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
            </div>
          )}
        </nav>
        <p className="text-sm text-gray-500 mt-2">Shrink past 768px and tap the hamburger</p>
      </section>

    </main>
  );
}
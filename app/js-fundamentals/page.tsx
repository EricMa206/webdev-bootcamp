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
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Variables & Types</h2>

        {/* var vs let vs const */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">var vs let vs const</h3>
            <p className="text-gray-600 mb-4">
            JavaScript has three ways to declare variables. In modern JS you should only use two of them.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm overflow-x-auto">
        {`// ❌ var — old, avoid it. Has confusing scoping rules
        var name = 'Lem';

        // ✅ let — use when the value will change
        let score = 0;
        score = 10; // reassignment is fine

        // ✅ const — use when the value won't change
        const API_URL = 'https://api.example.com';
        // API_URL = 'something else'; // ❌ TypeError`}
            </pre>
            <p className="text-gray-500 text-sm mt-4">
            Default to <code className="bg-gray-100 px-1 rounded">const</code>. Only reach for <code className="bg-gray-100 px-1 rounded">let</code> when you know the value needs to change.
            </p>
        </div>

        {/* Primitive Types */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Primitive Types</h3>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm overflow-x-auto">
        {`const name = 'Lem';           // string
        const age = 30;                // number (no int/float distinction)
        const isLoggedIn = true;       // boolean
        const score = null;            // null — intentional absence of value
        let username;                  // undefined — declared but not assigned
        const id = Symbol('id');       // symbol — unique identifier (advanced)`}
            </pre>
        </div>

        {/* Objects */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Objects</h3>
            <p className="text-gray-600 mb-4">
            Objects are key-value pairs — the most important data structure in JavaScript. JSON is based on them.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm overflow-x-auto">
        {`const user = {
        name: 'Lem',
        age: 30,
        isLoggedIn: true,
        };

        // Access values
        console.log(user.name);         // 'Lem' — dot notation
        console.log(user['age']);       // 30 — bracket notation

        // Add or update
        user.email = 'Lem@email.com';  // adds new key
        user.age = 31;                  // updates existing key

        // Destructuring — extract values into variables
        const { name, age } = user;
        console.log(name);              // 'Lem'`}
            </pre>
        </div>

        {/* Arrays */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Arrays</h3>
            <p className="text-gray-600 mb-4">
            Ordered lists of values. Can hold any type, including objects.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm overflow-x-auto">
        {`const colors = ['red', 'green', 'blue'];

        // Access by index (zero-based)
        console.log(colors[0]);         // 'red'
        console.log(colors.length);     // 3

        // Add and remove
        colors.push('yellow');          // add to end
        colors.pop();                   // remove from end

        // Destructuring
        const [first, second] = colors;
        console.log(first);             // 'red'

        // Array of objects — very common in real apps
        const users = [
        { id: 1, name: 'Lem' },
        { id: 2, name: 'Ana' },
        ];`}
            </pre>
        </div>

        {/* Type Coercion — the gotcha */}
        <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4">⚠️ The Big Gotcha — Type Coercion</h3>
            <p className="text-gray-600 mb-4">
            JavaScript will silently convert types to make comparisons work. This causes bugs.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-6 text-sm overflow-x-auto">
        {`// == does type coercion — avoid it
        0 == false      // true  ← surprising
        '' == false     // true  ← surprising
        null == undefined // true ← surprising

        // === checks value AND type — always use this
        0 === false     // false ✓
        '' === false    // false ✓
        null === undefined // false ✓

        // typeof — check what type something is
        typeof 'hello'  // 'string'
        typeof 42       // 'number'
        typeof true     // 'boolean'
        typeof {}       // 'object'
        typeof []       // 'object' ← arrays are objects in JS
        typeof null     // 'object' ← famous JS bug, null is NOT an object`}
            </pre>
            <p className="text-gray-500 text-sm mt-4">
            Rule: always use <code className="bg-gray-100 px-1 rounded">===</code> for comparisons, never <code className="bg-gray-100 px-1 rounded">==</code>.
            </p>
        </div>

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

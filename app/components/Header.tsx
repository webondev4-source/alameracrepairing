'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/Images/logo.jpg" 
              alt="AL Amer AC Repairing Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AL Amer</h1>
              <p className="text-xs text-gray-600">AC Repairing</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>
          <a href="tel:+971564512008" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}


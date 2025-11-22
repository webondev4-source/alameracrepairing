'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Images/logo.jpg" 
                alt="AL Amer AC Repairing Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">AL Amer</h3>
                <p className="text-sm text-gray-400">AC Repairing</p>
              </div>
            </div>
            <p className="text-gray-400">Your trusted partner for all AC repair and maintenance needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AC Repair</li>
              <li>AC Installation</li>
              <li>AC Maintenance</li>
              <li>Air Cooler Repair</li>
              <li>Gas Refilling</li>
              <li>Emergency Service</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+971564512008" className="hover:text-white transition">056 451 2008</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+971559191235" className="hover:text-white transition">055 919 1235</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:ibrarasim@alameracrepairing.com" className="hover:text-white transition">ibrarasim@alameracrepairing.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rifa Dibba Al Fujairah, UAE</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AL Amer AC Repairing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


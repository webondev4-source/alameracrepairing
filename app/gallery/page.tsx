'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Image as ImageIcon, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    '/Images/worker-works-air-conditioner.jpg',
    '/Images/coworkers-servicing-hvac-system.jpg',
    '/Images/medium-shot-people-wearing-safety-helmets.jpg',
    '/Images/men-working-with-equipment-full-shot.jpg',
    '/Images/checking-conditioner.jpg',
    '/Images/hvac-repairman-adjusts-pressure-levels.jpg',
    '/Images/close-up-heat-pump-outside-home.jpg',
    '/Images/team-replacing-old-air-conditioner.jpg',
    '/Images/specialist-phone-with-home-owner.jpg',
    '/Images/hvac-engineer-dusting-blower-fan.jpg',
    '/Images/image-1.jpeg',
    '/Images/image-2.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              See Our Professional AC Repair & Installation Projects
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-4 left-4 text-white">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


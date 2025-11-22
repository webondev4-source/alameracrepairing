'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch for fast, reliable service in Fujairah, UAE
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Phone, title: 'Call Us', info: '056 451 2008', link: 'tel:+971564512008', secondary: '055 919 1235', secondaryLink: 'tel:+971559191235' },
                { icon: Mail, title: 'Email Us', info: 'ibrarasim@alameracrepairing.com', link: 'mailto:ibrarasim@alameracrepairing.com' },
                { icon: MapPin, title: 'Location', info: 'Rifa Dibba Al Fujairah', link: '#', secondary: 'UAE' },
                { icon: Clock, title: 'Business Hours', info: '24/7 Emergency Service', link: '#', secondary: 'Always Available' },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center group"
                >
                  <contact.icon className="h-10 w-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-700 font-semibold">{contact.info}</p>
                  {contact.secondary && (
                    <p className="text-gray-600 text-sm mt-1">{contact.secondary}</p>
                  )}
                </a>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="050 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ac-repair">AC Repair</option>
                      <option value="ac-installation">AC Installation</option>
                      <option value="ac-maintenance">AC Maintenance</option>
                      <option value="air-cooler-repair">Air Cooler Repair</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="gas-refilling">Gas Refilling</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about your AC problem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Location</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We&apos;re located in Rifa Dibba Al Fujairah, UAE. Our team is ready to serve you with 
                    professional AC repair and installation services.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">Rifa Dibba Al Fujairah, UAE</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone Numbers</p>
                        <a href="tel:+971564512008" className="text-blue-600 hover:text-blue-700">056 451 2008</a>
                        <span className="mx-2">|</span>
                        <a href="tel:+971559191235" className="text-blue-600 hover:text-blue-700">055 919 1235</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:ibrarasim@alameracrepairing.com" className="text-blue-600 hover:text-blue-700">
                          ibrarasim@alameracrepairing.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/Images/image-1.jpeg"
                    alt="Service location"
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Snowflake, Wind, Droplets, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: 'AC Repair',
      desc: 'Fast and efficient repair services for all AC brands and models. We fix everything from split units to central air systems.',
      image: '/Images/checking-conditioner.jpg',
      features: [
        'Diagnosis of all AC problems',
        'Repair of all major brands',
        'Same-day service available',
        'Warranty on all repairs',
      ],
    },
    {
      icon: Snowflake,
      title: 'AC Installation',
      desc: 'Professional installation with warranty and quality guarantee. Expert setup for optimal cooling performance.',
      image: '/Images/team-replacing-old-air-conditioner.jpg',
      features: [
        'Expert installation service',
        'All AC types and sizes',
        'Proper sizing and placement',
        'Installation warranty included',
      ],
    },
    {
      icon: Wind,
      title: 'AC Maintenance',
      desc: 'Regular maintenance to keep your AC running at peak performance. Scheduled service plans available.',
      image: '/Images/hvac-engineer-dusting-blower-fan.jpg',
      features: [
        'Regular cleaning and servicing',
        'Filter replacement',
        'Performance optimization',
        'Preventive maintenance plans',
      ],
    },
    {
      icon: Droplets,
      title: 'Air Cooler Repair',
      desc: 'Expert repair and servicing for all types of air coolers. Quick diagnosis and efficient solutions.',
      image: '/Images/hvac-repairman-adjusts-pressure-levels.jpg',
      features: [
        'All air cooler brands',
        'Quick diagnosis',
        'Efficient repair service',
        'Parts replacement available',
      ],
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      desc: '24/7 emergency AC repair service. We respond quickly to urgent cooling problems in Fujairah.',
      image: '/Images/specialist-phone-with-home-owner.jpg',
      features: [
        '24/7 availability',
        'Fast response time',
        'Emergency repairs',
        'Same-day service',
      ],
    },
    {
      icon: Shield,
      title: 'Gas Refilling',
      desc: 'Professional AC gas refilling service. We use quality refrigerant and ensure proper charging.',
      image: '/Images/close-up-heat-pump-outside-home.jpg',
      features: [
        'Quality refrigerant',
        'Proper gas charging',
        'Leak detection',
        'Performance testing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional AC & Air Cooler Solutions for Every Need in Fujairah, UAE
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <service.icon className="absolute bottom-4 left-4 h-10 w-10 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center">
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help Choosing a Service?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us for a free consultation and quote</p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


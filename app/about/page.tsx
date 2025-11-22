'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Award, Users, Shield, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AL Amer AC Repairing</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your Trusted AC Repair Partner in Fujairah, UAE
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-lg mb-6 text-gray-700">
                  Based in Rifa Dibba Al Fujairah, UAE, AL Amer AC Repairing has been serving the community with 
                  professional air conditioning and air cooler services for over 15 years. We specialize in repair, 
                  installation, maintenance, and emergency services for all types of cooling systems.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our commitment to excellence and customer satisfaction has made us one of the most trusted AC repair 
                  services in the Fujairah region. We combine years of experience with modern techniques and quality 
                  parts to deliver reliable solutions for all your cooling needs.
                </p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Serving Rifa Dibba Al Fujairah & Surrounding Areas</span>
                </div>
              </div>
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="/Images/men-working-with-equipment-full-shot.jpg"
                alt="Our team at work"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose AL Amer?</h2>
              <p className="text-xl text-gray-600">What Sets Us Apart</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: '15+ Years Experience',
                  desc: 'Over a decade and a half of serving the Fujairah community with excellence.',
                },
                {
                  icon: Users,
                  title: '5000+ Happy Customers',
                  desc: 'Thousands of satisfied customers trust us for their AC needs.',
                },
                {
                  icon: Shield,
                  title: '100% Satisfaction',
                  desc: 'We guarantee customer satisfaction on all our services.',
                },
                {
                  icon: Clock,
                  title: '24/7 Support',
                  desc: 'Round-the-clock emergency service when you need us most.',
                },
                {
                  icon: Star,
                  title: 'Certified Technicians',
                  desc: 'All our technicians are certified and highly experienced.',
                },
                {
                  icon: MapPin,
                  title: 'Local Expertise',
                  desc: 'Deep knowledge of local climate and AC requirements in UAE.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-700">
                  We never compromise on quality. Every service we provide uses the best parts and follows 
                  industry best practices to ensure long-lasting results.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-700">
                  Your satisfaction is our priority. We listen to your needs, provide transparent pricing, 
                  and ensure you&apos;re completely happy with our work.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
                <p className="text-gray-700">
                  You can count on us to be there when you need us. We&apos;re punctual, professional, and 
                  committed to solving your AC problems efficiently.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-700">
                  No hidden fees, no surprises. We provide clear quotes upfront and explain everything 
                  we&apos;re doing so you can make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us today for professional AC repair and maintenance</p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition text-lg font-semibold">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


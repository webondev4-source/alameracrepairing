'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChevronLeft, ChevronRight, Star, Award, Users, Shield, Clock, HelpCircle, CheckCircle, MapPin } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/Images/worker-works-air-conditioner.jpg',
      title: 'Professional AC Repair Services',
      subtitle: 'Expert Repair for All AC Units & Air Coolers',
    },
    {
      image: '/Images/team-replacing-old-air-conditioner.jpg',
      title: 'Expert Installation & Maintenance',
      subtitle: '24/7 Emergency Service in Fujairah, UAE',
    },
    {
      image: '/Images/coworkers-servicing-hvac-system.jpg',
      title: 'Certified Technicians You Can Trust',
      subtitle: 'Fast, Reliable, Affordable Solutions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="home" className="relative h-screen pt-20">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold">
                        Book Service Now
                      </Link>
                      <Link href="/services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition text-lg font-semibold border-2 border-white">
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '15+ Years', desc: 'Experience' },
              { icon: Users, title: '5000+', desc: 'Happy Customers' },
              { icon: Shield, title: '100%', desc: 'Satisfaction' },
              { icon: Clock, title: '24/7', desc: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional AC & Air Cooler Solutions for Every Need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AC Repair', desc: 'Fast and efficient repair services for all AC brands and models.', image: '/Images/checking-conditioner.jpg' },
              { title: 'AC Installation', desc: 'Professional installation with warranty and quality guarantee.', image: '/Images/team-replacing-old-air-conditioner.jpg' },
              { title: 'AC Maintenance', desc: 'Regular maintenance to keep your AC running at peak performance.', image: '/Images/hvac-engineer-dusting-blower-fan.jpg' },
            ].map((service, index) => (
              <Link key={index} href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by Thousands of Happy Customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Al Mansoori',
                rating: 5,
                text: 'Excellent service! They fixed my AC quickly and professionally. Highly recommended!',
                location: 'Fujairah',
              },
              {
                name: 'Fatima Hassan',
                rating: 5,
                text: 'Very reliable team. Came on time and did a great job installing my new AC unit.',
                location: 'Dibba',
              },
              {
                name: 'Mohammed Ali',
                rating: 5,
                text: 'Best AC repair service in the area. Fair prices and quality work. Will call again!',
                location: 'Rifa',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything You Need to Know</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you respond to emergency AC repairs?',
                a: 'We offer 24/7 emergency service and typically respond within 1-2 hours in the Fujairah area.',
              },
              {
                q: 'Do you service all AC brands?',
                a: 'Yes, we service and repair all major AC brands including Daikin, LG, Samsung, Carrier, and more.',
              },
              {
                q: 'Do you provide warranty on repairs?',
                a: 'Yes, all our repairs come with a warranty. We stand behind our work and use quality parts.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We primarily serve Rifa Dibba Al Fujairah and surrounding areas in the UAE.',
              },
              {
                q: 'How much does AC repair cost?',
                a: 'Costs vary depending on the issue. We provide free estimates and transparent pricing before any work begins.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our Simple 4-Step Process</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Contact Us',
                desc: 'Call or message us with your AC problem. We respond within minutes.',
                image: '/Images/specialist-phone-with-home-owner.jpg',
              },
              {
                step: '02',
                title: 'Schedule Visit',
                desc: 'We schedule a convenient time for our expert technician to visit.',
                image: '/Images/image-2.jpg',
              },
              {
                step: '03',
                title: 'Diagnosis & Repair',
                desc: 'Our certified technician diagnoses and fixes the issue professionally.',
                image: '/Images/checking-conditioner.jpg',
              },
              {
                step: '04',
                title: 'Quality Check',
                desc: 'We test everything to ensure your AC is working perfectly.',
                image: '/Images/hvac-repairman-adjusts-pressure-levels.jpg',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Meet the Professionals Behind Your Comfort</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/Images/medium-shot-people-wearing-safety-helmets.jpg',
                title: 'Certified Technicians',
                desc: 'Our team consists of certified HVAC professionals with years of experience in AC repair and installation.',
              },
              {
                image: '/Images/coworkers-servicing-hvac-system.jpg',
                title: 'Professional Service',
                desc: 'We follow industry best practices and use only quality parts and equipment for all our services.',
              },
              {
                image: '/Images/men-working-with-equipment-full-shot.jpg',
                title: 'Safety First',
                desc: 'Safety is our priority. All our technicians are trained in safety protocols and use proper protective equipment.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/Images/worker-works-air-conditioner.jpg"
                alt="Professional AC service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Professional AC Service?</h2>
              <div className="space-y-4 mb-6">
                {[
                  'Extended AC Lifespan - Regular maintenance extends your AC unit\'s life',
                  'Energy Efficiency - Properly maintained ACs consume less electricity',
                  'Better Air Quality - Clean filters and coils improve indoor air quality',
                  'Cost Savings - Prevent major breakdowns with regular maintenance',
                  'Peace of Mind - Professional service ensures reliable cooling',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                Schedule Service Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-blue-100">We Serve All Areas in Fujairah, UAE</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Rifa Dibba',
              'Dibba Al Fujairah',
              'Fujairah City',
              'Kalba',
              'Khor Fakkan',
              'Dibba Al Hisn',
              'Masafi',
              'All Fujairah Areas',
            ].map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <p className="font-semibold text-lg">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for professional AC repair and maintenance services</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold">
            Contact Us Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}


import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Wind, Snowflake, Wrench, Shield, ChevronLeft, ChevronRight, Star, Award, Users } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/7005094/pexels-photo-7005094.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Professional AC Repair Services',
      subtitle: 'Keeping Your Space Cool & Comfortable',
    },
    {
      image: 'https://images.pexels.com/photos/8486030/pexels-photo-8486030.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Expert Installation & Maintenance',
      subtitle: '24/7 Emergency Service Available',
    },
    {
      image: 'https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wind className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AL Amer</h1>
                <p className="text-xs text-gray-600">AC Repairing</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>
            <a href="tel:+1234567890" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

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
                      <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold">
                        Book Service Now
                      </a>
                      <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition text-lg font-semibold border-2 border-white">
                        Our Services
                      </a>
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

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional AC Solutions for Every Need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'AC Repair',
                desc: 'Fast and efficient repair services for all AC brands and models',
                image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Snowflake,
                title: 'Installation',
                desc: 'Professional installation with warranty and quality guarantee',
                image: 'https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Wind,
                title: 'Maintenance',
                desc: 'Regular maintenance to keep your AC running at peak performance',
                image: 'https://images.pexels.com/photos/4792485/pexels-photo-4792485.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
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
                  <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AL Amer?</h2>
              <div className="space-y-6">
                {[
                  'Certified & Experienced Technicians',
                  'Competitive Pricing & Transparent Quotes',
                  'Same-Day Emergency Service',
                  'Quality Parts & Equipment',
                  'Customer Satisfaction Guarantee',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technician at work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for fast, reliable service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Call Us', info: '+1 (234) 567-890', link: 'tel:+1234567890' },
              { icon: Mail, title: 'Email Us', info: 'info@alamerac.com', link: 'mailto:info@alamerac.com' },
              { icon: MapPin, title: 'Visit Us', info: '123 Service Street, City', link: '#' },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center group"
              >
                <contact.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wind className="h-8 w-8 text-blue-400" />
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
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AC Repair</li>
                <li>Installation</li>
                <li>Maintenance</li>
                <li>Emergency Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mon - Fri: 8AM - 8PM</li>
                <li>Saturday: 9AM - 6PM</li>
                <li>Sunday: 10AM - 4PM</li>
                <li className="text-blue-400 font-semibold">24/7 Emergency</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AL Amer AC Repairing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

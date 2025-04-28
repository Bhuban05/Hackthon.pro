import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const features = [
    {
      title: 'Currency Loading',
      category: 'Finance',
      description: 'Easily load your travel card with foreign currencies in real-time.',
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 1.343-3 3h2l-3 4-3-4h2c0-2.761 2.239-5 5-5s5 2.239 5 5c0 1.657-1.343 3-3 3h-1v-2h1c.552 0 1-.448 1-1s-.448-1-1-1z" />
        </svg>
      ),
    },
    {
      title: 'Local Transactions',
      category: 'Convenience',
      description: 'Make seamless transactions in local currencies without extra fees.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 10h1l3 9h11l3-9h1M9 21h6M10 5h4M12 3v2" />
        </svg>
      ),
    },
    {
      title: 'Multi-Currency Support',
      category: 'Flexibility',
      description: 'Manage and switch between multiple currencies effortlessly in one app.',
      icon: (
        <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2 .9 2 2h2c0-2.21-1.79-4-4-4V4l-4 4 4 4V8zM12 16c-1.1 0-2-.9-2-2H8c0 2.21 1.79 4 4 4v4l4-4-4-4v4z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: 'Bibek Dhungana',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      rating: '★★★★★',
      feedback: 'The app simplifies currency conversion, making my travels stress-free. Highly recommend!',
    },
    {
      name: 'Himal Subedi',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: '★★★★★',
      feedback: 'Fast and accurate currency rates every time. A must-have for globetrotters!',
    },
    {
      name: 'Bhuban Bhandari',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      rating: '★★★★★',
      feedback: 'A lifesaver for navigating local currencies abroad. Intuitive and reliable!',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setFade(true);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Simplify your <span className="text-blue-600">Currency Management</span>
          </h1>
          <p className="text-lg text-gray-600">
            Load, manage and use your currencies anywhere, anytime with zero hassle. Travel smarter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 md:mt-0">
          <img
            src="https://illustrations.popsy.co/white/currency-conversion.svg"
            alt="Currency Illustration"
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{feature.category}</p>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            Explore Features
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-blue-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-10">Hear from Our Happy Users</h2>
          <div className="flex justify-center">
            <div className={`bg-white p-8 rounded-lg shadow-lg max-w-md transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <div className="text-yellow-400">{testimonials[currentTestimonial].rating}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].feedback}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === idx ? 'bg-indigo-600' : 'bg-gray-400'} transition`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import viber from "../images/viber.jpg";
import video from '../images/video.gif'
export const Navbar = () => {

     const navigate = useNavigate();
    
    const handleClick = () => {
      navigate('/login');
    };
    const handleClick1 = () => {
      navigate('/sign-up');
    };



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

    <>
      <section>


        <nav className="bg-blue-600 dark:border-x-gray-700 w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          </div>
        </nav>

      </section>


<nav className="bg-white border-gray-200 dark:bg-gray-100 dark:border-x-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={viber} class="h-15" alt="wallet Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-400">Global Wallet</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul >
        
        <li>
            <button  className="bg-blue-600   w-25 py-3  rounded-2xl  cursor-pointer border-gray-500 hover:bg-blue-700  "  onClick={handleClick} >Login</button>
            <button className=" w-25 py-3    mx-2  bg-gray-100  border-black hover:bg-blue-600  cursor-pointer  rounded-2xl"   onClick={handleClick1}>Sign up</button>
           
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-00 dark:divide-gray-00">
               <div>
              
               </div>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


      <div className="relative overflow-hidden group">
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-opacity-80 bg-gray-800 text-white">
          {/* Background floating images */}
          {<div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={video}
              alt="Banking Background"
              className="absolute inset-0 w-full h-full object-cover opacity-80 animate-float-slow brightness-50"
            />


          </div>
          }


          {/* Content Section */}
          <div className="relative z-10 max-w-3xl px-4 py-8 bg-opacity-90 content">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-indigo-500 text-shadow-lg">
              Global Transaction
            </h1>
            <p className="text-lg md:text-3xl max-w-2xl mb-8 text-Tel-50 ">
              Seamless banking and transactions across the globe. Experience the new digital economy.
            </p>
            <div className="flex gap-6">
              <a
                href="#get-started"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className=" bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105 border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>


      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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


      <section className="px-6 py-12 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-10">User Benefits</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">

            <div className="flex flex-col items-center text-center max-w-sm">
              <img
                className="w-17 h-17 rounded-md mb-4 object-cover"
                src="data:image/jpeg;base64,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"
                alt="Convenience - airport travel"
              />
              <h3 className="text-lg font-semibold mb-2">Convenience</h3>
              <p className="text-gray-600 text-sm">
                Experience hassle-free travel with our app, providing real-time access to critical information like airport status, avoiding delays and ensuring a smooth journey.
              </p>
            </div>


            <div className="flex flex-col items-center text-center max-w-sm">
              <img
                className="w-17 h-17 rounded-md mb-4 object-cover"
                src="https://media.istockphoto.com/id/1357068122/vector/isometric-money-wallet-with-security-system.jpg?s=612x612&w=0&k=20&c=2DllXeQ7LBr16BTKhInBNb4pavDQM09yF5USphv9hpA="
                alt="Security system"
              />
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-600 text-sm">
                Your safety is paramount. Our app provides timely alerts about potential issues, keeping you informed and safe throughout your journey.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10">Hear from our awesome users!</h2>
          <div className="flex justify-center">
            <div className={`bg-gray-100 p-8 rounded-lg shadow-lg max-w-md transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
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
              <p className="text-gray-600 text-sm">
                {testimonials[currentTestimonial].feedback}
              </p>
            </div>
          </div>


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
      {/* Footer */}
      <footer className="bg-indigo-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Global wallet corp</h3>
            <p className="text-sm mt-2">Simplifying your global transactions, one tap at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-6">
          © 2025 Global Wallet. Designed by CodeCrafters.
        </div>
      </footer>


    </>

  );

}



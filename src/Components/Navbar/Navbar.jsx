import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export const Navbar = () =>{

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
        

<nav className="bg-gray-600 border-gray-200 dark:bg-gray-100 dark:border-x-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Digital App</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul >
        
        <li>
            <button  className="bg-blue-600   w-25 py-3  rounded-2xl text-white  cursor-pointer border-gray-500 hover:bg-blue-700  "  onClick={handleClick} >Login</button>
            <button className=" w-25 py-3    mx-2  bg-white border  border-black hover:bg-blue-600  cursor-pointer  rounded-2xl"   onClick={handleClick1}>Sign up</button>
           
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://img.freepik.com/premium-vector/banking-finance-banking-networking-business-global-internet-connection-financial-technology-digital-marketing-world-map-point-line-composition-earth-planet-globe-wireframe-hands-vector_127544-2396.jpg?w=1060"
            alt="Banking Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-float-slow brightness-200"
          />
          {/* <img
            src=""
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-float-slower brightness-200"
          /> */}
          <img
            src="https://img.freepik.com/free-vector/money-transfer-realistic-composition-with-credit-cards-payment-terminal-laptop-cash-blue_1284-28205.jpg?ga=GA1.1.948707587.1745726549&semt=ais_hybrid&w=740"
            alt="Crypto Floating"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition duration-700 ease-in-out animate-float brightness-110"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-3xl px-4 py-8 bg-opacity-90 content">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-indigo-500 text-shadow-lg">
            Global Transaction
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-200">
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
              className="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
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
                src="https://images.unsplash.com/photo-1573164574396-9d251c3b6f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
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
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
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

</>

    );

}



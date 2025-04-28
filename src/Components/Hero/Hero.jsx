// import React, { useEffect, useState } from 'react';

export const Hero = () => {
//   const features = [
//     {
//       title: 'Currency Loading',
//       category: 'Finance',
//       description: 'Easily load your travel card with foreign currencies in real-time.',
//       icon: (
//         <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path d="M12 8c-1.657 0-3 1.343-3 3h2l-3 4-3-4h2c0-2.761 2.239-5 5-5s5 2.239 5 5c0 1.657-1.343 3-3 3h-1v-2h1c.552 0 1-.448 1-1s-.448-1-1-1z" />
//         </svg>
//       ),
//     },
//     {
//       title: 'Local Transactions',
//       category: 'Convenience',
//       description: 'Make seamless transactions in local currencies without extra fees.',
//       icon: (
//         <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path d="M3 10h1l3 9h11l3-9h1M9 21h6M10 5h4M12 3v2" />
//         </svg>
//       ),
//     },
//     {
//       title: 'Multi-Currency Support',
//       category: 'Flexibility',
//       description: 'Manage and switch between multiple currencies effortlessly in one app.',
//       icon: (
//         <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path d="M12 8c1.1 0 2 .9 2 2h2c0-2.21-1.79-4-4-4V4l-4 4 4 4V8zM12 16c-1.1 0-2-.9-2-2H8c0 2.21 1.79 4 4 4v4l4-4-4-4v4z" />
//         </svg>
//       ),
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Bibek Dhungana',
//       image: 'https://randomuser.me/api/portraits/men/44.jpg',
//       rating: '★★★★★',
//       feedback: 'The app simplifies currency conversion, making my travels stress-free. Highly recommend!',
//     },
//     {
//       name: 'Himal Subedi',
//       image: 'https://randomuser.me/api/portraits/men/32.jpg',
//       rating: '★★★★★',
//       feedback: 'Fast and accurate currency rates every time. A must-have for globetrotters!',
//     },
//     {
//       name: 'Bhuban Bhandari',
//       image: 'https://randomuser.me/api/portraits/men/68.jpg',
//       rating: '★★★★★',
//       feedback: 'A lifesaver for navigating local currencies abroad. Intuitive and reliable!',
//     },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//         setFade(true);
//       }, 300);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const handleDotClick = (index) => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrentTestimonial(index);
//       setFade(true);
//     }, 300);
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen font-sans">
//       {/* Hero section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
//         {/* Text */}
//         <div className="max-w-xl space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
//             Simplify your <span className="text-blue-600">Currency Management</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Load, manage and use your currencies anywhere, anytime with zero hassle. Travel smarter!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
//             <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">
//               Get Started
//             </button>
//             <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 shadow-md">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="mt-12 md:mt-0">
//           <img
//             src="https://illustrations.popsy.co/white/currency-conversion.svg"
//             alt="Currency Illustration"
//             className="w-full max-w-md animate-bounce-slow"
//           />
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
//             {features.map((feature, index) => (
//               <div key={index} className="p-8 rounded-3xl shadow-xl hover:scale-105 transition-all bg-gradient-to-br from-white to-blue-50">
//                 <div className="flex justify-center mb-6">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-500 mb-4">{feature.category}</p>
//                 <p className="text-gray-700">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//           <button className="mt-12 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg">
//             Explore Features
//           </button>
//         </div>
//       </section>

//       {/* User Benefits */}
//       <section className="px-6 py-20 bg-blue-50">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-10">User Benefits</h2>
//           <div className="flex flex-col md:flex-row justify-center gap-16">
//             <div className="flex flex-col items-center text-center max-w-sm">
//               <img
//                 className="w-24 h-24 rounded-full mb-6 object-cover shadow-lg"
//                 src="https://images.unsplash.com/photo-1573164574396-9d251c3b6f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
//                 alt="Convenience"
//               />
//               <h3 className="text-lg font-semibold mb-2">Convenience</h3>
//               <p className="text-gray-600 text-sm">
//                 Experience hassle-free travel with our app, providing real-time access to airport status and smooth journeys.
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center max-w-sm">
//               <img
//                 className="w-24 h-24 rounded-full mb-6 object-cover shadow-lg"
//                 src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
//                 alt="Security"
//               />
//               <h3 className="text-lg font-semibold mb-2">Security</h3>
//               <p className="text-gray-600 text-sm">
//                 Stay informed and safe with our app's instant alerts about possible travel disruptions or issues.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-10">Hear from our awesome users!</h2>
//           <div className="flex justify-center">
//             <div className={`bg-white p-8 rounded-2xl shadow-xl max-w-md transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonials[currentTestimonial].image}
//                   alt={testimonials[currentTestimonial].name}
//                   className="w-14 h-14 rounded-full mr-4 object-cover"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
//                   <div className="text-yellow-400">{testimonials[currentTestimonial].rating}</div>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].feedback}</p>
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleDotClick(idx)}
//                 className={`w-4 h-4 rounded-full ${currentTestimonial === idx ? 'bg-indigo-600' : 'bg-gray-400'} transition`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//      //     </div>
//   );
};

import React from 'react';

function Hero() {
  return (
    <div className="relative overflow-hidden group">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-opacity-80 bg-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://img.freepik.com/premium-vector/banking-finance-banking-networking-business-global-internet-connection-financial-technology-digital-marketing-world-map-point-line-composition-earth-planet-globe-wireframe-hands-vector_127544-2396.jpg?w=1060"
            alt="Banking Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-float-slow brightness-200"
          />
         
          <img
            src="https://img.freepik.com/free-vector/money-transfer-realistic-composition-with-credit-cards-payment-terminal-laptop-cash-blue_1284-28205.jpg?ga=GA1.1.948707587.1745726549&semt=ais_hybrid&w=740"
            alt="Crypto Floating"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition duration-700 ease-in-out animate-float brightness-110"
          />
        </div>


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
  );
}

export default Hero;

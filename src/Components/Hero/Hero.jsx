import React from 'react'

function Hero() {
  return (
    <div>
       
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white overflow-hidden">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        <span className="text-indigo-400">Global Transaction</span> 
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda laborum .
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
          className="border border-indigo-400 hover:bg-indigo-500 hover:text-white text-indigo-400 font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
        >
        </a>
      </div>

      
      <div className="absolute top-10 right-10 w-24 h-24 bg-indigo-400 opacity-30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-pink-400 opacity-20 rounded-full blur-3xl animate-float" />
    </section>



    </div>
  )
}

export default Hero
import { FaPaperPlane, FaRegMoneyBillAlt, FaHistory, FaCog } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-extrabold text-blue-700">
          Tourist Currency Converter
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Transaction</a>
          <a href="#" className="hover:text-blue-600">KYC</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-10 h-10 rounded-full object-cover"
            alt="Profile"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-24 py-16 flex-grow">
        
        {/* Left Text Content */}
        <div className="flex flex-col items-start space-y-6 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Manage your <span className="text-blue-600">Currency</span> with Ease
          </h1>
          <p className="text-lg text-gray-600">
            Send and receive money globally. Convert currencies instantly with the Tourist Currency Converter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition w-full sm:w-auto">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <img
            src="https://illustrations.popsy.co/white/currency-conversion.svg"
            alt="Currency conversion"
            className="w-full h-auto"
          />
        </div>

      </section>

      {/* Services / Actions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          <div className="flex flex-col items-center gap-2 hover:text-blue-600 cursor-pointer transition">
            <FaPaperPlane size={40} />
            <div className="font-semibold text-gray-700">Send Money</div>
          </div>
          <div className="flex flex-col items-center gap-2 hover:text-green-600 cursor-pointer transition">
            <FaRegMoneyBillAlt size={40} />
            <div className="font-semibold text-gray-700">Receive Money</div>
          </div>
          <div className="flex flex-col items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <FaHistory size={40} />
            <div className="font-semibold text-gray-700">Transaction History</div>
          </div>
          <div className="flex flex-col items-center gap-2 hover:text-purple-600 cursor-pointer transition">
            <FaCog size={40} />
            <div className="font-semibold text-gray-700">Settings</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-6">
        © 2025 Tourist Currency Converter. All rights reserved.
      </footer>

    </div>
  );
}

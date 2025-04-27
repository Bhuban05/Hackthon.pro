import { FaPaperPlane, FaRegMoneyBillAlt, FaHistory, FaCog } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b pb-4 mb-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-black">Tourist Currency Converter</div>
        </div>
        <div className="flex space-x-8 text-gray-700">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">home</a>
          <a href="#">transaction</a>
          <a href="#">kyc</a>
        </div>
        <div className="flex items-center space-x-4">
          <button>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="text-center space-y-2 mb-12">
        <div className="text-gray-500">Digital Balance</div>
        <div className="text-4xl font-bold text-black">$5,000.00</div>
        <div className="text-gray-400">NPR 600,000 (1 USD = 120 NPR)</div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-12 text-gray-700">
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600">
          <FaPaperPlane size={24} />
          <div>Send Money</div>
        </div>
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600">
          <FaRegMoneyBillAlt size={24} />
          <div>Receive Money</div>
        </div>
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600">
          <FaHistory size={24} />
          <div>Transaction History</div>
        </div>
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-blue-600">
          <FaCog size={24} />
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export default function Dash() {
  const navigate = useNavigate();
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  const dollarBalance = 14.87;
  

  const handleNavigation = (path) => {
    navigate(path);
    setShowProfileMenu(false); 
  };

  const handleAdventureClick = (activity) => {
    setPopupText(`Book ${activity} - Coming Soon!`);
    setShowPopup(true);
  };

  const handleScannerClick = () => {
    setPopupText("Camera Feature Coming Soon!");
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const adventures = [
    { icon: "🥾", label: "Hiking" },
    { icon: "🚣", label: "Rafting" },
    { icon: "🪂", label: "Paragliding" },
    { icon: "🚠", label: "Cable Car" },
    { icon: "🦁", label: "Safari" },
    { icon: "🏗️", label: "Bungee" }
  ];

  return (
    <div className="min-h-screen text-gray-200-white flex justify-center items-center p-4">
      <div className="relative w-180 rounded-xl shadow-2xl border-gray-700 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="flex items-center gap-3 relative" ref={profileRef}>
            <img
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-green-400 cursor-pointer"
              onClick={() => setShowProfileMenu(prev => !prev)}
            />
            <h1 className="text-xl font-semibold">Hi, Bibek</h1>

            {showProfileMenu && (
              <div className="absolute left-3 top-14 w-48 bg-white rounded-md shadow-lg py-2 z-50 text-black animate-fadeIn">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-300"
                  onClick={() => handleNavigation('/profile')}
                >
                  Profile
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-300"
                  onClick={() => handleNavigation('/settings')}
                >
                  Settings
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-300"
                  onClick={() => handleNavigation('/login')}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <Cog6ToothIcon className="h-8 w-8 text-white cursor-pointer" />
        </div>

        {/* Balance Section */}
        <div className="p-6 shadow text-center">
          <h2 className="text-2xl text-black">Balance</h2>
          <p className="text-3xl font-bold text-black mb-2">${dollarBalance.toFixed(2)}</p>
          <p className="text-sm text-blue-600"></p>
        </div>

        {/* Load and Send Money */}
        <div className="p-4 grid grid-cols-2 gap-4">
          <button 
            className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition"
            onClick={() => handleNavigation('/loadm')}
          >
            <img src="https://cdn2.vectorstock.com/i/1000x1000/67/71/send-money-online-with-mobile-digital-wallet-app-vector-26836771.jpg" alt="Load Money" className="w-8 h-8 mb-2" />
            <span>Load Money</span>
          </button>
          <button 
            className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition"
            onClick={() => handleNavigation('/sendid')}
          >
            <img src="https://www.kowri.app/wp-content/uploads/2023/02/Send-Money.png" alt="Send Money" className="w-8 h-8 mb-2" />
            <span>Send Money</span>
          </button>
        </div>

       
        <div className="px-4 pt-6 pb-24">
          <h2 className="text-lg font-bold mb-2 text-blue-400">Adventure & Local Fun</h2>
          <div className="grid grid-cols-3 gap-4">
            {adventures.map((item, index) => (
              <div
                key={index}
                onClick={() => handleAdventureClick(item.label)}
                className="shadow-xl rounded-xl p-4 flex flex-col items-center hover:scale-105 transition hover:bg-gray-400 cursor-pointer"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <span className="text-center text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 border-t border-gray-700 flex justify-around items-center">

     
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => handleNavigation('/')}
          >
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
              🏠
            </div>
            <span className="text-xs mt-1 group-hover:text-green-400 transition-all duration-300">Home</span>
          </div>

          {/* Scanner */}
          <div className="flex flex-col items-center">
            <button 
              onClick={handleScannerClick}
              className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:animate-pulse transition"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png" 
                alt="Camera Icon" 
                className="w-8 h-8" 
              />
            </button>
            <span className="text-xs mt-1 text-center">Scanner</span>
          </div>

        
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">💬</div>
            <span className="text-xs mt-1 text-center">Feedback</span>
          </div>

        </div>

        
        {showPopup && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center">
            <div className="bg-blue-900 p-6 rounded-xl text-center space-y-4">
              <p className="text-white">{popupText}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

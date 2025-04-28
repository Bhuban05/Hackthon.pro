import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export default function Dash() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sendid');
      };
    const handleClick1 = () => {
        navigate('/');
      };

  const dollarBalance = 14.87;
  const nepaliBalance = 1980;
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAdventureClick = (activity) => {
    setPopupText(`Book ${activity} - Coming Soon!`);
    setShowPopup(true);
  };

  const handleScannerClick = () => {
    setPopupText("Camera Feature Coming Soon!");
    setShowPopup(true);
  };

  return (
    
    <div className="min-h-screen  textgray-200-white flex justify-center items-center p-4">
      <div className="relative    w-180 rounded-xl shadow-2xl  border-gray-700 flex flex-col overflow-hidden">
        
      
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="flex  items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <h1 className="text-xl font-semibold">Hi, Bibek</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Cog6ToothIcon className="h-8 w-8 text-white cursor-pointer" />
          </div>
        </div>

        {/* Balance */}
        <div className="p-6 shadow text-center">
          <h2 className=" text-2xl text-black">Balance</h2>
          <p className="text-3xl font-bold text-black mb-2">${dollarBalance.toFixed(2)}</p>
          <p className="text-sm text-blue-600">NPR {nepaliBalance}</p>
        </div>

        {/* Money Features */}
        <div className="p-4 grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition">
            <img src="/load.png" alt="Load Money" className="w-8 h-8 mb-2" />
            <span>Load Money</span>
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition">
            <img src="/send.png" alt="Send Money" className="w-8 h-8 mb-2" />
            <span  onClick={(e) => {
            handleClick(e);
          }} >Send Money</span>
          </button>
        </div>

       
        <div className="px-4 pt-6 pb-24">
          <h2 className="text-lg font-bold mb-2 text-blue-400">Adventure & Local Fun</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "🥾", label: "Hiking" },
              { icon: "🚣", label: "Rafting" },
              { icon: "🪂", label: "Paragliding" },
              { icon: "🚠", label: "Cable Car" },
              { icon: "🦁", label: "Safari" },
              { icon: "🏗️", label: "Bungee" }
            ].map((item, index) => (<div
                key={index}
                onClick={() => handleAdventureClick(item.label)}
                className="shadow-xl rounded-xl p-4 flex flex-col items-center hover:scale-105 transition hover:bg-gray-400  cursor-pointer"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <span className="text-center text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className=" bottom-0  absolute w-full bg-gradient-to-r from-blue-800 to-blue-600 border-t border-gray-700 flex justify-around items-center  ">

          {/* Home */}
<div 

  className="flex flex-col items-center cursor-pointer group"
>
  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-300"    onClick={handleClick1}>
    🏠
  </div>
  <span className="text-xs mt-1 group-hover:text-green-400 transition-all duration-300">Home</span>
</div>


          {/* Scanner (with Camera Icon) */}
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

          {/* Feedback & Support */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">💬</div>
            <span className="text-xs mt-1 text-center">Feedback</span>
          </div>

        </div>

        {/* Popup Modal */}
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
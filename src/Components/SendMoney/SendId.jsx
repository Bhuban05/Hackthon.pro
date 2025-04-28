import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



const SendId = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/calculator');
    };


  const [selectedTab, setSelectedTab] = useState("wallet");
  const [walletNumber, setWalletNumber] = useState("");
  const [proceed, setProceed] = useState(false);

  const handleProceed = () => {
    const STATIC_WALLET_NUMBER = "00000";
    const walletNumberRegex = /^[0-9]{5}$/; 

    if (walletNumberRegex.test(walletNumber)) {
      if (walletNumber === STATIC_WALLET_NUMBER) {
        setProceed(true); 
      } else {
        alert("Gwallent ID incorrect");
      }
    } else {
      alert("Gwallent ID incorrect");
    }
  };

  if (proceed) {
    return <cal/>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f10]">
      <div className="w-[370px] bg-[#1c1c1e] rounded-3xl shadow-2xl p-4">
        
        <div className="flex items-center space-x-3 mb-6">
          <button className="text-white text-2xl">&#8592;</button>
          <h1 className="text-white text-xl font-semibold">Send Money</h1>
          <div className="ml-auto text-white text-xl">
            <i className="fas fa-info-circle"></i>
          </div>
        </div>

        
        <div className="bg-[#2c2c2e] p-4 rounded-2xl flex justify-between items-center mb-6">
          <div>
            <div className="flex items-baseline space-x-1">
              <p className="text-blue-400 text-lg">$</p>
              <h2 className="text-2xl font-bold text-white">14.87</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">Balance</p>
          </div>
          <button className="text-blue-400 text-2xl">&#10227;</button>
        </div>

       
        <div className="mb-6">
          <h2 className="text-white text-lg mb-2">Recent Transactions</h2>
          <div className="flex space-x-2 overflow-x-auto">
            <div className="bg-[#2c2c2e] p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-white text-sm truncate">Som Kumar Surk...</p>
              <p className="text-gray-400 text-sm">NPR 1000.00</p>
            </div>
            <div className="bg-[#2c2c2e] p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-white text-sm truncate">Adim Canteen</p>
              <p className="text-gray-400 text-sm">NPR 100.00</p>
            </div>
            <div className="bg-[#2c2c2e] p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-white text-sm truncate">Bishnu Gurung</p>
              <p className="text-gray-400 text-sm">NPR 84.00</p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-center mb-4">
          <div className="flex bg-[#2c2c2e] rounded-xl overflow-hidden">
            <button
              className={`flex-1 py-2 font-semibold ${
                selectedTab === "wallet"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab("wallet")}
            >
              Gwallent Number
            </button>
            <button
              className={`flex-1 py-2 font-semibold ${
                selectedTab === "email"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab("email")}
            >
              Email Address
            </button>
          </div>
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-400 mb-2 text-sm">
            {selectedTab === "wallet" ? "Gwallent ID" : "Email Address"}
          </label>
          <div className="relative">
            <input
              type="text"
              value={walletNumber}
              onChange={(e) => setWalletNumber(e.target.value)}
              placeholder={selectedTab === "wallet" ? "Enter Gwallent Number" : "Email Address"}
              className="w-full p-3 bg-[#2c2c2e] text-white rounded-xl focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-blue-400 text-xl">
              <i className="fas fa-address-book"></i>
            </span>
          </div>
        </div>

       
        <button
          
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          onClick={(e) => {
            handleProceed(e);
            handleClick(e);
          }}
     
       
       >
          PROCEED
        </button>

        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Secure Your Fund Transfer
          </p>
          <p className="text-gray-500 text-xs">
            Sending money? Our new feature GWallet Service provides you a secured
            way to transfer fund to another Gwallent user or any other user.
          </p>
          <button className="mt-2 text-blue-400 font-semibold">
            GWALLET SERVICE HISTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendId;

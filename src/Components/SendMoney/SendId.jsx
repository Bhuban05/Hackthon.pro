import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const SendId = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("wallet");
  const [walletNumber, setWalletNumber] = useState("");

  const handleProceed = () => {
    const STATIC_WALLET_NUMBER = "00000";
    const walletNumberRegex = /^[0-9]{5}$/;

    if (walletNumberRegex.test(walletNumber)) {
      if (walletNumber === STATIC_WALLET_NUMBER) {
        navigate('/calculator');
      } else {
        toast("Gwallet ID incorrect");
      }
    } else {
      toast("Gwallet ID incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#cdcde0]">
      <div className="w-180  rounded-3xl shadow-2xl  p-4 ">
        
      
        <div className="flex items-center space-x-3 mb-6">
          <button className=" text-2xl"   onClick={() => navigate(-1)}>&#8592;</button>
          <h1 className="text-4xl font-bold">Send Money</h1>
          <div className="ml-auto text-black text-xl">
            <i className="fas fa-info-circle"></i>
          </div>
        </div>

       
        <div className="bg-blue-700 p-4 rounded-2xl flex justify-between items-center mb-6">
          <div>
            <div className="flex items-baseline space-x-1">
              <p className="text-blue-400 text-lg">$</p>
              <h2 className="text-2xl font-bold  text-white">14.87</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">Balance</p>
          </div>
          <button className="text-blue-400 text-2xl">&#10227;</button>
        </div>

     
        <div className="mb-6">
          <h2 className="text-blue-700 text-lg mb-2">Recent Transactions</h2>
          <div className="space-x-2 overflow-x-auto grid grid-cols-3 gap-2">
            <div className="bg-gray-400 hover:bg-gray-400 p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-black text-sm">Som Kumar Surk...</p>
              <p className="text-gray-800 text-sm">NPR 1000.00</p>
            </div>
            <div className="bg-gray-400 p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-sm">Adim Canteen</p>
              <p className="text-sm">NPR 100.00</p>
            </div>
            <div className="bg-gray-400 p-3 rounded-xl text-center min-w-[100px]">
              <p className="text-sm">Bishnu Gurung</p>
              <p className="text-sm">NPR 84.00</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex  rounded-xl overflow-hidden">
            <button
              className={`flex-1 py-2 font-semibold ${
                selectedTab === "wallet"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab("wallet")}
            >
              Gwallet Number
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
          <label className="block text-gray-600 mb-2 text-sm">
            {selectedTab === "wallet" ? "Gwallet ID" : "Email Address"}
          </label>
          <div className="relative">
            <input
              type="text"
              value={walletNumber}
              onChange={(e) => {
                const value = e.target.value;
                
                if (/^\d{0,5}$/.test(value)) {
                  setWalletNumber(value);
                }
              }}
              placeholder={selectedTab === "wallet" ? "Enter Gwallet Number" : "Enter Email Address"}
              className="w-full p-3 border rounded-xl focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-blue-400 text-xl">
              <i className="fas fa-address-book"></i>
            </span>
          </div>
        </div>

      
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          onClick={handleProceed}
        >
          PROCEED
        </button>

  
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Secure Your Fund Transfer
          </p>
          <p className="text-gray-700 text-xs">
            Sending money? Our new feature GWallet Service provides you a secured
            way to transfer funds to another Gwallet user or any other user.
          </p>
          <button className="mt-2 text-blue-600 font-semibold">
            GWALLET SERVICE HISTORY
          </button>
        </div>

      </div>
    </div>
  );
};

export default SendId;

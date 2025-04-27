import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const LoadMoney = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-black min-h-screen text-white">
      <div className="bg-[#0d0d0d] rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">Load Money</h1>

        {/* Current Balance */}
        <div className="flex items-center justify-between mb-8 bg-[#1a1a1a] p-4 rounded-xl">
          <div>
            <p className="text-gray-400">Balance</p>
            <h2 className="text-3xl font-semibold text-blue-300">$14.87</h2>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
            🔄
          </button>
        </div>

        {/* Load Options */}
        <div className="space-y-6">
          {/* Load via Bank */}
          <div
            className="flex items-center p-4 bg-[#1a1a1a] rounded-xl shadow hover:shadow-md cursor-pointer"
            onClick={openPopup}
          >
            <div className="bg-blue-600 text-white rounded-full p-2 mr-4">🏦</div>
            <div>
              <h3 className="text-lg font-semibold">Bank Transfer</h3>
              <p className="text-gray-400 text-sm">
                Load from local or international bank.
              </p>
            </div>
          </div>

          {/* Load via Card */}
          <div
            className="flex items-center p-4 bg-[#1a1a1a] rounded-xl shadow hover:shadow-md cursor-pointer"
            onClick={openPopup}
          >
            <div className="bg-blue-700 text-white rounded-full p-2 mr-4">💳</div>
            <div>
              <h3 className="text-lg font-semibold">Card Payment</h3>
              <p className="text-gray-400 text-sm">
                Use Visa, MasterCard, or Dollar Card.
              </p>
            </div>
          </div>

          {/* Global Payment */}
          <div
            className="flex items-center p-4 bg-[#1a1a1a] rounded-xl shadow hover:shadow-md cursor-pointer"
            onClick={openPopup}
          >
            <div className="bg-blue-800 text-white rounded-full p-2 mr-4">🌎</div>
            <div>
              <h3 className="text-lg font-semibold">Global Payment</h3>
              <p className="text-gray-400 text-sm">
                Connect international wallets easily.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal for Adding Bank */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <Dialog.Panel className="bg-[#1a1a1a] p-8 rounded-xl w-full max-w-lg shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-blue-400 mb-6">
              Add Bank or Card Details
            </Dialog.Title>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300">Bank/Card Name</label>
                <input
                  type="text"
                  placeholder="e.g. Siddhartha Bank / Visa"
                  className="w-full mt-1 p-2 rounded-md bg-black border border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">Country</label>
                <input
                  type="text"
                  placeholder="e.g. Nepal"
                  className="w-full mt-1 p-2 rounded-md bg-black border border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">Account/Card Number</label>
                <input
                  type="text"
                  placeholder="e.g. 5523 11xx xxxx"
                  className="w-full mt-1 p-2 rounded-md bg-black border border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">SWIFT/Code</label>
                <input
                  type="text"
                  placeholder="e.g. SIDDNPKA / CVV"
                  className="w-full mt-1 p-2 rounded-md bg-black border border-gray-600 text-white"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default LoadMoney;

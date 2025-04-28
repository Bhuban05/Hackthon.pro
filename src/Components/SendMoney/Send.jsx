import React, { useState } from 'react';

export const Send = () => {
  const [amount, setAmount] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleAmountClick = (value) => {
    setAmount(value.toString());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const toggleDetailsVisibility = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className=" bg-gray-600 h-full w-180 mx-auto rounded-2xl mt-10">
      <div className="flex items-center mb-4">
        <button className="text-blue-600 text-xl">←</button>
        <h1 className="text-lg font-semibold ml-3 text-blue-800">Bank Transfer</h1>
      </div>

      <div className=" p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            </div>
            <div>
              <p className="text-blue-500 text-xs">Balance</p>
              <p className="text-blue-900 font-bold">NPR 14.87</p>
            </div>
          </div>
          <button className="text-green-500 text-sm">
            ↻
          </button>
        </div>

        <form className="space-y-3">
          <div>
            <label className="text-blue-600 text-xs mb-1 block">Destination Bank</label>
            <select className="w-full p-2 text-sm rounded-lg border border-blue-200 bg-blue-50">
              <option>GLOBAL IME BANK LTD.</option>
            </select>
          </div>

          <div className="relative">
            <label className="text-blue-600 text-xs mb-1 block">Account Number</label>
            <input
              type={showDetails ? "text" : "password"}
              value="11807010092870"
              readOnly
              className="w-full p-2 text-sm rounded-lg border border-blue-200 bg-blue-50 pr-8"
            />
            <button
              type="button"
              onClick={toggleDetailsVisibility}
              className="absolute right-2 top-7 text-blue-500 text-xs"
            >
              {showDetails ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="relative">
            <label className="text-blue-600 text-xs mb-1 block">Account Holder's Name</label>
            <input
              type={showDetails ? "text" : "password"}
              value="JEEVAN BHANDARI"
              readOnly
              className="w-full p-2 text-sm rounded-lg border border-blue-200 bg-blue-50 pr-8"
            />
            <button
              type="button"
              onClick={toggleDetailsVisibility}
              className="absolute right-2 top-7 text-blue-500 text-xs"
            >
              {showDetails ? '🙈' : '👁️'}
            </button>
          </div>

          <div>
            <label className="text-blue-600 text-xs mb-1 block">Amount (NPR)</label>
            <input
              type="text"
              value={amount}
              onChange={handleInputChange}
              placeholder="Amount to transfer"
              className="w-full p-2 text-sm rounded-lg border border-blue-200 bg-blue-50"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[1000, 3000, 5000, 10000].map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => handleAmountClick(value)}
                className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-1.5 rounded-lg"
              >
                {value}
              </button>
            ))}
          </div>

          <div>
            <label className="text-blue-600 text-xs mb-1 block">Purpose/Remarks</label>
            <input
              type="text"
              placeholder="Write Purpose/Remarks.."
              className="w-full p-2 text-sm rounded-lg border border-blue-200 bg-blue-50"
            />
          </div>

          <div className="flex justify-between gap-3 mt-4">
            <button
              type="reset"
              className="flex-1 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-medium py-2 rounded-lg"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-400 hover:bg-green-500 text-white text-sm font-medium py-2 rounded-lg"
            >
              CHECK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
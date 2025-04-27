import React, { useState } from 'react';

const Send = () => {
  const [amount, setAmount] = useState('');

  const handleAmountClick = (value) => {
    setAmount(value.toString());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col p-4">
      <div className="flex items-center mb-4">
        <button className="text-blue-600 text-2xl">&#8592;</button>
        <h1 className="text-xl font-semibold ml-4 text-blue-800">Bank Transfer</h1>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-700 rounded-full" />
            </div>
            <div>
              <p className="text-blue-600 text-sm">Balance</p>
              <p className="text-blue-900 font-bold text-lg">NPR 14.87</p>
            </div>
          </div>
          <button className="text-green-600">
            &#10227;
          </button>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
          <div>
            <label className="text-blue-700 text-sm mb-1 block">Destination Bank</label>
            <select className="w-full p-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900">
              <option>GLOBAL IME BANK LTD.</option>
            </select>
          </div>

          <div>
            <label className="text-blue-700 text-sm mb-1 block">Account Number</label>
            <input
              type="text"
              value="11807010092870"
              readOnly
              className="w-full p-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900"
            />
          </div>

          <div>
            <label className="text-blue-700 text-sm mb-1 block">Account Holder's Name</label>
            <input
              type="text"
              value="JEEVAN BHANDARI"
              readOnly
              className="w-full p-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900"
            />
          </div>

          <div>
            <label className="text-blue-700 text-sm mb-1 block">Amount (NPR)</label>
            <input
              type="text"
              value={amount}
              onChange={handleInputChange}
              placeholder="Amount to transfer"
              className="w-full p-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900"
            />
          </div>

          {/* Preset Amount Buttons */}
          <div className="flex justify-between gap-2">
            {[1000, 3000, 5000, 10000].map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => handleAmountClick(value)}
                className="flex-1 bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 rounded-xl"
              >
                {value}
              </button>
            ))}
          </div>

          <div>
            <label className="text-blue-700 text-sm mb-1 block">Purpose/Remarks</label>
            <input
              type="text"
              placeholder="Write Purpose/Remarks.."
              className="w-full p-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="reset"
              className="w-[48%] bg-blue-300 hover:bg-blue-400 text-white font-bold py-3 rounded-xl"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="w-[48%] bg-green-400 hover:bg-green-500 text-white font-bold py-3 rounded-xl"
            >
              CHECK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Send;

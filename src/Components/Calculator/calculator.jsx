import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [userBalance] = useState(1250.00);
  const [accountNumber] = useState('20820116');
  const [isPaymentStarted, setIsPaymentStarted] = useState(false);
  const [isGwpinPhase, setIsGwpinPhase] = useState(false);
  const [gwPin, setGwPin] = useState('');
  const [showGwPin, setShowGwPin] = useState(false);

  const conversionRate = 130;
  const staticGwPin = "0101";

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleSend = () => {
    const sendAmountNPR = parseFloat(input);

    if (!input || isNaN(sendAmountNPR)) {
      alert('Please enter a valid amount.');
      return;
    }

    const sendAmountUSD = sendAmountNPR / conversionRate;

    if (sendAmountUSD > userBalance) {
      alert('Cannot send amount greater than balance!');
      return;
    }

    setIsGwpinPhase(true);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleProceedGwPin = () => {
    if (gwPin.length !== 4) {
      alert('GWPIN must be exactly 4 digits!');
      return;
    }
    if (gwPin !== staticGwPin) {
      alert('Incorrect GWPIN. Please try again.');
      return;
    }
    setIsPaymentStarted(true);
  };

  const equivalentUSD = parseFloat(input) / conversionRate;

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-grey p-6">
      {!isPaymentStarted ? (
        !isGwpinPhase ? (
          <div className="w-180 bg-[#0d0d0edc] rounded-3xl shadow-2xl p-4 border-4 border-[#2c2c2e]">

            {/* User Info */}
            <h1 className="text-2xl font-bold text-center mb-6 text-white">User Info</h1>

            <div className="bg-gray-800 p-4 rounded-xl text-xl font-semibold text-center mb-4">
              <span className="text-gray-400">Balance:</span>
              <div className="text-green-400">${userBalance.toFixed(2)}</div>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl text-xl font-semibold text-center mb-4">
              <span className="text-gray-400">Account Number:</span>
              <div className="text-gray-400">{accountNumber}</div>
            </div>

            {/* Amount Section */}
            <div className="bg-gray-800 rounded-lg p-4 text-2xl mb-4 text-right min-h-[60px]">
              <span className="text-gray-400 text-sm">Send Amount (NPR): </span>
              <span className="text-white">{input || '0'}</span>
            </div>

            {/* Equivalent USD */}
            {input && (
              <div className="bg-gray-800 rounded-lg p-4 text-2xl mb-4 text-right min-h-[60px]">
                <span className="text-gray-400 text-sm">Equivalent (USD): </span>
                <span className="text-red-500">-${equivalentUSD.toFixed(2)}</span>
              </div>
            )}

            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1,2,3,4,5,6,7,8,9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleButtonClick(num.toString())}
                  className="bg-blue-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => handleButtonClick('0')}
                className="bg-blue-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
              >
                0
              </button>

              <button
                onClick={() => handleButtonClick('.')}
                className="bg-blue-600 text-white py-3 rounded-xl text-xl font-bold hover:bg-blue-700 transition"
              >
                .
              </button>

              <button
                onClick={handleBackspace}
                className="bg-red-600 text-white py-3 rounded-xl text-xl font-bold hover:bg-red-700 transition"
              >
                ×
              </button>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Send
            </button>

          </div>
        ) : (
          // GWPIN Enter Phase
          <div className="w-100 h-70 bg-[#0d0d0edc] rounded-3xl shadow-2xl p-4 border-4 border-[#2c2c2e]">
            <h1 className="text-2xl font-bold text-white mb-6">Enter GWPIN</h1>

            <div className="relative mb-6">
              <input
                type={showGwPin ? 'text' : 'password'}
                value={gwPin}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val) && val.length <= 4) {
                    setGwPin(val);
                  }
                }}
                className="w-full p-3 rounded-xl bg-gray-700 text-white text-center text-2xl border-2 border-gray-500"
                maxLength={4}
                placeholder="****"
              />
              <button
                onClick={() => setShowGwPin(!showGwPin)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              >
                {showGwPin ? '🙈' : '👁️'}
              </button>
            </div>

            <button
              onClick={handleProceedGwPin}
              className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Proceed
            </button>
          </div>
        )
      ) : (
        // Payment Successful
        <div className="w-180 bg-[#0d0d0edc] rounded-3xl shadow-2xl p-4 border-4 border-[#2c2c2e]">
          <img
            src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png"
            alt="Payment Successful"
            className="w-48 h-48 mb-6"
          />
          <h2 className="text-2xl font-bold text-green-400 mb-4">Payment Successful!</h2>
          <p className="text-gray-400">Thank you for your payment.</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;

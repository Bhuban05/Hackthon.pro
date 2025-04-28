import React, { useState } from 'react';

  export const calculator = () => {
  const [input, setInput] = useState('');
  const [userBalance] = useState('$1,250.00');
  const [accountNumber] = useState('123-456-7890');
  const [isPaymentDone, setIsPaymentDone] = useState(false); 

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleSend = () => {
    if (input) {
      setIsPaymentDone(true);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {!isPaymentDone ? (
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-xs">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">User Info</h1>

          <div className="bg-gray-800 p-4 rounded-xl text-xl font-semibold text-center mb-4">
            <span className="text-gray-400">Balance:</span>
            <div className="text-green-400">{userBalance}</div>
          </div>

         
          <div className="bg-gray-800 p-4 rounded-xl text-xl font-semibold text-center mb-4">
            <span className="text-gray-400">Account Number:</span>
            <div className="text-gray-400">{accountNumber}</div>
          </div>

         
          <div className="bg-gray-800 rounded-lg p-4 text-2xl mb-4 text-right min-h-[60px]">
            <span className="text-gray-400 text-sm">Send Amount: </span>
            <span className="text-white">{input || '0'}</span>
          </div>

         
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

        
          <button
            onClick={handleSend}
            className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Send
          </button>
        </div>
      ) : (
      
        <div className="flex flex-col items-center bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-xs">
          <img
            src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png"
            alt="Payment Successful"
            className="w-48 h-48 mb-6" 
          />
          <p className="text-gray-400 text-center text-lg">
            Your payment of <strong className="text-white">${input}</strong> has been sent successfully.
          </p>
        </div>
      )}
    </div>
  );
};



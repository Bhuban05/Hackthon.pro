import React, { useState } from 'react';
import { TbHandClick } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [userBalance] = useState(1250.00);
  const [accountNumber] = useState('08279');
  const [isPaymentStarted, setIsPaymentStarted] = useState(false);
  const [isGwpinPhase, setIsGwpinPhase] = useState(false);
  const [gwPin, setGwPin] = useState('');
  const [showGwPin, setShowGwPin] = useState(false);
  const [sentAmountNPR, setSentAmountNPR] = useState(null);
  const [sentAmountUSD, setSentAmountUSD] = useState(null);

  const conversionRate = 130;
  const staticGwPin = "0101";


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dash");	
  }
  const handleSend = () => {
   

    const sendAmountNPR = parseFloat(input);

    if (!input || isNaN(sendAmountNPR)) {
      toast('Please enter a valid amount.');
      return;
    }

    const sendAmountUSD = sendAmountNPR / conversionRate;

    if (sendAmountUSD > userBalance) {
      toast('Cannot send amount greater than balance!');
      return;
    }

    setIsGwpinPhase(true);
  };

  const handleProceedGwPin = () => {
    if (gwPin.length !== 4) {
      toast('GWPIN must be exactly 4 digits!');
      return;
    }
    if (gwPin !== staticGwPin) {
      toast('Incorrect GWPIN. Please try again.');
      return;
    }

    const npr = parseFloat(input);
    const usd = npr / conversionRate;
    setSentAmountNPR(npr);
    setSentAmountUSD(usd);

    setIsPaymentStarted(true);
  };

  const equivalentUSD = parseFloat(input) / conversionRate || 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      {!isPaymentStarted ? (
        !isGwpinPhase ? (
          <div className="w-180 h-130 rounded-3xl shadow-2xl p-6 bg-white">

           
            <div className="bg-gray-300 p-4 rounded-xl text-xl font-semibold text-center mb-4">
              <span>Balance:</span>
              <div className="text-green-500">${userBalance.toFixed(2)}</div>
            </div>

            
            <div className="bg-gray-300  mt-10 p-4 rounded-xl text-xl font-semibold text-center mb-4">
              <span>Account Number:</span>
              <div className="text-gray-700">{accountNumber}</div>
            </div>

            
            <div className="mb-4 mt-10">
              <input
                type="number"
                step="0.01"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Amount (NPR)"
                className="w-full p-3 rounded-xl  border-2 border-gray-400 "
              />
            </div>

           
            {input && (
              <div className="bg-gray-200 rounded-lg p-4 text-xl mb-4 text-right min-h-[60px]">
                <span className="text-sm">Equivalent (USD): </span>
                <span className="text-red-500">-${equivalentUSD.toFixed(2)}</span>
              </div>
            )}

          
            <button
              onClick={handleSend}
              className="w-full mt-5 bottom-0  bg-blue-600 text-white py-5 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        ) : (
         
          <div className="w-120 h-80 rounded-3xl shadow-2xl p-6  bg-white">
            <h1 className="text-2xl font-bold text-center mb-6">Enter GWPIN</h1>

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
                className="w-full p-3 rounded-xl text-center text-2xl border-2 border-gray-500"
                maxLength={4}
                placeholder="****"
              />
              <button
                onClick={() => setShowGwPin(!showGwPin)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl"
              >
                {showGwPin ? '🙈' : '👁️'}
              </button>
            </div>

            <button
              onClick={handleProceedGwPin}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Proceed
            </button>
          </div>
        )
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
          <div className="w-[400px] rounded-3xl shadow-2xl p-8 bg-white flex flex-col items-center text-center">
            <img
              src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png"
              alt="Payment Successful"
              className="w-48 h-48 mb-6 object-contain"
            />
            <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
            <p className="text-gray-700 text-lg mb-2">
              NPR {sentAmountNPR?.toFixed(2)}
            </p>
            <p className="text-gray-500 text-md mb-6">
              Equivalent to USD ${sentAmountUSD?.toFixed(2)}
            </p>

            <button
              onClick={ handleClick}
              className="mt-4 bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;

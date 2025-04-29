import { IoIosRefresh } from "react-icons/io";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory for React Router v6+

const LoadM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  // Static allowed values
  const allowedValues = {
    bankName: "American Bank",
    country: "USA",
    accountNumber: "55555",
    swiftCode: "12345",
  };

  const [formData, setFormData] = useState({
    bankName: "",
    country: "",
    accountNumber: "",
    swiftCode: "",
  });

  const [error, setError] = useState("");

  const openPopup = () => {
    setFormData({ bankName: "", country: "", accountNumber: "", swiftCode: "" });
    setError("");
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const { bankName, country, accountNumber, swiftCode } = formData;

    if (
      bankName !== allowedValues.bankName ||
      country !== allowedValues.country ||
      accountNumber !== allowedValues.accountNumber ||
      swiftCode !== allowedValues.swiftCode
    ) {
      setError("One or more fields do not match the required values.");
      return;
    }

    // Redirect to the dashboard after saving
    navigate("/dashboard");
    setIsOpen(false); // Close the modal after save
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#cdcde0]">
      <div className="w-180 rounded-3xl shadow-2xl p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Load Money
        </h1>

        <div className="flex items-center justify-between mb-8 bg-gray-200 shadow p-4 rounded-xl">
          <div>
            <p className="text-gray-800">Balance</p>
            <h2 className="text-3xl font-semibold text-blue-600">$14.87</h2>
          </div>
          <IoIosRefresh />
        </div>

        <div className="space-y-6">
          <div
            className="flex items-center p-4 rounded-xl shadow hover:shadow-md cursor-pointer"
            onClick={openPopup}
          >
            <div className="bg-blue-600 text-white rounded-full p-2 mr-4">🏦</div>
            <div>
              <h3 className="text-lg font-semibold">Bank Details</h3>
              <p className="text-gray-400 text-sm">
                Load from local or international bank.
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-xl shadow hover:shadow-md cursor-pointer">
            <div className="bg-blue-700 text-white rounded-full p-2 mr-4">💳</div>
            <div>
              <h3 className="text-lg font-semibold">Card Payment</h3>
              <p className="text-gray-400 text-sm">
                Use Visa, MasterCard, or Dollar Card.
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-xl shadow hover:shadow-md cursor-pointer">
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

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <Dialog.Panel className="p-8 bg-gray-300 rounded-xl w-full max-w-lg shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-blue-400 mb-6">
              Add Bank or Card Details
            </Dialog.Title>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            <div className="space-y-4">
              <div>
                <label className="block text-sm">Bank/Card Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Enter: American Bank"
                  className="w-full mt-1 p-2 rounded-md border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter: USA"
                  className="w-full mt-1 p-2 rounded-md border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm">Account/Card Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Enter: 55555"
                  className="w-full mt-1 p-2 rounded-md border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm">SWIFT/Code</label>
                <input
                  type="text"
                  name="swiftCode"
                  value={formData.swiftCode}
                  onChange={handleChange}
                  placeholder="Enter: 12345"
                  className="w-full mt-1 p-2 rounded-md border border-gray-600"
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
                  onClick={() => setIsOpen(false)}
                >
                  Load
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default LoadM;

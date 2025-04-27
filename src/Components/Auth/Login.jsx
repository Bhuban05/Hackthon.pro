import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-8">Global Wallet</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder=" "
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email or Mobile Number
            </label>
          </div>

          <div className="text-left text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot email?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition"
          > 
            Log in
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full border-2 border-black text-black font-semibold py-2 rounded-full hover:bg-gray-100 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

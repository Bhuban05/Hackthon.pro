import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Dash() {
  const balance = 14.87;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="flex items-center gap-3">
          <img
            src="/profile.png" // replace with actual profile pic
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-green-500"
          />
          <div>
            <h1 className="text-xl font-semibold">Hi, Tourist</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Cog6ToothIcon className="h-8 w-8 text-white cursor-pointer" />
        </div>
      </div>

      {/* Balance and Actions */}
      <div className="p-4 grid grid-cols-2 gap-4 bg-blue-950">
        <div className="bg-blue-900 rounded-xl p-4 text-center">
          <h2 className="text-sm">Balance</h2>
          <p className="text-2xl font-bold">NPR {balance}</p>
        </div>
      </div>

      {/* Money Features */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <button className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition">
          <img src="/load.png" alt="Load Money" className="w-8 h-8 mb-2" />
          <span>Load Money</span>
        </button>
        <button className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition">
          <img src="/send.png" alt="Send Money" className="w-8 h-8 mb-2" />
          <span>Send Money</span>
        </button>
      </div>

      {/* Adventure Services */}
      <div className="px-4 pt-6">
        <h2 className="text-lg font-bold mb-2">Adventure & Local Fun</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/hiking.png" alt="Hiking" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Hiking</span>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/rafting.png" alt="Rafting" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Rafting</span>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/paragliding.png" alt="Paragliding" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Paragliding</span>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/cablecar.png" alt="Cable Car" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Cable Car</span>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/jungle.png" alt="Jungle Safari" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Safari</span>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition cursor-pointer">
            <img src="/bungee.png" alt="Bungee Jump" className="w-8 h-8 mb-2" />
            <span className="text-center text-sm">Bungee</span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-950 flex justify-around py-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">🏠</div>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">📄</div>
          <span className="text-xs">Statement</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">💬</div>
          <span className="text-xs">Support</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">⚙️</div>
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </div>
  );
}

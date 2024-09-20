import React from 'react'

export default function Explore() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in qui officia deserunt mollit anim id est laborum.
        </p>
      <div className="flex justify-center">
      <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full transition">
        Explore Now
      </button>
      </div>
      </div>

      <div className='ml-40'>
        <div className="relative">
        <div className="absolute inset-0 bg-purple-700 h-56 w-60 transform translate-x-8 translate-z-8 rounded-xl mt-4"></div>
        <div className="absolute inset-0 bg-pink-600 h-60 w-60 transform translate-x-4 translate-z-4 rounded-xl mt-2" ></div>
        
        <div className="relative bg-blue-900 text-white h-64 w-60 rounded-xl p-4">
          <h3 className="text-white font-bold text-lg mb-4">Lorem ipsum</h3>
          <div className="flex items-center mb-6">
            <img
              src="https://cdn.pixabay.com/photo/2023/12/19/22/46/business-8458541_1280.jpg"
              alt="User avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm">Wade Warren</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-blue-800 rounded-md px-3 py-1">
            <p className="text-sm font-semibold">Lawrance Stroll</p>
            <p className="text-xs">Hegifueshho dhfsui foiehhhsio</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}


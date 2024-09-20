import React from 'react'

export default function Overview() {
  return (    
    <div className="relative w-full h-[500px] bg-gradient-to-b from-green-400 to-green-200 mb-32">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Overveiw</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mt-[-96px]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> 
    </div>   
  );
}


import React, { useState } from 'react'

export default function Collection() {
  const [largeBoxColor, setLargeBoxColor] = useState('bg-green-600');
  const handleColorChange = (colorClass) => {
    setLargeBoxColor(colorClass);
  };

  return (
    <div className="w-full mt-[-132px]">
      <div className="h-[200px] rounded-b-[120px] bg-gradient-to-b from-green-200 to-green-200"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-8 mb-16 mt-[-256px]">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            {/* Large box's*/}
            <div className={`${largeBoxColor} w-72 h-72 rounded-lg mb-4 ml-8`}></div>

            {/* Bootom- Small Boxes */}
            <div className="grid grid-cols-4 gap-4 ml-28">
              <div
                className="bg-green-400 w-20 h-20 rounded-lg border-2 border-black"
                onClick={() => handleColorChange('bg-green-400')}
              ></div>
              <div
                className="bg-purple-300 w-20 h-20 rounded-lg"
                onClick={() => handleColorChange('bg-purple-300')}
              ></div>
              <div
                className="bg-pink-300 w-20 h-20 rounded-lg"
                onClick={() => handleColorChange('bg-pink-300')}
              ></div>
            </div>
          </div>

          {/* Right Side - Small Boxes */}
          <div className="grid grid-cols-1 grid-rows-3 gap-4 -ml-16 mt-4">
            <div
              className="bg-green-800 w-20 h-20 rounded-lg border-4 border-black"
              onClick={() => handleColorChange('bg-green-800')}
            ></div>
            <div
              className="bg-cyan-300 w-20 h-20 rounded-lg"
              onClick={() => handleColorChange('bg-cyan-300')}
            ></div>
            <div
              className="bg-purple-500 w-20 h-20 rounded-lg"
              onClick={() => handleColorChange('bg-purple-500')}
            ></div>
            <div
              className="bg-red-600 w-20 h-20 rounded-lg"
              onClick={() => handleColorChange('bg-red-600')}
            ></div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Collection Featured</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tet ut labore et
            dolore magna aliquip in voluptate velit esse cillum sunt in culpa.
          </p>
        </div>
      </div>
    </div>
  );
}

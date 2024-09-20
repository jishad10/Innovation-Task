import React, { useState, useEffect } from 'react';

export default function Movingbox() {
  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 6); 
    }, 2000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative overflow-hidden h-96 flex justify-center items-end">
      <div className="flex space-x-4 animate-slide">
        <div
          className={`w-40 h-40 bg-red-300 transition-all duration-500 ${
            activeIndex === 0 ? 'w-52 h-52' : ''
          }`}
        />
        <div
          className={`w-40 h-40 bg-purple-300 transition-all duration-500 ${
            activeIndex === 1 ? 'w-52 h-52' : ''
          }`}
        />
        <div
          className={`w-40 h-40 bg-green-300 transition-all duration-500 ${
            activeIndex === 2 ? 'w-52 h-52' : ''
          }`}
        />
        <div
          className={`w-40 h-40 bg-blue-300 transition-all duration-500 ${
            activeIndex === 3 ? 'w-52 h-52' : ''
          }`}
        />
        <div
          className={`w-40 h-40 bg-yellow-300 transition-all duration-500 ${
            activeIndex === 4 ? 'w-52 h-52' : ''
          }`}
        />
        <div
          className={`w-40 h-40 bg-pink-300 transition-all duration-500 ${
            activeIndex === 5 ? 'w-52 h-52' : ''
          }`}
        />
      </div>
    </div>
  );
}

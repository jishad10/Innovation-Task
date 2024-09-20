import React from 'react'

const getColor = (index) => {
  const colors = ['blue', 'green', 'yellow', 'red', 'indigo', 'pink', 'purple', 'teal'];
  return `bg-${colors[index % colors.length]}-200`; 
};

const getGradient = (index) => {
  const gradients = [
    'from-purple-200 to-pink-300',
    'from-blue-600 to-cyan-400',
    'from-green-600 to-lime-200',
    'from-purple-500 to-amber-300',
  ];
  return `bg-gradient-to-br ${gradients[index % gradients.length]}`;
};

const cardData = [
  { title: 'Art stuff', price: '598 TK', stock: '1 of 09' },
  { title: 'Celebrity Stuff', price: '799 TK', stock: '2 of 10' },
  { title: 'Gaming Items', price: '499 TK', stock: '5 of 20' },
  { title: 'Sport Gear', price: '850 TK', stock: '3 of 15' },
  { title: 'Music Albums', price: '700 TK', stock: '6 of 12' },
  { title: 'Digital Art', price: '1200 TK', stock: '4 of 10' },
  { title: 'Photography', price: '999 TK', stock: '8 of 15' },
  { title: 'Limited Edition', price: '1500 TK', stock: '1 of 1' },
];

export default function Discover() {
  return (
    <div className="max-w-7xl mx-auto p-8 mt-24">
      <h2 className="text-3xl font-bold mb-6">Discover More</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">All Categories</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Art</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Celebrities</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Gaming</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Sport</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Music</button>
        <button className="ml-auto bg-gray-100 text-gray-700 px-4 py-2 rounded-full flex items-center">
          <span className="mr-2">All Filters</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-.293.707l-7 7A1 1 0 0112 16v5a1 1 0 01-2 0v-5a1 1 0 01-.293-.707l-7-7A1 1 0 013 8V4z" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className={`shadow-md rounded-lg p-4 ${getColor(index)}`}>
            {/* Card Header */}
            <div className={`relative ${getGradient(index)} h-32 rounded-lg mb-4`}></div>
            {/* User Avatars */}
            <div className="flex -space-x-2 mb-4">
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                alt={`user${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
                alt={`user${index + 2}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://e7.pngegg.com/pngimages/727/48/png-clipart-businessman-businessman.png"
                alt={`user${index + 3}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            {/* Card Content */}
            <div className="card-content">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{card.price}</p>
              <p className="text-xs text-gray-400">{card.stock}</p>
            </div>
            {/* Card Buttons */}
            <div className="flex justify-between mt-4">
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full">DSVBD</button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full">DSVBD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


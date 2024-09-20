import React from 'react'

export default function Signup() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pb-32">
      <div className="grid grid-cols-2 gap-4">
        
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-40 w-40 rounded-lg flex items-center justify-center text-white text-xl ml-12">
          Photo 1
          <img
            src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
            alt="Small image 1"
            className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full border-2 border-white"
          />
        </div>

        <div className='pt-8'>
            <div className="relative bg-green-600  h-40 w-36 rounded-lg flex items-center justify-center text-white text-xl mt-10">
          Photo 2
          <img
            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
            alt="Small image 2"
            className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        </div>

        <div className="relative bg-gradient-to-br from-red-500 to-orange-600 h-32 w-32 rounded-lg flex items-center justify-center text-white text-xl mt-[-16px] ml-20">
          Photo 3
          <img
            src="https://www.betterplace.co.in/blog/wp-content/uploads/2020/10/1.jpg"
            alt="Small image 3"
            className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </div>

      <div className='pl-20'>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <div className="flex justify-center">
        <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full transition">
          Sign Up
        </button>
        </div>
      </div>
    </div>
  );
}


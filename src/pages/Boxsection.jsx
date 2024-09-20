import React from 'react'

export default function Boxsection() {
  return (
   <div className='pb-32'>
    <div class="h-[200px] rounded-b-[120px] bg-slate-800"></div>
    <div>
    <section class="relative">
        <div className='flex justify-center items-center gap-8 mt-[-68px]'>
            <div className='bg-red-600 h-52 w-48 transition-transform duration-300 hover:scale-110'></div>
            <div className='bg-blue-600 h-44 w-48 transition-transform duration-300 hover:scale-110'></div>
            <div className='bg-rose-400 h-52 w-48 transition-transform duration-300 hover:scale-110'></div>
            <div className='bg-teal-300 h-44 w-48 transition-transform duration-300 hover:scale-110'></div>
        </div>
    </section>
    </div>
  </div>
  )
}

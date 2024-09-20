import React from 'react'
import { FaSearch, FaAngleDown } from 'react-icons/fa';

export default function Discover() {
  return (
    <header className='bg-slate-800 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <ul className='flex gap-16'>
          <li className='hidden sm:flex text-white hover:underline items-center gap-2'>
            Home
            <FaAngleDown />
          </li>
          <li className='hidden sm:flex text-white hover:underline items-center gap-2'>
            Event
            <FaAngleDown />
          </li>
          <li className='flex text-white hover:underline items-center gap-2'>
            Contact
            <FaAngleDown />
          </li>
          <li className='flex text-white hover:underline items-center gap-2'>
            Blog
            <FaAngleDown />
          </li>
        </ul>
        <form
          className='bg-slate-100 p-3 rounded-3xl flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
      </div>
      <hr className="border-1 border-slate-700"/>
    </header>
  )
}

"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className='flex justify-between items-center px-16 py-2 bg-dark-green text-white font-medium'>
      <div className='relative w-[60px] h-[60px] overflow-hidden rounded-full'>
        <Image
          src={'/logo_circular.png'}
          alt='Logo Instituto Anhangá'
          width={120}
          height={120}
          className='object-cover scale-150 translate-y-2.5'
        />
      </div>
      <ul className='flex items-center gap-12'>
        <li className='cursor-pointer hover:text-gray-200 transition-colors'>Início</li>
        <li className='relative'>
          <button
            onClick={toggleDropdown}
            className={`flex gap-2 items-center cursor-pointer hover:text-gray-200 transition-all duration-200 ${isDropdownOpen ? 'text-gray-200' : ''
              }`}
          >
            Adote
            <FaChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
              }`} />
          </button>
          {isDropdownOpen && (
            <ul className='absolute top-full left-0 mt-2 bg-white text-dark-green rounded-lg shadow-lg min-w-48 py-2 z-50 animate-in slide-in-from-top-2 duration-200'>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0'>
                Cachorros
              </li>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0'>
                Gatos
              </li>
              <Link href={'/pets'}>
                <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0'>
                  Cachorros e gatos
                </li>
              </Link>
            </ul>
          )}
        </li>
        <li className='cursor-pointer hover:text-gray-200 transition-colors'>Contato</li>
        <li className='px-4 py-2 bg-white text-dark-green rounded-full cursor-pointer hover:bg-gray-100 transition-colors'>
          Faça uma doação
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

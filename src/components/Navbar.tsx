"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const isActive = (path: string) =>
    pathname === path ? 'border-b-2 border-white' : ''

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-2 bg-dark-green text-white font-medium relative">
      {/* Logo */}
      <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] overflow-hidden rounded-full">
        <Image
          src={'/logo_circular.png'}
          alt="Logo Instituto Anhangá"
          width={120}
          height={120}
          className="object-cover scale-150 translate-y-2.5"
        />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex items-center gap-12">
        <Link href={'/'}>
          <li
            className={`cursor-pointer hover:text-gray-200 transition-colors ${isActive(
              '/'
            )}`}
          >
            Início
          </li>
        </Link>

        <li className="relative">
          <button
            onClick={toggleDropdown}
            className={`flex gap-2 items-center cursor-pointer hover:text-gray-200 transition-all duration-200 ${
              isDropdownOpen ? 'text-gray-200' : ''
            }`}
          >
            Adote
            <FaChevronDown
              className={`transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-dark-green rounded-lg shadow-lg min-w-48 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
              <Link href={'/pets/dogs'}>
                <li
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                    isActive('/pets/dogs')
                  }`}
                >
                  Cachorros
                </li>
              </Link>
              <Link href={'/pets/cats'}>
                <li
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                    isActive('/pets/cats')
                  }`}
                >
                  Gatos
                </li>
              </Link>
              <Link href={'/pets'}>
                <li
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                    isActive('/pets')
                  }`}
                >
                  Cachorros e gatos
                </li>
              </Link>
            </ul>
          )}
        </li>

        <Link href={'/contact'}>
          <li
            className={`cursor-pointer hover:text-gray-200 transition-colors ${isActive(
              '/contact'
            )}`}
          >
            Contato
          </li>
        </Link>

        <Link href={'/donate'}>
          <li className="px-4 py-2 bg-white text-dark-green rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            Faça uma doação
          </li>
        </Link>
      </ul>

      {/* Botão Mobile */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-green text-white shadow-lg flex flex-col py-4 gap-4 z-50 animate-in slide-in-from-top-2">
          <Link href={'/'} onClick={toggleMobileMenu}>
            <span
              className={`block px-6 py-2 ${isActive('/')} hover:bg-gray-700`}
            >
              Início
            </span>
          </Link>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between px-6 py-2 hover:bg-gray-700"
          >
            Adote
            <FaChevronDown
              className={`ml-2 transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="flex flex-col">
              <Link href={'/pets/dogs'} onClick={toggleMobileMenu}>
                <span
                  className={`block px-10 py-2 hover:bg-gray-700 ${isActive(
                    '/pets/dogs'
                  )}`}
                >
                  Cachorros
                </span>
              </Link>
              <Link href={'/pets/cats'} onClick={toggleMobileMenu}>
                <span
                  className={`block px-10 py-2 hover:bg-gray-700 ${isActive(
                    '/pets/cats'
                  )}`}
                >
                  Gatos
                </span>
              </Link>
              <Link href={'/pets'} onClick={toggleMobileMenu}>
                <span
                  className={`block px-10 py-2 hover:bg-gray-700 ${isActive(
                    '/pets'
                  )}`}
                >
                  Cachorros e gatos
                </span>
              </Link>
            </div>
          )}
          <Link href={'/contact'} onClick={toggleMobileMenu}>
            <span
              className={`block px-6 py-2 hover:bg-gray-700 ${isActive(
                '/contact'
              )}`}
            >
              Contato
            </span>
          </Link>
          <Link href={'/donate'} onClick={toggleMobileMenu}>
            <span className="block px-6 py-2 bg-white text-dark-green rounded-full mx-6 text-center hover:bg-gray-100">
              Faça uma doação
            </span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

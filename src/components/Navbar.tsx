"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLLIElement>(null)

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

  const isActive = (path: string) =>
    pathname === path ? 'border-b-2 border-white' : ''

  const isActiveMobile = (path: string) =>
    pathname === path ? 'bg-white/10 text-white font-semibold' : ''

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Bloqueia scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 py-2 bg-dark-green text-white font-medium relative z-50">
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
            <li className={`cursor-pointer hover:text-gray-200 transition-colors ${isActive('/')}`}>
              Início
            </li>
          </Link>

          <li className="relative" ref={dropdownRef}>
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
                <Link href={'/pets/dogs'} onClick={() => setIsDropdownOpen(false)}>
                  <li
                    className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${isActive('/pets/dogs')}`}
                  >
                    Cachorros
                  </li>
                </Link>
                <Link href={'/pets/cats'} onClick={() => setIsDropdownOpen(false)}>
                  <li
                    className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${isActive('/pets/cats')}`}
                  >
                    Gatos
                  </li>
                </Link>
                <Link href={'/pets'} onClick={() => setIsDropdownOpen(false)}>
                  <li
                    className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${isActive('/pets')}`}
                  >
                    Cachorros e gatos
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link href={'/contact'}>
            <li className={`cursor-pointer hover:text-gray-200 transition-colors ${isActive('/contact')}`}>
              Contato
            </li>
          </Link>

          <Link href={'/donation'}>
            <li className="px-4 py-2 bg-white text-dark-green rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
              Faça uma doação
            </li>
          </Link>
        </ul>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none z-50 relative transition-transform duration-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Overlay Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Menu Mobile */}
      <div className={`fixed top-[66px] right-0 w-80 max-w-[90vw] h-[calc(100vh-66px)] bg-dark-green text-white shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header do menu */}
          <div className="p-6 border-b border-white/20">
            <h3 className="text-lg font-semibold">Menu</h3>
          </div>

          {/* Links do menu */}
          <div className="flex-1 py-4 overflow-y-auto">
            <Link href={'/'} onClick={toggleMobileMenu}>
              <div className={`flex items-center px-6 py-4 hover:bg-white/10 transition-colors duration-200 ${isActiveMobile('/')}`}>
                <span className="text-base">Início</span>
              </div>
            </Link>

            {/* Dropdown Adote */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-base">Adote</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                isDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-white/5">
                  <Link href={'/pets/dogs'} onClick={() => { setIsDropdownOpen(false); toggleMobileMenu(); }}>
                    <div className={`flex items-center px-10 py-3 hover:bg-white/10 transition-colors duration-200 ${isActiveMobile('/pets/dogs')}`}>
                      <span className="text-sm">Cachorros</span>
                    </div>
                  </Link>
                  <Link href={'/pets/cats'} onClick={() => { setIsDropdownOpen(false); toggleMobileMenu(); }}>
                    <div className={`flex items-center px-10 py-3 hover:bg-white/10 transition-colors duration-200 ${isActiveMobile('/pets/cats')}`}>
                      <span className="text-sm">Gatos</span>
                    </div>
                  </Link>
                  <Link href={'/pets'} onClick={() => { setIsDropdownOpen(false); toggleMobileMenu(); }}>
                    <div className={`flex items-center px-10 py-3 hover:bg-white/10 transition-colors duration-200 ${isActiveMobile('/pets')}`}>
                      <span className="text-sm">Cachorros e gatos</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href={'/contact'} onClick={toggleMobileMenu}>
              <div className={`flex items-center px-6 py-4 hover:bg-white/10 transition-colors duration-200 ${isActiveMobile('/contact')}`}>
                <span className="text-base">Contato</span>
              </div>
            </Link>
          </div>

          {/* Footer do menu com botão de doação */}
          <div className="p-6 border-t border-white/20">
            <Link href={'/donation'} onClick={toggleMobileMenu}>
              <div className="w-full px-6 py-3 bg-white text-dark-green rounded-full text-center font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Faça uma doação
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-dark-brown py-12 px-8 md:px-32 w-full'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-4'>
        
        {/* Logo - Centralizado no mobile */}
        <div className='flex justify-center md:justify-start'>
          <Image 
            src={'/logo_circular.png'} 
            alt='Logo' 
            width={120} 
            height={120}
            className='md:w-[150px] md:h-[150px]'
          />
        </div>

        {/* Menu Explorar */}
        <div className='text-center md:text-left'>
          <ul className='text-white'>
            <li className='font-medium text-lg mb-4 text-white/90'>Explorar</li>
            <li className='mb-2 hover:text-white/80 cursor-pointer transition-colors'>Início</li>
            <li className='mb-2 hover:text-white/80 cursor-pointer transition-colors'>Adote</li>
            <li className='mb-2 hover:text-white/80 cursor-pointer transition-colors'>Contato</li>
            <li className='mb-2 hover:text-white/80 cursor-pointer transition-colors'>Faça uma doação</li>
          </ul>
        </div>

        {/* Contato */}
        <div className='text-center md:text-left'>
          <ul className='text-white'>
            <li className='font-medium text-lg mb-4 text-white/90'>Contato</li>
            <li className='mb-2 break-all text-sm md:text-base'>comunicaanhanga@gmail.com</li>
            <li className='mb-4 text-sm md:text-base'>telefone</li>
            
            {/* Redes sociais */}
            <li>
              <div className="flex gap-4 text-2xl justify-center md:justify-start">
                <FaInstagram className='cursor-pointer hover:text-white/80 transition-colors'/>
                <FaFacebook className='cursor-pointer hover:text-white/80 transition-colors'/>
              </div>
            </li>
          </ul>
        </div>

        {/* Selo - Centralizado no mobile */}
        <div className='flex justify-center md:justify-start items-start'>
          <a href="https://bliiv.com.br/" target="_blank" rel="noopener noreferrer">
            <img 
              className='w-24 md:w-32 hover:opacity-80 transition-opacity' 
              src="https://anhanga.apoiar.co/img/seal.png" 
              alt="Selo Bliiv"
            />
          </a>
        </div>

      </div>

      {/* Linha divisória opcional */}
      <div className='border-t border-white/20 mt-8 pt-6'>
        <p className='text-white/80 text-center text-sm'>
          © 2025 Anhanga. Todos os direitos reservados
        </p>
        <p className='text-white/60 text-center text-sm'>
          Site desenvolvido por Sofia Passos
        </p>
      </div>
    </footer>
  )
}

export default Footer
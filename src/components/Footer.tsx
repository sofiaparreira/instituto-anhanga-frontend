import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-dark-brown py-12 px-32 grid grid-cols-4 '>
      <Image src={'/logo_circular.png'} alt='Logo'  width={150} height={150}/>


      <ul className='text-white'>
        <li className='font-medium text-lg mb-4'>Explorar</li>
        <li>Início</li>
        <li>Adote</li>
        <li>Contato</li>
        <li>Faça uma doação</li>
      </ul>


       <ul className='text-white'>
        <li className='font-medium text-lg mb-4'>Contato</li>
        <li>comunicaanhanga@gmail.com</li>
        <li>telefone</li>
        <div className="mt-4 flex gap-3 text-xl">
          <FaInstagram className='cursor-pointer'/>
          <FaFacebook className='cursor-pointer'/>
        </div>


      </ul>
              <a href="https://bliiv.com.br/" target="_blank" ><img className='w-32' src="https://anhanga.apoiar.co/img/seal.png" /></a>

      
    </footer>
  )
}

export default Footer

import DonationCard from '@/components/card/DonationCard'
import Image from 'next/image'
import React from 'react'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { PiPillFill } from 'react-icons/pi'
import { TbVaccine } from 'react-icons/tb'

const page = () => {
  return (
    <main className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-6 sm:py-8 lg:py-16 max-w-7xl mx-auto'>
      <Image
        className="rounded-lg w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover object-center"
        src="/banner-donation.png"
        alt="Banner"
        width={1500}
        height={1500}
      />

      <section className='py-6 sm:py-8'>
        <DonationCard />
      </section>

      <section className='py-6 sm:py-8'>
        <h2 className='text-base sm:text-lg font-semibold mb-3 sm:mb-2 text-dark-green'>
          Qualquer valor faz diferença!
        </h2>
        <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
          Mas doação não é só dinheiro! Você também pode nos ajudar com: jornais, sacos de lixo, material de limpeza, sacos de ração, cobertores, voluntariado, divulgação nas redes sociais, entre outros.
        </p>
      </section>

      <hr className='border-gray-300 my-4 sm:my-6' />

      <section className='py-6 sm:py-8'>
        <h2 className='text-base sm:text-lg font-semibold mb-6 sm:mb-8 text-center sm:text-left'>
          Como sua doação faz a diferença
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className='p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow'>
            <TbVaccine className='text-2xl sm:text-3xl text-green-600 mb-3' />
            <h3 className='font-semibold text-sm sm:text-base mt-2 mb-3'>
              Com R$20, você ajuda com uma vacina
            </h3> 
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
              Com esse valor você garante a proteção de 1 cão ou gato contra doenças graves.
            </p>
          </div>

          <div className='p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow'>
            <GiOpenedFoodCan className='text-2xl sm:text-3xl text-orange-600 mb-3' />
            <h3 className='font-semibold text-sm sm:text-base mt-2 mb-3'>
              Com R$50, você ajuda com um saco de ração
            </h3> 
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
              Com esse valor você alimenta 1 cão ou gato por 1 mês inteiro.
            </p>
          </div>

          <div className='p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1'>
            <PiPillFill className='text-2xl sm:text-3xl text-blue-600 mb-3' />
            <h3 className='font-semibold text-sm sm:text-base mt-2 mb-3'>
              Com R$100, você garante 4 vermífugos
            </h3> 
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
              Esse valor protege 4 cães ou gatos contra verminoses, melhorando a saúde e qualidade de vida deles.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
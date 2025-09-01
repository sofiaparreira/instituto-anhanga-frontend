import DonationCard from '@/components/card/DonationCard'
import Image from 'next/image'
import React from 'react'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { PiPillFill } from 'react-icons/pi'
import { TbVaccine } from 'react-icons/tb'

const page = () => {
  return (
    <main className='px-88 py-8'>
<Image
  className="rounded-lg w-full h-64 object-cover object-center"
  src="/banner-donation.png"
  alt="Banner"
  width={1500}
  height={1500}
/>

        <section className='py-8'>
            <DonationCard />
        </section>

        <section className='py-8'>
                    <h2 className='text-lg font-semibold mb-2 text-dark-green'>Qualquer valor faz diferença!</h2>
                    <p>Mas doação não é só dinheiro! Você também pode nos ajudar com: jornais, sacos de lixo, material de limpeza, sacos de ração, cobertores, voluntariado, divulgação nas redes sociais, entre outros.</p>

        </section>

        <hr className='text-gray-300 ' />

        <section className='py-8'>
          <h2 className='text-lg font-semibold'>Como sua doação faz a diferença</h2>
          <div className="grid grid-cols-3 gap-8 py-8">

            <div className='p-4 rounded-lg border border-gray-200'>
              <TbVaccine className='text-2xl' />
              <h3 className='font-semibold text-sm mt-4 mb-2'>Com R$20, você ajuda com uma vacina</h3> 
              <p className='text-sm text-gray-600'>Com esse valor você garante a proteção de 1 cão ou gato contra doenças graves.</p>
            </div>

            <div className='p-4 rounded-lg border border-gray-200'>
              <GiOpenedFoodCan className='text-2xl' />
              <h3 className='font-semibold text-sm mt-4 mb-2'>Com R$50, você ajuda com um saco de ração</h3> 
              <p className='text-sm text-gray-600'>Com esse valor você alimenta 1 cão ou gato por 1 mês inteiro.</p>
            </div>

            <div className='p-4 rounded-lg border border-gray-200'>
              <PiPillFill className='text-2xl' />
              <h3 className='font-semibold text-sm mt-4 mb-2'>Com R$100, você garante 4 vermífugos</h3> 
              <p className='text-sm text-gray-600'>Esse valor protege 4 cães ou gatos contra verminoses, melhorando a saude e qualidade de vida deles.</p>
            </div>

          </div>
        </section>

        
      
    </main>
  )
}

export default page

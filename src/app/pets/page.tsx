"use client"

import React from 'react'
import PetCard from '@/components/card/PetCard'
import useAllPetsViewModel from './useAllPetsViewModel'

const Page = () => {
  const { pets } = useAllPetsViewModel()

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 sm:py-12 lg:py-16">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
        Cachorros e gatos prontos para um lar
      </h1>

      {pets?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {pets.map((pet) => (
            <PetCard isAdm={false} key={pet._id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-48 sm:h-56 lg:h-64">
          <p className="text-base sm:text-lg text-gray-600 text-center px-4">
            Nenhum animal para adoção no momento
          </p>
        </div>
      )}
    </main>
  )
}

export default Page
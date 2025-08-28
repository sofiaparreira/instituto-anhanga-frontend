"use client"

import React from 'react'
import PetCard from '@/components/card/PetCard'
import useDogViewModel from './useDogViewModel'

const Page = () => {
  const { pets } = useDogViewModel()

  return (
    <main className="px-32 py-16">
      <h1 className="text-xl font-semibold mb-16">Cães prontos para um lar</h1>

      {pets?.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {pets.map((pet) => (
            <PetCard isAdm={false} key={pet._id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">Nenhum cão para adoção no momento</p>
        </div>
      )}
    </main>
  )
}

export default Page

"use client"


import React from 'react'
import useAllPetsViewModel from './useAllPetsViewModel'
import PetCard from '@/components/card/PetCard'

const page = () => {

    const {
        pets
    } = useAllPetsViewModel()
  return (
    
   <main className="px-32 py-16">
      <h1 className="text-xl font-semibold mb-16">Cães prontos para um lar</h1>

      {pets?.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {pets.map((pet) => (
            <PetCard isAdm={true} key={pet._id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">Nenhum animal para adoção no momento</p>
        </div>
      )}
    </main>
  )
}

export default page

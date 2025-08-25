"use client"


import React from 'react'
import useAllPetsViewModel from './useAllPetsViewModel'
import PetCard from '@/components/PetCard'

const page = () => {

    const {
        pets
    } = useAllPetsViewModel()
  return (
    
    <main className='px-32 py-16'>
        <h1 className="text-xl font-semibold mb-16">Cães e gatos prontos para um lar</h1>


        <div className="grid grid-cols-5 gap-4">
           {pets?.length > 0 ? (
                    pets.map((pet) => <PetCard isAdm={true} key={pet._id} pet={pet} />)
                ) : (
                    <p>Nenhum pet encontrado</p>
                )}
        </div>
      
    </main>
  )
}

export default page

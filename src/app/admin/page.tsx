"use client"

import React from 'react'
import usePetsViewModel from './usePetsViewModel'
import Loading from '@/components/Loading'
import PetCard from '@/components/card/PetCard'
import ButtonDefault from '@/components/buttons/ButtonDefault'
import { FaPlus } from 'react-icons/fa'

const AdminPage = () => {

    const {
        isLoading,
        pets,
        deletePet,
        router
    } = usePetsViewModel()


    return (
        <main className='px-32 py-16'>
            <div className='flex justify-between items-center py-2 border-b border-gray-200  mb-16'>
                <h1 className='text-xl font-semibold'>Todos os pets</h1>
                <div className="w-fit">
                    <ButtonDefault onClick={() => router.push("/admin/create")} prefix={<FaPlus className='text-sm' />} text='Cadastrar Pet' />
                </div>
            </div>
            <section className='grid grid-cols-5 gap-8'>

                {pets?.length > 0 ? (
                    pets.map((pet) =>
                        <PetCard
                            key={pet._id}
                            pet={pet}
                            isAdm={true}
                            onDelete={() => {
                                if (pet._id !== undefined) deletePet(pet._id)
                            }}
                        />)
                ) : (
                    <p>Nenhum pet encontrado</p>
                )}

            </section>

            {isLoading && (
                <Loading />
            )}
        </main>
    )
}

export default AdminPage

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
        <main className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 sm:py-12 lg:py-16'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 border-b border-gray-200 mb-8 sm:mb-12 lg:mb-16'>
                <h1 className='text-lg sm:text-xl lg:text-2xl font-semibold text-center sm:text-left'>
                    Todos os pets
                </h1>
                <div className="w-full sm:w-fit">
                    <ButtonDefault 
                        onClick={() => router.push("/admin/create")} 
                        prefix={<FaPlus className='text-sm' />} 
                        text='Cadastrar Pet'
                    />
                </div>
            </div>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
                {pets?.length > 0 ? (
                    pets.map((pet) =>
                        <PetCard
                            key={pet._id}
                            pet={pet}
                            isAdm={true}
                            onDelete={() => {
                                if (pet._id !== undefined) deletePet(pet._id)
                            }}
                            onEdit={() => router.push(`/admin/create?id=${pet._id}`)}
                        />)
                ) : (
                    <div className="col-span-full flex justify-center items-center py-16 sm:py-20 lg:py-24">
                        <div className="text-center">
                            <p className="text-base sm:text-lg text-gray-600 mb-4">
                                Nenhum pet encontrado
                            </p>
                            <p className="text-sm text-gray-500">
                                Clique em "Cadastrar Pet" para adicionar o primeiro pet
                            </p>
                        </div>
                    </div>
                )}
            </section>

            {isLoading && (
                <Loading />
            )}
        </main>
    )
}

export default AdminPage
"use client"
import React from 'react'
import useGetPetByIdViewModel from './useGetPetByIdViewModel'
import Image from 'next/image'
import { FaVenusMars, FaHourglassEnd } from 'react-icons/fa'
import { TbVaccine } from 'react-icons/tb'
import { PiPillFill } from 'react-icons/pi'
import { LuRuler } from 'react-icons/lu'
import { GiScalpel } from 'react-icons/gi'
import ButtonDefault from '@/components/buttons/ButtonDefault'

const DetailPage = () => {

    const {
        pet
    } = useGetPetByIdViewModel()


    return (
        <main className='px-64 py-16'>
            <section className='grid grid-cols-2 gap-28'>

                <Image
                    className="rounded-2xl object-cover w-full max-h-[500px]"
                    src={pet.fotoUrl}
                    width={500}
                    height={500}
                    alt={`Foto de ${pet.nome}`}
                    priority
                />

                <div className='flex flex-col justify-between mt-12' >

                    <div className='flex items-center gap-8 mb-12'>
                        <h2 className='text-2xl font-semibold border-b-2 border-gray-300 w-fit pr-2 first-letter:uppercase'>{pet.nome}</h2>
                        <span className='px-3 py-1 bg-gray-100 text-sm font-medium rounded-full'>{pet.tipo}</span>

                    </div>

                    <div className="space-y-3">
                        <div className='flex items-center gap-3'>
                            <FaVenusMars className='text-medium-green text-xl'/>
                            <span className='font-medium'>Sexo: </span> {pet.sexo}
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaHourglassEnd className='text-medium-green text-base'/>
                            <span className='font-medium'>Idade: </span> {pet.idade} {pet.idadeUnidade}
                        </div>
                        <div className='flex items-center gap-3'>
                            <LuRuler className='text-medium-green text-xl' />
                            <span className='font-medium'>Porte: </span> {pet.sexo}
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiScalpel className='text-medium-green text-xl' />
                            <span className='font-medium'>É castrado? </span> {pet.isCastrado ? "Sim" : "Não"}
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiPillFill className='text-medium-green text-xl' />
                            <span className='font-medium'>É vermifugado? </span> {pet.isCastrado ? "Sim" : "Não"}
                        </div>
                        <div className='flex items-center gap-3'>
                            <TbVaccine className='text-medium-green text-xl' />
                        
                            <span className='font-medium'>É vacinado? </span> {pet.isCastrado ? "Sim" : "Não"}
                        </div>
                    </div>


                    <div className='mt-8'>
                        <ButtonDefault text='Quero adotar' onClick={() => {}} />
                        <p className='text-sm text-gray-600 mt-2'>Ao clicar no botão abaixo, você será redirecionado para um de nossos cuidadores para iniciar o processo de adoção</p>
                    </div>



                </div>

            </section>

            <section className='mt-16'>
                <h2 className='text-xl text-dark-green font-semibold'>Minha descrição: </h2>
                <p className='mt-2'>{pet.descricao}</p>
            </section>
        </main>
    )
}

export default DetailPage

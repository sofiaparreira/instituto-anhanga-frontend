import { IPet } from '@/app/types/petType';
import Image from 'next/image'
import React from 'react'
import ItemPetCard from './ItemPetCard';
import { FaHourglassEnd, FaTrash } from 'react-icons/fa';
import ButtonDefault from './buttons/ButtonDefault';
import { FaPenToSquare, FaSquarePen } from 'react-icons/fa6';

interface PetCardProp {
    pet: IPet;
    isAdm?: boolean;
}
const PetCard: React.FC<PetCardProp> = ({ pet, isAdm }) => {
    return (
        <div className='p-2 flex flex-col gap-4 border border-gray-200 rounded-lg shadow-lg shadow-gray-100'>
            {isAdm && (
                <div className="flex gap-2 justify-end">
                    <button className='flex flex-col justify-center items-center p-2.5 cursor-pointer border border-orange-100 rounded-full bg-orange-50 text-orange-600'><FaPenToSquare className='text-sm'/></button>
                    <button className='flex flex-col justify-center items-center p-2.5 cursor-pointer border border-red-100 rounded-full bg-red-50 text-red-600'><FaTrash className='text-sm'/></button>
                </div>
            )}
            <div className='relative w-full h-48'>
                <Image
                    src={pet.fotoUrl}
                    alt='Image Pet'
                    fill
                    className='object-cover rounded-lg'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <div className='space-y-4 p-1'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold border-b-2 border-gray-300 w-fit pr-2 first-letter:uppercase'>{pet.nome}</h2>
                    <span className='px-3 py-1 bg-gray-100 text-sm font-medium rounded-full'>{pet.tipo}</span>
                </div>

                <div className='space-y-1'>
                    <ItemPetCard
                        icon={<FaHourglassEnd />}
                        label='Sexo'
                        text={pet.sexo} />
                    <ItemPetCard
                        icon={<FaHourglassEnd />}
                        label='Idade'
                        text={`${pet.idade} ${pet.idadeUnidade}`} />
                    <ItemPetCard
                        icon={<FaHourglassEnd />}
                        label='Porte'
                        text={pet.porte} />
                </div>
                <ButtonDefault text='Detalhes' />
            </div>
        </div>
    )
}

export default PetCard

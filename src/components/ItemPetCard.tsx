import React, { ReactNode } from 'react'
import ButtonDefault from './buttons/ButtonDefault';

interface ItemPetCardProp {
    text: string | number;
    label:string;
    icon: ReactNode
}
const ItemPetCard:React.FC<ItemPetCardProp> = ({icon, text, label}) => {
  return (
    <div className='flex gap-3 text-sm'>
      <span className='text-medium-green'>{icon}</span>
      <span className='font-medium'>{label}: </span>
      <span>{text}</span>

      
    </div>
    
  )
}

export default ItemPetCard

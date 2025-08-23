import React from 'react'

interface ButtonDefaultProp {
    text:string;
    onClick:() => void;
}
const ButtonDefault:React.FC<ButtonDefaultProp> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='rounded-full py-2.5 px-4 bg-dark-green w-full text-white font-medium text-sm'>
        {text}
    </button>
  )
}

export default ButtonDefault

import React, { ReactNode } from 'react'

interface ButtonDefaultProp {
  text: string;
  onClick?: () => void;
  prefix?: ReactNode;
  className?: string;
  type?: "submit" | "button"
}
const ButtonDefault: React.FC<ButtonDefaultProp> = ({ text, onClick, prefix, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={`${className ?? 'text-white hover:bg-medium-green'} rounded-full py-2.5 px-6 bg-dark-green w-full font-medium text-sm flex items-center justify-center gap-3 cursor-pointer  duration-300 `}>
      {prefix && (
        <span className='text-lg'>{prefix}</span>
      )}
      {text}
      
    </button>
  )
}

export default ButtonDefault

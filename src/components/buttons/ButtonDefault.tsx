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
    <button type={type} onClick={onClick} className={`${className} rounded-full py-2.5 px-4 bg-dark-green w-full text-white font-medium text-sm flex items-center justify-center gap-3 cursor-pointer hover:bg-medium-green duration-300 `}>
      {prefix && (
        <span className='text-lg'>{prefix}</span>
      )}
      {text}
      
    </button>
  )
}

export default ButtonDefault

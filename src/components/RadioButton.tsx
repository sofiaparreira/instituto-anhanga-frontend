import React from 'react'

interface CustomRadioProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ 
  id, 
  name, 
  value, 
  checked, 
  onChange, 
  label, 
  disabled = false 
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          disabled={disabled}
          className="sr-only" // Esconde o input nativo
        />
        <label
          htmlFor={id}
          className={`
            relative flex items-center justify-center w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-200
            ${checked 
              ? 'border-dark-green bg-dark-green' 
              : 'border-gray-300 bg-white hover:border-dark-green'
            }
            ${disabled 
              ? 'opacity-50 cursor-not-allowed hover:border-gray-300' 
              : 'hover:shadow-sm'
            }
          `}
        >
          {/* Círculo interno quando selecionado */}
          <div
            className={`
              w-2 h-2 rounded-full bg-white transition-all duration-200 transform
              ${checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `}
          />
        </label>
      </div>
      
      {/* Label do texto */}
      <label
        htmlFor={id}
        className={`
          text-sm font-medium cursor-pointer transition-colors duration-200
          ${checked ? 'text-dark-green' : 'text-gray-700'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-dark-green'}
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default CustomRadio


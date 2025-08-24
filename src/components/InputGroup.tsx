import React from 'react'

interface InputGroupProp {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string | "text";
    isRequired?: boolean;
}

const InputGroup: React.FC<InputGroupProp> = ({ type, label, onChange, isRequired }) => {
    return (
        <div className='space-y-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                {label} {isRequired && (<span className='text-sm text-red-600'>*</span>)}
            </label>
            <div className="">
                <input
                    onChange={onChange}
                    type={type}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 ring ring-gray-300 outline-none placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-gray-400 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

export default InputGroup

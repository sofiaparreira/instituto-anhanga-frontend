import React from 'react'

interface InputGroupProp {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string | "text"
}

const InputGroup: React.FC<InputGroupProp> = ({ type, label, onChange }) => {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            <div className="">
                <input
                    onChange={onChange}
                    type={type}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-dark-green sm:text-sm/6"
                />
            </div>
        </div>
    )
}

export default InputGroup

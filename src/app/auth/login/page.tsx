"use client"

import ButtonDefault from '@/components/buttons/ButtonDefault'
import InputGroup from '@/components/InputGroup'
import Image from 'next/image'
import React from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdLogIn } from "react-icons/io";
import useLoginViewModel from './useLoginViewModel'


const LoginPage = () => {

    const {
        user, setUser, handleLogin
    } = useLoginViewModel();

    return (
        <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-8">
                <Image className='mx-auto' src={'/logo.png'} alt='Logo Instituto Anhanga' width={150} height={150} />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Faça login na sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin}  method="POST" className="space-y-6">
                    <InputGroup 
                        label='E-mail' 
                        onChange={(e) => {
                            setUser((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }} 
                    />

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                onChange={(e) => {
                                    setUser((prev) => ({
                                        ...prev,
                                        senha: e.target.value
                                    }))
                                }}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-dark-green sm:text-sm/6"
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                
                            >
                                <FaEye />
                            </button>
                        </div>
                    </div>

                    <div>
                       <ButtonDefault text='Login' prefix={<IoMdLogIn />} onClick={() => {}}/>
                    </div>
                </form>


            </div>
        </main>
    )
}

export default LoginPage

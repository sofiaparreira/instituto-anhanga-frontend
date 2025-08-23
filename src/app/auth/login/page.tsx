"use client"

import ButtonDefault from '@/components/buttons/ButtonDefault'
import Image from 'next/image'
import React from 'react'
import { FaEye } from 'react-icons/fa'

const LoginPage = () => {
    return (
        <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-8">
                <Image className='mx-auto' src={'/logo.png'} alt='Logo Instituto Anhanga' width={150} height={150} />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Faça login na sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-dark-green sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-dark-green sm:text-sm/6"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                onClick={() => {
                                    // Adicione sua lógica aqui para alternar entre password/text
                                    // Exemplo: setShowPassword(!showPassword)
                                }}
                            >
                                <FaEye />
                            </button>
                        </div>
                    </div>

                    <div>
                       <ButtonDefault text='Login' onClick={() => {}}/>
                    </div>
                </form>


            </div>
        </main>
    )
}

export default LoginPage

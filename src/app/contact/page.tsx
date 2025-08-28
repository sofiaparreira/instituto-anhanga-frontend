"use client"

import InputGroup from '@/components/InputGroup'
import React from 'react'
import useContactViewModel from './useContactViewModel'
import ButtonDefault from '@/components/buttons/ButtonDefault'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import { FaFacebook, FaGlobe, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";


const ContactPage = () => {

    const {
        setContact, contact, postContact
    } = useContactViewModel();

    return (
        <main className='py-16 w-1/2 mx-auto'>
            <h1 className='text-xl font-semibold text-dark-green'>Entre em contato</h1>
            <p className='mb-16'>Caso tenha alguma dúvida ou precisar de ajuda, entre em contato. Estamos aqui para ajudar!</p>

            <form onSubmit={postContact} className='space-y-4' action="">
                <InputGroup
                    label='Nome completo'
                    value={contact.nome}
                    onChange={(e) => {
                        setContact((prev) => ({
                            ...prev,
                            nome: e.target.value
                        }))
                    }}
                    isRequired={true} />

                <div className="grid grid-cols-2 gap-3">
                    <InputGroup
                        label='E-mail'
                        value={contact.email}
                        onChange={(e) => {
                            setContact((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }}
                        isRequired={true} />
                    <InputGroup
                        label='Telefone'
                        value={contact.telefone}
                        onChange={(e) => {
                            setContact((prev) => ({
                                ...prev,
                                telefone: e.target.value
                            }))
                        }}
                        isRequired={false} />
                </div>

                <div className='space-y-1'>
                    <label className='block text-sm font-medium text-gray-800' htmlFor="">Mensagem</label>
                    <textarea
                        value={contact.mensagem}
                        onChange={(e) => {
                            setContact((prev) => ({
                                ...prev,
                                mensagem: e.target.value
                            }))
                        }} 
                        className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 ring ring-gray-300 outline-none placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-gray-400 sm:text-sm/6 min-h-40' name="" id=""></textarea>
                </div>

                <div className="w-1/3 ml-auto flex justify-end items-center">
                    <ButtonDefault type='submit' text="Detalhes" />
                </div>

            </form>


            <section className='mt-8'>
                <h2 className='text-xl font-semibold'>Outras formas de contato</h2>

                <div className="flex flex-col gap-4 mt-8">


                    <div className='flex gap-4 items-center'>
                        <div className='w-8 h-8 bg-gray-200 rounded-md text-gray-800 flex justify-center items-center'><MdEmail/></div>
                        <span className="flex flex-col">
                            <p className='text-sm font-medium'>Email</p>
                            <p className='text-sm text-gray-700'>comunicaanhanga@gmail.com</p>
                        </span>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div className='w-8 h-8 bg-gray-200 rounded-md text-gray-800 flex justify-center items-center'><FaPhone /></div>
                        <span className="flex flex-col">
                            <p className='text-sm font-medium'>Telefone</p>
                            <p className='text-sm text-gray-700'>comunicaanhanga@gmail.com</p>
                        </span>
                    </div>

                    <div>
                        <div className='flex gap-4 items-cente'>
                            <div className='w-8 h-8 bg-gray-200 rounded-md text-gray-800 flex justify-center items-center'><FaGlobe /></div>
                            <span className="flex flex-col">
                                <p className='text-sm font-medium'>Redes sociais</p>
                                <p className='text-sm text-gray-700'>Siga-nos nas redes sociais</p>
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <Link target='_blank' href={''} className='ml-12 mt-3 w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer text-gray-800'>
                                <FaInstagram className='text-lg'/>
                            </Link>
                             <Link target='_blank' href={''} className='mt-3 w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer text-gray-800'>
                                <FaYoutube className='text-lg'/>
                            </Link>

                             <Link target='_blank' href={''} className='mt-3 w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer text-gray-800'>
                                <FaFacebook className='text-lg'/>
                            </Link>
                        </div>
                    </div>

                    


                </div>
            </section>

        </main>
    )
}

export default ContactPage

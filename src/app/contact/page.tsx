"use client"

import InputGroup from '@/components/InputGroup'
import React from 'react'
import useContactViewModel from './useContactViewModel'

const ContactPage = () => {

    const {
        setContact, contact
    } = useContactViewModel();

    return (
        <main className='mx-32'>
            <h1 className='text-xl font-semibold text-dark-green'>Entre em contato</h1>
            <p>Caso tenha alguma dúvida ou precisar de ajuda, entre em contato. Estamos aqui para ajudar!</p>

            <form action="">
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
            </form>

        </main>
    )
}

export default ContactPage

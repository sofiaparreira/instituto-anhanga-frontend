import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'


interface DonationCardProp {
    className?: string;
}
const DonationCard:React.FC<DonationCardProp> = ({className}) => {
    return (
        <div className={`flex justify-between rounded-lg ${className}`}>
            <div>
                <h1 className='text-xl font-semibold text-dark-green'>Ajude nossa missão</h1>
                <p className='text-sm text-gray-600'>Sua doação ajuda a comprar ração, pagar vacinas e garantir o bem-estar dos nossos animais. Qualquer valor faz diferença!</p>
                <div className='flex justify-between items-center px-4 py-3 my-4 border border-gray-100 rounded-lg'>
                    <div className='flex flex-col text-sm gap-1'>
                        <span className='text-gray-600'>Chave PIX</span>
                        <span className='font-medium'>36278602000152</span>
                    </div>
                    <IoCopyOutline className='cursor-pointer' />
                </div>
                <p className='text-sm text-gray-600'>Escaneie o QR Code com o app do seu banco ou copie a chave Pix acima</p>
            </div>

            <div>
                qrcode
            </div>
        </div>
    )
}

export default DonationCard

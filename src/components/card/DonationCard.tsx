import Image from 'next/image';
import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'

interface DonationCardProp {
    className?: string;
}

const DonationCard: React.FC<DonationCardProp> = ({ className }) => {
    return (
        <div>
            <div className={`flex flex-col gap-6 rounded-lg ${className}`}>
                <div>
                    <h1 className='text-lg sm:text-xl font-semibold text-dark-green mb-4'>Ajude nossa missão</h1>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                        A <strong>Risu</strong> é nossa plataforma de doações recorrentes.
                        Com ela, você pode contribuir de forma prática e segura, além de nos ajudar a acompanhar melhor as doações e agradecer cada apoiador. ❤️
                    </p>

                    <a
                        href="https://anhanga.apoiar.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 sm:px-8 rounded-full bg-green-600 text-white text-sm sm:text-base font-medium hover:bg-green-700 transition-colors shadow-md w-full sm:w-auto text-center"
                    >
                        DOAR PELA RISU
                    </a>
                </div>

                <div className='flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-16 items-start lg:items-center'>
                    <div className='lg:col-span-3'>
                        <h2 className='text-base sm:text-lg font-semibold text-dark-green mt-4'>Prefere doar via Pix?</h2>
                        <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                            Se preferir, você também pode doar diretamente pelo Pix usando nossa chave:
                        </p>
                        
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-3 border border-gray-100 rounded-lg mb-4'>
                            <div className='flex flex-col text-sm gap-1 mb-2 sm:mb-0'>
                                <span className='text-gray-600'>Chave PIX (CNPJ):</span>
                                <span className='font-medium text-base'>36.278.602/0001-52</span>
                            </div>
                            <IoCopyOutline 
                                className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors self-end sm:self-center' 
                                size={20}
                            />
                        </div>
                        
                        <p className='text-sm text-gray-600 leading-relaxed'>
                            Escaneie o QR Code com o app do seu banco ou copie a chave Pix acima.
                        </p>
                    </div>
                 
                    <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
                        <Image 
                            src={'/qrcode.png'} 
                            alt="QR Code Pix" 
                            width={150} 
                            height={150} 
                            className='rounded-lg sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationCard
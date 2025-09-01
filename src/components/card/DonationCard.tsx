import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'

interface DonationCardProp {
    className?: string;
}

const DonationCard: React.FC<DonationCardProp> = ({ className }) => {
    return (
        <div>
            <div className={`flex flex-col gap-6 rounded-lg ${className}`}>
                {/* Destaque para a Risu */}
                <div>
                    <h1 className='text-xl font-semibold text-dark-green mb-4'>Ajude nossa missão</h1>
                    <p className='text-sm text-gray-600'>
                        A <strong>Risu</strong> é nossa plataforma de doações recorrentes.
                        Com ela, você pode contribuir de forma prática e segura, além de nos ajudar a acompanhar melhor as doações e agradecer cada apoiador. ❤️
                    </p>

                    <a
                        href="https://anhanga.apoiar.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-8 py-3 rounded-full bg-green-600 text-white text-base font-medium hover:bg-green-700 transition-colors shadow-md"
                    >
                        DOAR PELA RISU
                    </a>
                </div>

                {/* PIX como alternativa */}
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-lg font-semibold text-dark-green mt-4'>Prefere doar via Pix?</h2>
                        <p className='text-sm text-gray-600'>
                            Se preferir, você também pode doar diretamente pelo Pix usando nossa chave:
                        </p>
                        <div className='flex justify-between items-center px-4 py-3 my-4 border border-gray-100 rounded-lg'>
                            <div className='flex flex-col text-sm gap-1'>
                                <span className='text-gray-600'>Chave PIX (CNPJ):</span>
                                <span className='font-medium'>36.278.602/0001-52</span>
                            </div>
                            <IoCopyOutline className='cursor-pointer' />
                        </div>
                        <p className='text-sm text-gray-600'>
                            Escaneie o QR Code com o app do seu banco ou copie a chave Pix acima.
                        </p>
                    </div>
                    <div className="flex justify-center mt-4">
                        {/* Substituir por uma imagem real de QR Code */}
                        qrcode
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationCard

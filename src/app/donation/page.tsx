import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='px-32 py-8'>
        <Image className='' src={'/banner-donation.png'} alt='Banner' width={300} height={300}/>

        <section>
            <h1 className='text-xl font-semibold text-dark-green'>Ajude nossa missão</h1>


        </section>
      
    </main>
  )
}

export default page

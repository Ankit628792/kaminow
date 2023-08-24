import React from 'react'
import QR from '../../assets/qr.png'
import Profile from '../../assets/profile.jpg'
import Mail from '../../assets/gmail.png'

function Contact() {
    return (
        <main className='flex-grow'>
            <div className='bg-gradient h-48 flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-10 dragon tracking-widest'>Contact</h1>
            </div>

            <section className='flex flex-col items-center justify-center py-10'>
                <div className='w-60 h-60 rounded-full overflow-hidden shadow-lg'>
                    <img src={Profile?.src || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"} className='w-full h-full object-cover filter saturate-200' alt="" />
                </div>
                <h1 className='text-2xl xl:text-4xl font-medium mt-4'>Yash Kumar</h1>
                <p className='text-lg text-gray-500 leading-loose'>Graphic Designer</p>
                <div className='flex items-center gap-3 max-w-max'>
                    <img src={Mail.src} className='w-6 h-6' alt="" />
                <p className='text-lg text-sky-500'>ymaurya.workshop@gmail.com</p>
                </div>

                <h1 className='text-xl text-gradient mt-10 mb-2 font-medium'>Connect on Instagram</h1>
                <img src={QR.src} alt="" loading='lazy' className='w-80 h-80 mb-10' />

            </section>

        </main>
    )
}

export default Contact
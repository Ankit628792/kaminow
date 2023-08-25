import React from 'react'
import QR from '../../assets/qr.png'
import Profile from '../../assets/man.png'
import Mail from '../../assets/gmail.png'

function Contact() {
    return (
        <main className='flex-grow'>
            <div className='bg-gradient h-48 flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-10 dragon tracking-widest'>Contact</h1>
            </div>

            <section className='flex flex-col items-center justify-center py-10'>
                <div className='w-60 h-60 rounded-full overflow-hidden'>
                    <img src={Profile?.src || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"} className='w-full h-full object-cover filter drop-shadow-lg' alt="" />
                </div>
                <h1 className='text-2xl xl:text-4xl font-medium mt-4'>Yash Kumar</h1>
                <p className='text-lg text-gray-500 leading-loose'>Graphic Designer</p>
                <div className='flex items-center gap-2 max-w-max'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-sky-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <p className='text-lg text-sky-500 font-medium'>ymaurya.workshop@gmail.com</p>
                </div>

                <h1 className='text-xl text-gradient mt-10 mb-2 font-medium'>Connect on Instagram</h1>
                <img src={QR.src} alt="" loading='lazy' className='w-80 h-80 mb-10' />

            </section>

        </main>
    )
}

export default Contact
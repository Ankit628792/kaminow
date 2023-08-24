import React from 'react'

function Contact() {
    return (
        <main className='flex-grow'>
            <div className='bg-gradient h-48 flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-10'>Contact</h1>
            </div>

            <section className='flex flex-col items-center justify-center py-10'>
                <div className='w-60 h-60 rounded-full overflow-hidden'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" className='w-full h-full object-cover' alt="" />
                </div>
                <h1 className='text-2xl xl:text-4xl font-medium mt-4'>Yash Kumar</h1>
                <p className='text-lg text-gray-500'>Graphic Design</p>
            </section>

        </main>
    )
}

export default Contact
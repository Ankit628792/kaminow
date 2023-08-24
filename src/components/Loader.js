import React from 'react'
import Loading from '../assets/loading.svg'

function Loader() {
    return (
        <section className='grid place-items-center fixed inset-0 z-50 bg-white'>
            <img src={Loading.src} className='max-w-xl' alt="" />
        </section>
    )
}

export default Loader
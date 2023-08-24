import Link from 'next/link'
import React from 'react'
import Logo from '../assets/kamino.png'


function Navbar() {
    return (
        <header className='w-full py-3 px-5 absolute top-0 left-0 right-0'>
            <nav className='w-full max-w-7xl mx-auto flex items-center justify-between'>
                <Link href={'/'}>
                    <div className="logo flex items-center gap-2">
                        <img className='h-14' src={Logo.src} alt="" />
                        <h1 className='text-3xl font-semibold text-white hidden md:inline-block dragon tracking-widest'>Kaminow</h1>
                    </div>
                </Link>

                <Link href={'/contact'}>
                    <button className='bg-white rounded-xl py-1.5 px-5 md:text-lg' >
                        Contact now
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
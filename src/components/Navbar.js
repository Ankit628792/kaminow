import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <header className='w-full py-3 px-5 absolute top-0 left-0 right-0'>
            <nav className='w-full max-w-7xl mx-auto flex items-center justify-between'>
                <Link href={'/'}>
                    <div className="logo">
                        <h1 className='text-4xl font-semibold text-white'>Kaminow</h1>
                    </div>
                </Link>

                <button className='bg-white rounded-xl py-1.5 px-5 md:text-lg'>
                    Contact now
                </button>
            </nav>
        </header>
    )
}

export default Navbar
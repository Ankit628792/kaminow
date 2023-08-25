'use client'
import Loader from '@/components/Loader'
import React, { useEffect, useState } from 'react'

function Collection() {
    const [collection, setCollection] = useState()
    const [designs, setDesigns] = useState([])
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState()

    const fetchDesigns = async (value) => {
        let res = await fetch(`/api/collections`, {
            method: 'POST',
            body: JSON.stringify({ type: 'get', _id: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.status == 200)
            res = await res.json()

        if (res.collection) {
            setCollection(res.collection)
            setDesigns(res.designs)
        }

        setLoading(false)

    }
    useEffect(() => {
        let value = window.location.href.split('?')[1]
        if (!value) {

        }
        else {
            fetchDesigns(value)
        }
    })

    if (loading) {
        return <Loader />
    }
    return (
        <main className='flex-grow'>
            <div className='bg-gradient h-72 flex flex-col items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-10 dragon tracking-widest'>{collection?.title}</h1>
            </div>

            <section className='max-w-7xl mx-auto flex flex-wrap gap-10 xl:gap-16 justify-center p-5 py-20'>
                {
                    designs?.map(((design, i) => <Design onClick={() => setActive(design)} key={i} design={design} />))
                }
            </section>

            {
                active
                    ?
                    <div className='fixed inset-0 grid place-items-center z-50 p-5'>
                        <div className='fixed inset-0 bg-black bg-opacity-60 cursor-pointer' onClick={() => setActive(false)}></div>

                        <div className='bg-white p-5 rounded-lg z-10 w-full max-w-xl'>
                            <div className='w-full h-full max-h-[550px]'>
                                <img src={active?.image} className='w-full h-full max-h-[550px] object-contain' alt="" />
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
        </main>
    )
}

export default Collection

const Design = ({ design, onClick }) => {
    return (
        <div className='w-60 h-[17rem] rounded-lg overflow-hidden cursor-pointer' style={{ boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }} onClick={onClick}>
            <img src={design.image} className='w-full h-full object-cover rounded-lg hover:scale-105 transition-all ease-in-out duration-150' alt="" />
        </div>
    )
}


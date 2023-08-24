'use client'
import Loader from '@/components/Loader'
import React, { useEffect, useState } from 'react'

function Collection() {
    const [collection, setCollection] = useState()
    const [designs, setDesigns] = useState([])
    const [loading, setLoading] = useState(true)

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
                <p className='text-white text-lg mt-10'>FROM</p>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white'>{collection?.title}</h1>
            </div>

            <section className='max-w-7xl mx-auto flex flex-wrap gap-10 xl:gap-16 justify-center p-5 py-20'>
                {
                    designs?.map(((design, i) => <Design key={i} design={design} />))
                }
            </section>
        </main>
    )
}

export default Collection

const Design = ({ design }) => {
    return (
        <div>
            <div className='w-60 h-[17rem] rounded-lg overflow-hidden'>
                <img src={design.image} className='w-full h-full object-cover rounded-lg hover:scale-105 transition-all ease-in-out duration-150' alt="" />
            </div>

        </div>
    )
}


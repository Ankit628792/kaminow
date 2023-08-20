'use client'
import { uploadImage } from '@/utils'
import React, { useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

function Setting() {
    const [adding, setAdding] = useState(false)
    const [collection, setCollection] = useState(false);
    const [collections, setCollections] = useState([]);
    const [creating, setCreating] = useState(false)
    const [design, setDesign] = useState(false);
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        fetch('/api/collections').then(res => res.json()).then(data => setCollections(data)).catch(e => console.log(e))
        fetch('/api/designs').then(res => res.json()).then(data => setDesigns(data)).catch(e => console.log(e))
    }, [])


    const addCollection = async (e) => {
        e.preventDefault();
        let { title, description, image } = collection
        if (title && description && image) {
            setAdding(true);
            if (typeof image == 'object') {
                image = await uploadImage(image)
            }
            let res = await fetch(`/api/collections`, {
                method: collection?._id ? 'PATCH' : 'POST',
                body: JSON.stringify({ ...collection, image }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            res = await res.json();
            if (res?._id) {

                if (collection?._id) {
                    let idx = collections.findIndex(item => item._id == collection._id)
                    if (idx > -1) {
                        let arr = [...collections];
                        arr[idx] = res;
                        setCollections(arr)
                    }
                }
                else {
                    setCollections([res, ...collections])
                }
                setCollection(false)
            }
            else ("Something went wrong ", res)
            setAdding(false)
        }
        else {
            alert("Please fill all details")
        }
    }

    const deleteCollection = async (_id) => {
        let res = await fetch(`/api/collections?_id=${_id}`, { method: 'DELETE' })
        res = await res.json();
        if (res._id) {
            let idx = collections.findIndex(item => item._id == _id)
            if (idx > -1) {
                let arr = [...collections];
                arr.splice(idx, 1)
                setCollections([...arr])
            }
        }
    }

    const addDesign = async (e) => {
        e.preventDefault();
        let { title, description, image, category } = design
        if (title && description && image && category) {
            setCreating(true);
            if (typeof image == 'object') {
                image = await uploadImage(image)
            }
            let res = await fetch(`/api/designs`, {
                method: design?._id ? 'PATCH' : 'POST',
                body: JSON.stringify({ ...design, image }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            res = await res.json();
            if (res?._id) {

                if (design?._id) {
                    let idx = designs.findIndex(item => item._id == design._id)
                    if (idx > -1) {
                        let arr = [...designs];
                        arr[idx] = res;
                        setDesigns(arr)
                    }
                }
                else {
                    setDesigns([res, ...designs])
                }
                setDesign(false)
            }
            else ("Something went wrong ", res)
            setCreating(false)
        }
        else {
            alert("Please fill all details")
        }
    }

    const deleteDesign = async (_id) => {
        let res = await fetch(`/api/designs?_id=${_id}`, { method: 'DELETE' })
        res = await res.json();
        if (res._id) {
            let idx = designs.findIndex(item => item._id == _id)
            if (idx > -1) {
                let arr = [...designs];
                arr.splice(idx, 1)
                setDesigns([...arr])
            }
        }
    }

    return (
        <main className='flex-grow py-24 px-5 bg-gradient'>

            <div className='bg-white rounded-lg p-4'>
                <h1 className='text-3xl font-medium text-gradient'>Collections</h1>
                <div className='flex flex-wrap gap-6 py-6'>
                    {
                        collections?.map((item, i) => (
                            <div key={i} className='flex flex-col items-center justify-center'>
                                <div className='w-52 h-52 grid place-items-center rounded-lg border overflow-hidden'>
                                    <img src={item.image} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='font-medium my-2'>{item.title}</h1>
                                <div className='flex items-center gap-5'>
                                    <span className='text-sky-500 cursor-pointer' onClick={() => setCollection(item)}>Edit</span>
                                    <span className='text-rose-500 cursor-pointer' onClick={() => deleteCollection(item?._id)}>Delete</span>
                                </div>
                            </div>
                        ))
                    }
                    <div className='w-52 h-52 grid place-items-center rounded-lg border cursor-pointer' onClick={() => setCollection(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-fuchsia-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg p-4 mt-10'>
                <h1 className='text-3xl font-medium text-gradient h-10'>My Designs</h1>
                <div className='flex flex-wrap gap-6 py-6'>
                    {
                        designs?.map((item, i) => (
                            <div key={i} className='flex flex-col items-center justify-center'>
                                <div className='w-52 h-52 grid place-items-center rounded-lg border overflow-hidden'>
                                    <img src={item.image} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='font-medium my-2'>{item.title}</h1>
                                <h1 className='font-medium my-2'>{item.category}</h1>
                                <div className='flex items-center gap-5'>
                                    <span className='text-sky-500 cursor-pointer' onClick={() => setDesign(item)}>Edit</span>
                                    <span className='text-rose-500 cursor-pointer' onClick={() => deleteDesign(item?._id)}>Delete</span>
                                </div>
                            </div>
                        ))
                    }

                    <div className='w-52 h-52 grid place-items-center rounded-lg border cursor-pointer' onClick={() => setDesign(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-fuchsia-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>

            </div>

            {collection && <div className='fixed inset-0 z-50 grid place-items-center'>
                <div className='bg-black bg-opacity-50 fixed inset-0' onClick={() => setCollection(false)}></div>
                <form onSubmit={addCollection} className='bg-white rounded-lg p-8 z-10 w-full max-w-xl min-h-[400px]'>
                    <h1 className='text-2xl font-medium text-gradient mb-6'>Add/Edit Collection</h1>

                    <FileUploader handleChange={(file) => setCollection({ ...collection, image: file })} multiple={false} name="image" types={['jpg', 'jpeg', 'png']} children={
                        <div className='w-48 h-48 bg-gray-100 grid place-items-center border rounded-lg cursor-pointer overflow-hidden'>
                            {
                                typeof collection.image == 'object' ? <img src={URL.createObjectURL(collection.image)} className='w-full h-full object-cover' alt='' /> :
                                    typeof collection.image == 'string' ? <img src={collection.image} className='w-full h-full object-cover' alt='' /> :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                            }
                        </div>
                    } />
                    <input type="text" name='title' value={collection.title} onChange={(e) => setCollection({ ...collection, title: e.target.value })} required className='border py-2 px-4 w-full my-6' placeholder='Enter the collection title' />
                    <textarea type="text" name='description' value={collection.description} onChange={(e) => setCollection({ ...collection, description: e.target.value })} required className='border py-2 px-4 w-full resize-none h-36 mb-4' placeholder='Enter the collection description'></textarea>
                    <button disabled={adding} type='submit' className='bg-gradient text-white rounded-lg py-2 w-[120px] flex items-center justify-center'>
                        {
                            adding ?
                                <div className='border-2 border-b-0 animate-spin w-6 h-6 rounded-full'>
                                </div>
                                :
                                <span>Submit</span>
                        }
                    </button>
                </form>
            </div>}
            {design && <div className='fixed inset-0 z-50 grid place-items-center'>
                <div className='bg-black bg-opacity-50 fixed inset-0' onClick={() => setDesign(false)}></div>
                <form onSubmit={addDesign} className='bg-white rounded-lg p-8 z-10 w-full max-w-xl min-h-[400px]'>
                    <h1 className='text-2xl font-medium text-gradient mb-6'>Add/Edit Design</h1>

                    <FileUploader handleChange={(file) => setDesign({ ...design, image: file })} multiple={false} name="image" types={['jpg', 'jpeg', 'png']} children={
                        <div className='w-48 h-48 bg-gray-100 grid place-items-center border rounded-lg cursor-pointer overflow-hidden'>
                            {
                                typeof design.image == 'object' ? <img src={URL.createObjectURL(design.image)} className='w-full h-full object-cover' alt='' /> :
                                    typeof design.image == 'string' ? <img src={design.image} className='w-full h-full object-cover' alt='' /> :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                            }
                        </div>
                    } />

                    <input type="text" name='title' value={design.title} onChange={(e) => setDesign({ ...design, title: e.target.value })} required className='border py-2 px-4 w-full my-6' placeholder='Enter the design title' />
                    <select value={design?.category} onChange={(e) => setDesign({ ...design, category: e.target.value })} className='border py-2 px-4 w-full mb-5'>
                        <option value="" disabled selected>Choose a collection</option>
                        {
                            collections?.map((item, i) => <option key={i} value={item._id}>{item.title}</option>)
                        }
                    </select>

                    <textarea type="text" name='description' value={design.description} onChange={(e) => setDesign({ ...design, description: e.target.value })} required className='border py-2 px-4 w-full resize-none h-36 mb-4' placeholder='Enter the collection description'></textarea>
                    <button disabled={adding} type='submit' className='bg-gradient text-white rounded-lg py-2 w-[120px] flex items-center justify-center'>
                        {
                            adding ?
                                <div className='border-2 border-b-0 animate-spin w-6 h-6 rounded-full'>
                                </div>
                                :
                                <span>Submit</span>
                        }

                    </button>
                </form>
            </div>}
        </main>
    )
}

export default Setting
import { Heart } from 'lucide-react'
import icon from '/currency-pound-1.svg';
import React from 'react'

function ProductCard() {
    return (
        <section className='space-y-2 rounded w-96'>
            <div className='w-full '>
                <img className='rounded' src="https://images.unsplash.com/photo-1726711340699-952d47133b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
            </div>
            <div className='space-y-1'>
                <div className='flex justify-between'>
                    <div className='space-y-1'>
                        <h1 className='font-light'>producName</h1>
                         <span className="flex font-normal">
                            <img src={icon} alt="icon" />
                            <h2> 30</h2>
                        </span>
                    </div>
                    <div>

                        <button className='p-1 border-2 border-[#E5E5E5] rounded'><Heart size={20} /></button>
                    </div>
                </div>
                <div className="flex gap-2 -space-x-1 overflow-hidden">
                    <img className="inline-block rounded-full w-7 h-7 ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className='text-sm font-normal'>abdul</span>
                </div>
            </div>

        </section>
    )
}

export default ProductCard

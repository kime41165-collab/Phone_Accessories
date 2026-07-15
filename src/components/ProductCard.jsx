import React from 'react'

function ProductCard({ image, title, price }) {
    return (
        <>
        <div className=' py-5'>
            <div className=' h-95 w-[22%] min-w-62 rounded-xl border-2 border-gray-500 p-2 
                            shadow-[0px_0px_4px_gray] hover:shadow-[0px_0px_4px_blue] 
                            hover:-translate-y-4 transition-all duration-300'>
                <div className='p-5 h-70'>
                    <img src={image} alt="" className='w-52 h-full rounded-md' />
                </div>
                <div>
                    <p className='line-clamp-1 text-xl font-bold py-3'>{title}</p>
                    <h1>{price}</h1>

                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard
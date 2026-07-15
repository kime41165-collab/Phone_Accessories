import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router'

function ProductDetail() {
  return (
    <>
        <div className='bg-amber-200 w-7xl mx-auto h-screen'>
        <div>
          <span className='flex items-center gap-2'>
            <Link to="/">Home</Link>
            <FaGreaterThan /> 
            <Link to="/product">Product</Link>  
            <FaGreaterThan />
            <Link>Title</Link>
          </span>
        </div>
      {/* product detail */}
        <div className='flex p-10'>
          <div className='bg-sky-200 w-[50%] h-125'>
            image
          </div>
          <div className='bg-red-300 w-[50%] h-125'>
            detail
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
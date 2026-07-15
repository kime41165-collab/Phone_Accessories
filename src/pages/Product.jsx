import React from 'react'
import Card from '../components/Card'

function Product() {
  return (
    <>
      <div className='h-560'>
        <div className='text-center py-10'>
          <h1 className='font-bold text-2xl'>Accessories Best Sellers</h1>
          <p className='text-gray-500'>Explore our best seller products</p>
        </div>
        
        <div>
          <Card/>
        </div>
        
      </div>
    </>
  )
}

export default Product
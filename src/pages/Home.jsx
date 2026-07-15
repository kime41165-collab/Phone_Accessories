import React from 'react'
import { NavLink } from 'react-router'
import ProductCard from '../components/ProductCard'
import img1 from '../images/photo_01.jpg'
import img from '../images/photo.jpg'
import Card from '../components/Card'
import img12 from '../images/photo_21.jpg'
import img22 from '../images/photo_22.jpg'
import img23 from '../images/photo_23.jpg'


function Home() {
  return (
    <>
      <div className="h-815">

        <div className="bg-amber-200 max-w-7xl h-screen flex  ">
          <div className='bg-gray-100 w-[50%] h-screen flex flex-col text-center items-center justify-center'>
            <h3 className='text-2xl py-4 '>New Collection</h3>
            <h1 className='text-4xl font-bold py-4'>Luxury without labels</h1>
            <p className='py-4'>Explore new-in product and best sellers</p>
            <button className='bg-amber-950 text-white p-2  rounded-md '>View Collection</button>
          </div>
          <div className='w-[50%]'>
            <img className='h-screen w-full' src={img} alt="" />
          </div>
        </div>

        <div className='text-center py-10'>
          <h1 className='font-bold text-2xl'>New Accessories</h1>
          <p className='text-gray-500'>Best seller products</p>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          <div>
            <img src={img21} alt="" className=' h-70 w-50 mx-8 rounded-xl' />
          </div>
          <div>
            <img src={img22} alt="" className=' h-70 w-50 mx-8 rounded-xl' />
          </div>
          <div>
            <img src={img23} alt="" className=' h-70 w-50 mx-8 rounded-xl' />
          </div>
        </div>

        <div className='text-center py-10'>
          <h1 className='font-bold text-2xl'>Accessories Best Sellers</h1>
          <p className='text-gray-500'>Explore our best seller products</p>
        </div>

        <div>
          <Card />
        </div>

      </div>
    </>
  )
}

export default Home
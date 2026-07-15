import React from 'react'
import { IoMdCloseCircleOutline, IoMdMenu } from 'react-icons/io'
import { Link, NavLink, Outlet } from 'react-router'
import { IoCartOutline, IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
function RootLayout() {
  const [isMenu , setMenu] = useState(false);

  const handleShowMenu = () => {
    setMenu(true);
  }
  const handleHideMenu = () => {
    setMenu(false);
  }
  return (
    <>
      <div className="bg-white relative ">
        <div className="bg-amber-50 max-w-7xl py-4 flex justify-between items-center px-5">
          <div className='flex items-center gap-4'>
            <IoMdMenu className='text-2xl md:hidden'onClick={handleShowMenu}/>
            <Link className='font-bold text-black text-2xl'>Phone Accessories</Link>
          </div>


          <div className='nav-bar hidden md:block  '>
            
            <nav className=' max-w-7xl py-4 mx-auto flex justify-between items-center px-5 vmx-10 gap-5'>
              <NavLink to="/"className={({ isActive }) =>
                    isActive ? " text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"}
                    >Home</NavLink> 
              <NavLink to="/product"className={({ isActive }) =>
                    isActive ? " text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"}
                    >Product</NavLink>
              <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? " text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"}
                    >Contact</NavLink>
            </nav>
          </div>

          <div className={`${isMenu ? 'left-0' : '-left-62.5'} bg-amber-100 w-55 h-screen absolute z-10 top-0 p-4 transition-all duration-300 md:-left-60`}>
            <div 
              className="bg-amber-100 w-full h-full flex-col gap-4 "
              onClick={handleHideMenu}>

              <div className="flex justify-end">
                <IoMdCloseCircleOutline className="hover:text-amber-400 hover:cursor-pointer transition-all text-4xl " 
                onClick={handleHideMenu}/>
              </div> 
              <NavLink to="/" className="bg-amber-100 flex items-center gap-1 p-2 m-2 hover:bg-amber-200 rounded-xl">
                <IoHome className="text-xl"/>
                <Link to="/">
                <span className="text-xl" >Home</span>
                </Link>
              </NavLink>

              <NavLink to="/" className="bg-amber-100 flex items-center gap-1 p-2 m-2 hover:bg-amber-200 rounded-xl">
                <IoCartOutline className="text-xl"/>
                <Link to="/product">
                <span className="text-xl">Product</span>
                </Link>
              </NavLink>

              <NavLink to="/" className="bg-amber-100 flex items-center gap-1 p-2 m-2 hover:bg-amber-200 rounded-xl">
                <FaUser className="text-xl"/>
                <Link to="/contect">
                <span className="text-xl">Contect</span>
                </Link>
              </NavLink> 

            </div>
          </div>
          <div>
            <Link>Search</Link>
          </div>

        </div>
      </div>
      <div className=''>
        <Outlet />
      </div>
      <footer className="bg-gray-300 border-gray-200 py-6 ">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-black">
          <p>© 2026 Phone Accessories. All rights reserved.</p>
        </div>
      </footer>
      
    </>
  )
}

export default RootLayout
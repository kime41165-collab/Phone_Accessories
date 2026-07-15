import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'
import ProductDetail from './components/ProductDetail'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>

            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/product" element={<Product/>}>Product</Route>
            <Route path="/contact" element={<Contact/>}>Contact</Route>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
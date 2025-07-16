import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Product from '../product/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../cart/Cart'
import { createContext } from 'react'
export const DataContext = createContext({})



function App() {

  const [cart, setCart] = useState([])


  return (
    <div>
      <BrowserRouter>
        <DataContext.Provider value={{ cart, setCart }} >
          <Header />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
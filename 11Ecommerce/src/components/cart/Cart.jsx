import React from 'react'
import { useContext } from 'react'
import { DataContext } from "../app/App.jsx"
import "../product/product.css"

function Cart() {
  const { cart } = useContext(DataContext)
  return (
    <div>
      {
        cart?.map((item, ind) => {
          return (
            <div key={ind} id={item.id} className='productContainer' >
              <div className='imgContainer'>
                <img src={item?.image} alt="img" />
              </div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
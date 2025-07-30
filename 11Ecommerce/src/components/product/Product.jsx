import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../product/product.css"
import { useContext } from 'react'
import { DataContext } from '../app/App'




function Product() {

    const [data, setData] = useState([])
    const { cart, setCart } = useContext(DataContext);


    // console.log(data);


    useEffect(() => {
        axios.get("https://fakestoreapi.in/api/products?limit=20")
            .then((result) => setData(result.data.products))
            .catch((err) => console.log(err))
    }, [])

    function handleAddtocart(item) {

        const isItemInCart = cart.find((cartItem) => {
            return cartItem.id === item.id

        })
        if (!isItemInCart) {
            setCart([...cart, item])
        } else {
            console.log("item is already added");
        }
    }
    // console.log(cart);


    return (
        <div className='container'>
            {
                data?.map((item, ind) => {
                    return (
                        <div key={ind} id={item.id} className='productContainer' >
                            <div className='imgContainer'>
                                <img src={item?.image} alt="img" />
                            </div>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <button className='btn' onClick={() => { handleAddtocart(item) }}>Add to Cart</button>


                        </div>
                    )
                })
            }

        </div>
    )
}

export default Product
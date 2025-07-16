import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../product/product.css"

function Product() {

    const [data, setData] = useState([])
    const [cart, setCart] = React.useState([1, 2])

    console.log(data);


    useEffect(() => {
        axios.get("https://fakestoreapi.in/api/products?limit=20")
            .then((result) => setData(result.data.products))
            .catch((err) => console.log(err))
    }, [])


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

                            <button className='btn' onClick={(e) => { console.log(e) }}>Add to Cart</button>


                        </div>
                    )
                })
            }

        </div>
    )
}

export default Product
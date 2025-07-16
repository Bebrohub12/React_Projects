import React from 'react'
import "../header/header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


function Header() {

    


    return (
        <div className="headerContainer">

            <div className="logo">
                <h2>Logo</h2>
            </div>

            <div className="searchbaar">
                <input type="search" name="" id="" />
                <span className='icon'><SearchIcon /></span>
            </div>

            <div className="cart">

                <span><ShoppingCartIcon /></span>
                {/* <span>{cart.length}</span> */}

            </div>

        </div>
    )
}

export default Header
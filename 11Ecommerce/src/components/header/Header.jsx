import React from 'react'
import "../header/header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../app/App';


function Header() {

    const { cart } = useContext(DataContext)


    return (
        <div className="headerContainer">

            <div className="logo">
                <h2>Logo</h2>
            </div>

            <div className="searchbaar">
                <input type="search" name="" id="" />
                <span className='icon' ><SearchIcon /></span>
            </div>

            <div className="cart">

                <Link to="/cart"><span><ShoppingCartIcon /></span></Link>
                <span>{cart.length}</span>

            </div>

        </div>
    )
}

export default Header
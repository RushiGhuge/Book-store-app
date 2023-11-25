import React, { useState } from 'react';
import "../navbar.css"
import logo from "../imgs/Standard Collection 11.png"
import logo1 from "../imgs/bx_bx-book-heart.png"
import logo2 from "../imgs/fluent_premium-person-20-regular.png"
import logo3 from "../imgs/ic_round-notifications-none.png"
import logo4 from "../imgs/IMG20210528181544.png"


const Navbar = ({setSearchInput}) => {

    const [input, setInput] = useState('');

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <div>
                    <h1>KeazoN</h1>
                    <h5>BOOKS</h5>
                </div>
            </div>

            <div className='nav-search'>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search for Books....' />
                <button onClick={() => {
                    setSearchInput(input)
                    setInput('')
                }}>Search</button>
            </div>

            <div className='nav-icons'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
        </div>
    );
}

export default Navbar;

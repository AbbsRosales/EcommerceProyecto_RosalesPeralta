import React from "react";
import '../Header.css';
import logo from '../imgs/logoP.png'
import CartWidget from "./CartWidget";

const Header = () => {
    return(
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>        
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Galery</a></li>
                    <li><a href="#">Shop</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
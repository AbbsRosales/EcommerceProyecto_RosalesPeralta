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
                    <li><a href="#">Óleos</a></li>
                    <li><a href="#">Acrilicos</a></li>
                    <li><a href="#">Acuarelas</a></li>
                    <li><a href="#">Pinceles y Bastidores</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
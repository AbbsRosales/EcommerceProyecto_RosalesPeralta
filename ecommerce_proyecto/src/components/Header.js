import React from "react";
import '../Header.css';
import logo from '../imgs/logoP.png'

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
                </ul>
            </nav>
        </div>
    )
}

export default Header;
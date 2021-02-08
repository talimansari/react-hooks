import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { BsFillBagFill } from "react-icons/bs";
import logo from "../images/img3.png";
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.cartReducer);
    return (
        <div className="nav">
            <div className="container">
                <div className="nav_container">
                    <div className="nav_left">
                        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
                    </div>
                      <h3><NavLink exact to="/calcu">Calculator</NavLink></h3>
                      <h3><NavLink exact to="/todoapp">Todo</NavLink></h3>
                      <h3><NavLink exact to="/form">Form</NavLink></h3>
                    <div className="nav_right">
                        <NavLink exact to="/cart">
                            <div className="basket">
                                < BsFillBagFill className="cart-icon" /> 
                                <span className="cart-no">{totalQuantities}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;
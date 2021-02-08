import React from 'react';
import { useSelector } from "react-redux";
import Banner from "./Banner";
import {NavLink} from 'react-router-dom'
import currencyFormatter from "currency-formatter";
const Home = () => {
    const { products } = useSelector(state => state.productsReducers );
     
    return (
        <div>
            <Banner />
            <div className="container">
                <div className="row">
                    {
                        products.map(items => (
                             <div className="col-md-3 my-3" key={items.id}>
                                <div className="product_warpper" >
                                    <figure className="product_img">
                                       <NavLink to={`/details/${items.id}`}>
                                       <img src={items.image} alt={items.image} />
                                       </NavLink>
                                    </figure>
                                     <h5 className="product_name">
                                         {items.name}
                                     </h5>
                                <ul className="price d-flex justify-content-between">
                                    <li><del>{currencyFormatter.format(items.price, { code: 'USD' })}</del><span >{items.discount}%</span></li>
                                    <li>{currencyFormatter.format(items.discountprice, { code: 'USD' })}</li>
                                </ul>
                             </div>
                             </div>
                        )) 
                    }
                </div>
            </div>
        </div>
        
    )
}
export default Home;
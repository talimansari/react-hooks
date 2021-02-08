import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import currencyFormatter from "currency-formatter";
import { BsDash,BsPlus } from 'react-icons/bs';
import { useDispatch,useSelector } from "react-redux";
function Details() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.productsReducers)
    useEffect(() => {
        dispatch({type:'PRODUCT', id: id})
    }, [id])
    const [quantity,setQuantity] = useState(1);
  const minusQuantity = () => {
        if(quantity > 1){
               setQuantity(quantity - 1);
        }
  }
    return (
        <div className="container pt-5">
            <div className="row">
            <div className="col-md-6">
                 <div className="detail_img">
                     <img src={product.image} alt="hello"/>
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="detail-content">
                     <div className="detail_name">
                         <h3>{product.name}</h3>
                     </div>
                     <div className="datail_price">
                     <ul className="price d-flex ">
                                    <li><del>{currencyFormatter.format(product.price, { code: 'USD' })}</del><span >{product.discount}%</span></li>
                                    <li>{currencyFormatter.format(product.discountprice, { code: 'USD' })}</li>
                      </ul>
                      <div className="detail_addtoCart d-flex align-items-center">
                          <div className="detail_quantity">
                                <button onClick={minusQuantity}><BsDash/></button>
                                <span>{quantity}</span>
                                <button onClick={()=> setQuantity(quantity + 1)}><BsPlus/></button>
                          </div>
                          <div className="add_to_btn ml-2 ">
                              <button className="btn btn-success" onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>ADD TO CART</button>
                          </div>
                      </div>
                     </div>
                     <div className="description">
                         <h3>Details</h3>
                         <p>{product.desc}</p>
                     </div>
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Details

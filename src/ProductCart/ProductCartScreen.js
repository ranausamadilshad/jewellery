import React from 'react'
import './ProductCard.css'
import products from '../Images/Products1.png';
import {Link} from 'react-router-dom';

const ProductCartScreen = () => {
    return (
        <>
        <section className="product_cart_section">
            <div className="custom_container">
                <div className="product_cart_main">
                    <div className="product_cart_header">
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>TOTAL</p>
                        <p className="hide_cart_field">STATUS</p>
                    </div>
                  <div className="product_cart_data_main">  
                    <div className="product_cart_data">
                        <div className="cart_product_data"><div className="cart_product_img"><img src={products} alt="img"/></div><span>YOUR PRODUCT TITLE</span></div>
                       <div className="cart_product_price"> <p>1000$</p></div>
                        <div className="cart_product_quantity"><input type="number" /></div>
                        <div className="cart_product_total_price"> <p>1200$</p></div>
                        <div className="remove_cart_product"><Link to="/remove">Remove</Link ></div>
                    </div>
                   
                    <div className="product_cart_data">
                        <div className="cart_product_data"><div className="cart_product_img"><img src={products} alt="img"/></div><span>YOUR PRODUCT TITLE</span></div>
                       <div className="cart_product_price"> <p>1000$</p></div>
                        <div className="cart_product_quantity"><input type="number" /></div>
                        <div className="cart_product_total_price"> <p>1200$</p></div>
                        <div className="remove_cart_product"><Link to="/remove">Remove</Link></div>
                    </div>
        
                  </div>  
                </div>
        
        <div className="total_price_box">
            <h2>Cart Totals</h2>
            <div className="cart_price_box_main">
                <div className="product_shipping">
                    <span>Shipping</span>
                    <p>Free Shipping</p>
                </div>
                <div className="product_shipping">
                    <span>Total Order</span>
                    <p>100$</p>
                </div>
            </div>
           <div className="cart_checkout_btn">
               <Link to="/remove">CheckOut</Link >
           </div> 
        </div>
        
            </div>
        </section>
        
        </>
    )
}

export default ProductCartScreen

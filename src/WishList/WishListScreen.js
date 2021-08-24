import React from 'react';
import './WishList.css';
import products from '../Images/Products1.png';

const WishListScreen = () => {
    return (
        <>
            <section class="product_wishlist_section">
    <div class="custom_container">
        <div class="product_wishlist_main">
            <div class="product_wishlist_header">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>Add to Cart</p>
                <p>Remove</p>
            </div>
          <div class="product_wishlist_data_main">  
            <div class="product_wishlist_data">
                <div class="wishlist_product_data"><div class="wishlist_product_img"><img src={products} alt="Img"/></div><span>YOUR PRODUCT TITLE</span></div>
               <div class="wishlist_product_price"> <p>1000$</p></div>
               <div class="remove_wishlist_product"><a>Add to Cart</a></div>
                <div class="remove_wishlist_product"><a>Remove</a></div>
            </div>

            <div class="product_wishlist_data">
                <div class="wishlist_product_data"><div class="wishlist_product_img"><img src={products} alt="Img"/></div><span>YOUR PRODUCT TITLE</span></div>
               <div class="wishlist_product_price"> <p>1000$</p></div>
               <div class="remove_wishlist_product"><a>Add to Cart</a></div>
                <div class="remove_wishlist_product"><a>Remove</a></div>
            </div>

          </div>  
        </div>

    </div>
</section>
        </>
    )
}

export default WishListScreen;

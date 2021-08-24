import React from 'react';
import './SpecialProduct.css';
import specialProduct from '../Images/Featured-img.jpg';
import {Link} from 'react-router-dom';

const SpecialProductScreen = () => {
    return (
        <>
<section className="special_product">
    <div className="custom_container">
       <div className="special_product_section"> 
        <div className="special_product_figure">
          <img src={specialProduct} alt="Special Product"/>
        </div>
        <div className="special_product_detail">
            <h2>Featured Product</h2>
            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
            <h3>High Designer Jewellery</h3>
            <span className="stock">Availability:<Link to="/but"> In stock</Link></span>
            <small><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small>
            <span className="price">101.00$</span>
            <Link className="purchase_special" to="/link">Purchase Now</Link>
         </div>
      </div>   
    </div>
</section>

        </>
    )
}

export default SpecialProductScreen;

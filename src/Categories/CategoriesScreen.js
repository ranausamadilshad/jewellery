import React from 'react'
import './Categories.css';
import products from '../Images/Products1.png';
import {Link} from 'react-router-dom';

const CategoriesScreen = () => {
    return (
        <>
          
<section className="product_section">
    <div className="custom_container">
      <div className="our_product_header">  
      <h3>Our Categories</h3>
      <ul>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
      </ul>
      <p>Lorem ipsum dolor sit amet<br/>
        consectetueradipiscing elit, sed diam nonummy nibh</p>
      </div>
      <div className="product_grid">
       
        <div className="product_card our_categories">
            <a >
                    <div className="figure">
                        <img src={products} alt="Categories" />
                       </div>
                       <div className="single_category_detail">
                        <h5>Necklaces And Rings</h5>                      
                         <p>View the Collection</p>
                        </div>    
             </a>  
             <div className="our_category_hover">
                <h4>Necklaces And Rings</h4>
                <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                <a href="#">View Shop</a>
            </div>
         </div>
  
         <div className="product_card our_categories">
            <a >
                    <div className="figure">
                        <img src={products} alt="Categories" />
                       </div>
                       <div className="single_category_detail">
                        <h5>Necklaces And Rings</h5>                      
                         <p>View the Collection</p>
                        </div>    
             </a>  
             <div className="our_category_hover">
                <h4>Necklaces And Rings</h4>
                <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                <Link to="/viewshop">View Shop</Link>
            </div>
         </div>
         <div className="product_card our_categories">
            <a >
                    <div className="figure">
                        <img src={products} alt="Categories" />
                       </div>
                       <div className="single_category_detail">
                        <h5>Necklaces And Rings</h5>                      
                         <p>View the Collection</p>
                        </div>    
             </a>  
             <div className="our_category_hover">
                <h4>Necklaces And Rings</h4>
                <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                <Link to="/viewshop">View Shop</Link>
            </div>
         </div>
         <div className="product_card our_categories">
            <a >
                    <div className="figure">
                        <img src={products} alt="Categories" />
                       </div>
                       <div className="single_category_detail">
                        <h5>Necklaces And Rings</h5>                      
                         <p>View the Collection</p>
                        </div>    
             </a>  
             <div className="our_category_hover">
                <h4>Necklaces And Rings</h4>
                <p>Lorem Ipsum is a dummy text that is mainly used by.</p>
                <a href="#">View Shop</a>
            </div>
         </div>

      </div>
    </div>
  </section>   
        </>
    )
}

export default CategoriesScreen

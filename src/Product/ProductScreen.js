import React from 'react'
import './Product.css';
import products1 from '../Images/Products1.png';

const ProductScreen = () => {
    return (
        <>
        
  
<section className="product_section">
    <div className="custom_container">
      <div className="our_product_header">  
      <h3>Our Products</h3>
      <ul>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
          <li><span><i className="far fa-gem"></i></span></li>
      </ul>
      <p>Lorem ipsum dolor sit amet<br/>
        consectetueradipiscing elit, sed diam nonummy nibh</p>
      </div>
      <div className="product_grid">
        <div className="product_card">
           <a href="#"> 
           <div className="figure">
            <img src={products1}/>
           </div>
           <div className="product_detail">
            <h5>High Designer Jewellery</h5>
             <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
             <p>100.00$</p>
            </div>
            </a>  
        </div>
  
        <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
  
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
  
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
  
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
         <div className="product_card">
            <a href="#"> 
            <div className="figure">
             <img src={products1}/>
            </div>
            <div className="product_detail">
             <h5>High Designer Jewellery</h5>
              <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
              <p>100.00$</p>
             </div>
             </a>  
         </div>
  
        
      </div>
    </div>
  </section> 

        </>
    )
}

export default ProductScreen

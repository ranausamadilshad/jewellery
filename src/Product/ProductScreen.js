import React,{useState} from 'react'
import './Product.css';
import products1 from '../Images/Products1.png';
import {Link} from 'react-router-dom';

const ProductScreen = () => {
    const [products] = useState([
        {id:1,name:'Dslr',price:400, Image:products1},
        {id:2,name:'Microphone',price:35, Image:products1},
        {id:3,name:'Headphone',price:220, Image:products1},
        {id:4,name:'FancyShoes',price:70, Image:products1},
        {id:5,name:'Rings',price:80, Image:products1},
        {id:6,name:'Watch',price:250, Image:products1},
        {id:7,name:'Iphone',price:150, Image:products1},
        {id:8,name:'Perfume',price:20, Image:products1},
    ]);
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
      {products.map((product)=>(
        <div className="product_card">
           <Link to="/singleproduct"> 
           <div className="figure">
            <img src={product.Image}/>
           </div>
           <div className="product_detail">
            <h5>{product.name}</h5>
             <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
             <p>{product.price}</p>
            </div>
            </Link>  
        </div>
   ) )}
        {/* <div className="product_card">
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
   */}
        
      </div>
    </div>
  </section> 

        </>
    )
}

export default ProductScreen
